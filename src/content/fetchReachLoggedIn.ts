import { createUrlEncoded } from "../utils/utils";
import $ from "jquery";

export async function fetchReachLoggedIn(id: number) {
  const { lsdToken, dtsgToken } = getTokens();
  const accountId = getAccountId();

  const response = await fetch("https://www.facebook.com/api/graphql/", {
    method: "POST",
    headers: {
      accept: "*/*",
      "content-type": "application/x-www-form-urlencoded",
    },
    body: createUrlEncoded({
      av: accountId,
      __user: accountId,
      __csr: "",
      fb_dtsg: dtsgToken,
      lsd: lsdToken,
      variables:
        '{"adArchiveID":"' +
        id +
        '","pageID":"","country":"ALL","sessionID":"","source":null,"isAdNonPolitical":true,"isAdNotAAAEligible":false}',
      server_timestamps: "true",
      doc_id: "6635716889819821",
    }),
    mode: "same-origin",
    credentials: "include",
  });

  const data = await response.json();

  if (
    data &&
    data.data &&
    data.data.ad_library_main &&
    data.data.ad_library_main.ad_details &&
    data.data.ad_library_main.ad_details.aaa_info
  ) {
    return data.data.ad_library_main.ad_details.aaa_info.eu_total_reach;
  } else {
    return null;
    // return data.errors[0].summary;
  }
}

function getTokens() {
  const textBodyScript = $("script").text().split("[");
  const tokenLsd = textBodyScript[searchTokens(textBodyScript).indexLsdToken];
  const tokenDtsg = textBodyScript[searchTokens(textBodyScript).indexDtsgToken];

  const str1 = new RegExp('],{"token":"', "");
  const str2 = new RegExp('"},323],', "");
  const str3 = new RegExp('"},258],', "");

  function searchTokens(arr: any[]) {
    const lsdText = '"LSD",';
    const dtsgText = '"DTSGInitialData",';

    let indexLsdToken = 0;
    let indexDtsgToken = 0;

    $.each(arr, function (index, el) {
      if (el === lsdText) {
        indexLsdToken = index + 1;
      }
      if (el === dtsgText) {
        indexDtsgToken = index + 1;
      }
    });

    return {
      indexLsdToken,
      indexDtsgToken,
    };
  }

  return {
    lsdToken: tokenLsd.replace(str1, "").replace(str2, ""),
    dtsgToken: tokenDtsg.replace(str1, "").replace(str3, ""),
  };
}

function getAccountId() {
  let regText = /"ACCOUNT_ID":"(\d+)"/;
  let matchReg = regText.exec(document.documentElement.innerHTML);
  return matchReg?.[1];
}
