import { createUrlEncoded } from "../utils/utils";
import { createFetchOptions } from "./facebookRequest";

export async function fetchCollation(collationGroupId: string) {
  const body = createUrlEncoded({
    __a: "1",
    lsd: "AVoz0KEv2o4",
    "x-fb-lsd": "AVoz0KEv2o4"
  })

  return fetch(`https://www.facebook.com/ads/library/async/collation/?collation_group_id=${collationGroupId}`, createFetchOptions({
    headers: {
      "x-fb-lsd": "AVoz0KEv2o4"
    },
    body: body,
  }))
    .then(response => response.text())
    .catch(error => console.log('error', error));
}