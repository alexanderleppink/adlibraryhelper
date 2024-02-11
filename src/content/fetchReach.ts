import { createUrlEncoded } from "../utils/utils";
import { createFetchOptions } from "./facebookRequest";

export async function fetchReach(id: number) {
  return fetch(
    "https://www.facebook.com/api/graphql/",
    createFetchOptions({
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
          isAdNotAAAEligible: false,
        }),
      }),
    })
  )
    .then((response) =>
      response.text().then((text) => {
        try {
          const data = JSON.parse(text);
          return data?.data?.ad_library_main?.ad_details?.aaa_info
            ?.eu_total_reach;
        } catch (error) {
          console.error("Error parsing response", error);
          console.error("Response", text);
          console.error("Status", response.status);
          return null;
        }
      })
    )
    .catch((error) => console.error("Request failed", error));
}
