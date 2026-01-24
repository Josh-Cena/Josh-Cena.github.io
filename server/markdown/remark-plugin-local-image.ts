import Path from "node:path";
import type { Plugin } from "unified";
import type { Root, Image } from "mdast";
import { visit } from "unist-util-visit";
import { imageSizeFromFile } from "image-size/fromFile";
import { createImportDeclaration, createJSXElement } from "./utils.ts";

const remarkLocalImage: Plugin = () => async (ast, vFile) => {
  const { children } = ast as Root;
  const images = new Map<
    string,
    { width?: number; height?: number; srcName: string; importUrl: string }
  >();
  const imagePromises: Promise<void>[] = [];
  visit(ast, "image", (node: Image) => {
    if (/^https?:\/\//u.test(node.url)) return;
    if (images.has(node.url)) return;
    imagePromises.push(
      imageSizeFromFile(Path.join(vFile.dirname ?? "", node.url))
        .then(({ width, height }) => {
          images.set(node.url, {
            width,
            height,
            srcName: `imageSrc${images.size}`,
            importUrl: node.url,
          });
        })
        .catch(() => {
          images.set(node.url, {
            srcName: `imageSrc${images.size}`,
            importUrl: node.url,
          });
        }),
    );
  });
  await Promise.all(imagePromises);
  children.unshift(
    ...Array.from(images.values()).map(({ importUrl, srcName }) =>
      createImportDeclaration(srcName, importUrl),
    ),
  );
  visit(ast, "image", (node: Image) => {
    const imageData = images.get(node.url);
    if (!imageData) return;
    Object.assign(
      node,
      createJSXElement("img", [
        { name: "src", value: imageData.srcName },
        { name: "alt", value: `"${node.alt?.replaceAll('"', '\\"') ?? ""}"` },
        ...(imageData.width && imageData.height
          ? [
              { name: "width", value: String(imageData.width) },
              { name: "height", value: String(imageData.height) },
            ]
          : []),
      ]),
    );
  });
};

export default remarkLocalImage;
