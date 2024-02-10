import { createUrlEncoded } from "../utils/utils";
import { createFetchOptions } from "./facebookRequest";

export async function fetchReach(id: number) {
  return fetch("https://www.facebook.com/api/graphql/", createFetchOptions({
    headers: {
      "x-asbd-id": "129477",
      "x-fb-friendly-name": "AdLibraryAdDetailsV2Query",
    },
    body: createUrlEncoded({
      doc_id: "6635716889819821",
      variables: JSON.stringify({
        adArchiveID: id,
        country: "ALL",
        source: null,
        isAdNonPolitical: true,
        isAdNotAAAEligible: false
      }),
    }),
  })).then(response => response.json())
    .then(data => data?.data?.ad_library_main?.ad_details?.aaa_info?.eu_total_reach);
}
