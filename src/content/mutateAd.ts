import { fetchReach } from "./fetchReach";
import $ from "jquery";

export async function mutateAd(element: Element) {
  const adId = getAdId(element);
  const reach = await fetchReach(adId);
  addReachToAd(element, reach);
}

function getAdId(element: Element) {
  return Number(element.textContent?.match(/\w+ ID: (\d{12,20})/)?.[1]);
}

function addReachToAd(ad: Element, reach: number) {
  const container = $(ad.querySelector(':scope > *')! as HTMLElement);
  container.css({
    display: 'flex',
    flexDirection: "column",
    gap: 8,
  });
  container.prepend($(`<div style="background: #1674ff; color: white; border-radius: 4px; font-weight: 500; padding: 4px 8px; margin-right: auto">${reach}</div>`));
}