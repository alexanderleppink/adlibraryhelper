import { fetchCollation } from "./content/fetchCollation";
import { watchAds } from "./content/watchAds";
import { mutateAd } from "./content/mutateAd";
import { fetchReachLoad } from "./content/fetchReachLoad";

console.info("Initialize Meta Ad Helper!");

fetchReachLoad(100, 1).then(() => {
  console.info("Reach load done!");
});

fetchCollation("222002310979685");

watchAds(mutateAd);
