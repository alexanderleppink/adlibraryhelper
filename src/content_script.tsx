import { fetchCollation } from "./content/fetchCollation";
import { watchAds } from "./content/watchAds";
import { mutateAd } from "./content/mutateAd";

console.info("Initialize Meta Ad Helper!");

fetchCollation("222002310979685");

watchAds(mutateAd);
