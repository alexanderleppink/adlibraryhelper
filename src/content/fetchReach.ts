import { createUrlEncoded } from "../utils/utils";
import { createFetchOptions } from "./facebookRequest";

export async function fetchReach(id: number) {
  const body = createUrlEncoded({
    doc_id: "6635716889819821",
    variables: JSON.stringify({
      adArchiveID: id,
      country: "ALL",
      source: null,
      isAdNonPolitical: true,
      isAdNotAAAEligible: false,
    }),
  });
  return fetch(
    "https://www.facebook.com/api/graphql/",
    createFetchOptions({
      body,
    })
  )
    .then((response) =>
      response.text().then((text) => {
        try {
          const data = JSON.parse(text);
          return data.data.ad_library_main.ad_details.aaa_info
            .eu_total_reach as number;
        } catch (error) {
          console.error("Error parsing response", error, text, response.status);
          return null;
        }
      })
    )
    .catch((error) => {
      console.error("Request failed", error);
      return null;
    });
}
