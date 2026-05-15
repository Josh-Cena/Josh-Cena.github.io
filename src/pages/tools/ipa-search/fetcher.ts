const CACHE_NAME = "ipa-search-cache-v1";

function getCacheRequest(url: string): Request {
  return new Request(url);
}

async function readCachedText(url: string): Promise<string | null> {
  if (typeof window === "undefined") return null;
  if (!("caches" in window)) return null;

  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(getCacheRequest(url));

  return cached ? cached.text() : null;
}

async function writeCachedText(url: string, text: string): Promise<void> {
  if (typeof window === "undefined") return;
  if (!("caches" in window)) return;

  try {
    const cache = await caches.open(CACHE_NAME);

    await cache.put(
      getCacheRequest(url),
      new Response(text, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      }),
    );
  } catch {
    // Cache quota can still fail; app continues without persistent cache.
  }
}

export async function fetchTextWithProgress(
  url: string,
  onProgress: (progress: number | null) => void,
): Promise<string> {
  const cached = await readCachedText(url);

  if (cached) {
    onProgress(1);
    return cached;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch database: ${res.status}`);

  const total = Number(res.headers.get("Content-Length"));
  const reader = res.body?.getReader();

  if (!reader) {
    const text = await res.text();
    await writeCachedText(url, text);
    onProgress(1);
    return text;
  }

  const chunks: Uint8Array[] = [];
  let received = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    chunks.push(value);
    received += value.length;
    onProgress(total ? received / total : null);
  }

  const bytes = new Uint8Array(received);
  let offset = 0;

  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.length;
  }

  const text = new TextDecoder().decode(bytes);

  await writeCachedText(url, text);
  onProgress(1);

  return text;
}
