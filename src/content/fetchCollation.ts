export async function fetchCollation(collationGroupId: string) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("__a", "1");
  urlencoded.append("lsd", "AVoz0KEv2o4");

  return fetch(`https://www.facebook.com/ads/library/async/collation/?collation_group_id=${collationGroupId}`, {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
  })
    .then(response => response.text())
    .catch(error => console.log('error', error));
}