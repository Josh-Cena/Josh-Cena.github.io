/* eslint-disable @typescript-eslint/method-signature-style */
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "bash-parser";

declare interface Set<T> {
  difference(otherSet: Set<T>): Set<T>;
  intersection(otherSet: Set<T>): Set<T>;
  union(otherSet: Set<T>): Set<T>;
}

declare interface IterableIterator<T> {
  map(fn: (value: T) => U): IterableIterator<U>;
  filter(fn: (value: T) => unknown): IterableIterator<T>;
  some: (fn: (value: T) => unknown) => boolean;
  flatMap(fn: (value: T) => IterableFlattenable<U>): IterableIterator<U>;
}

declare interface IteratorConstructor {
  from(iterable: IterableFlattenable<T>): IterableIterator<T>;
}

type IterableFlattenable<T> = Iterable<T> | Iterator<T>;

// eslint-disable-next-line no-var
declare var Iterator: IteratorConstructor;
