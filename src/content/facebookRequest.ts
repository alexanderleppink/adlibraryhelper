import merge from "lodash/merge";

export function createFetchOptions(options: RequestInit & { body?: string }) {
  return merge(
    {
      headers: createHeaders(options?.body || ""),
      method: "POST",
    } satisfies RequestInit,
    options
  );
}

function createHeaders(content: string): HeadersInit {
  const blob = new Blob([content]);
  const contentLength = blob.size;
  return {
    accept: "*/*",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "User-Agent": "PostmanRuntime/7.36.1",
    "Content-Length": `${contentLength}`,
    "sec-fetch-site": "same-origin",
  };
}
