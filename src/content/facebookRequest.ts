import merge from "lodash/merge";

export function createFetchOptions(options: RequestInit) {
  return merge({
    headers: createHeaders(),
    referrerPolicy: "origin-when-cross-origin",
    method: "POST",
    mode: "cors",
    credentials: "include"
  } satisfies RequestInit, options);
}

function createHeaders(): HeadersInit {
  return {
    accept: "*/*",
    "accept-language": "en-DE,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    pragma: "no-cache",
    "sec-ch-ua": `"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"`,
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": `"Windows"`,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
  }
}