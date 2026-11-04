// Servidor estático mínimo para medir dist/ sin depender de python/serve.
// Comprime con Brotli (como Vercel) para que las cifras sean comparables.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root = path.resolve("dist");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".glb": "model/gltf-binary",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
const compressible = new Set([".html", ".js", ".mjs", ".css", ".json", ".svg", ".xml", ".txt", ".glb"]);
// Comprimir en cada petición bloqueaba el event loop y falseaba las medidas:
// se cachea el resultado por archivo y codificación.
const cache = new Map();
const compressed = (file, encoding) => {
  const key = `${encoding}:${file}`;
  if (cache.has(key)) return cache.get(key);
  const body = fs.readFileSync(file);
  const out =
    encoding === "br"
      ? zlib.brotliCompressSync(body, {
          params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 5 },
        })
      : zlib.gzipSync(body);
  cache.set(key, out);
  return out;
};

http
  .createServer((req, res) => {
    let rel = decodeURIComponent(req.url.split("?")[0]);
    if (rel.endsWith("/")) rel += "index.html";
    const file = path.join(root, rel);
    if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404).end("404");
      return;
    }
    const ext = path.extname(file);
    const headers = { "content-type": types[ext] || "application/octet-stream", "cache-control": "no-store" };
    const accepts = String(req.headers["accept-encoding"] ?? "");
    if (compressible.has(ext)) {
      const encoding = accepts.includes("br") ? "br" : accepts.includes("gzip") ? "gzip" : null;
      if (encoding) {
        headers["content-encoding"] = encoding;
        res.writeHead(200, headers).end(compressed(file, encoding));
        return;
      }
    }
    res.writeHead(200, headers);
    fs.createReadStream(file).pipe(res);
  })
  .listen(4399, () => console.log("static 4399"));
