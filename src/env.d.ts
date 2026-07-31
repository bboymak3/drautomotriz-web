/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface CloudflareEnv {
  DB: D1Database;
  IMAGES: R2Bucket;
}
