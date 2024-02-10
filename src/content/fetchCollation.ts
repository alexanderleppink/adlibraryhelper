import { createUrlEncoded } from "../utils/utils";
import { createFetchOptions } from "./facebookRequest";

export async function fetchCollation(collationGroupId: string) {
  const body = createUrlEncoded({
    __a: "1",
    lsd: "1",
  })

  return fetch(`https://www.facebook.com/ads/library/async/collation/?collation_group_id=${collationGroupId}`, createFetchOptions({
    headers: {
      "x-fb-lsd": "1"
    },
    body: body,
  }))
    .then(response => response.text())
    .catch(error => console.log('error', error));
}