export function fetchReach(id: number) {
  return fetch("https://www.facebook.com/api/graphql/", {
    headers: createHeaders(),
    referrerPolicy: "origin-when-cross-origin",
    body: createFormUrlEncoded({
      doc_id: "6635716889819821",
      variables: JSON.stringify({
        adArchiveID: id,
        country: "ALL",
        source: null,
        isAdNonPolitical: true,
        isAdNotAAAEligible: false
      }),
    }),
    method: "POST",
    mode: "cors",
    credentials: "include"
  }).then(response => response.json());
}

function createFormUrlEncoded(obj: Record<string, any>) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
}

function createHeaders() {
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
    "x-asbd-id": "129477",
    "x-fb-friendly-name": "AdLibraryAdDetailsV2Query",
  }
}