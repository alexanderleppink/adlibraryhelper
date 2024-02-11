import merge from "lodash/merge";

export function createFetchOptions(options: RequestInit) {
  return merge(
    {
      headers: createHeaders(),
      method: "POST",
    } satisfies RequestInit,
    options
  );
}

function createHeaders(): HeadersInit {
  return {
    accept: "*/*",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "User-Agent": "PostmanRuntime/7.36.1",
    "sec-fetch-site": "same-origin",
  };
}
