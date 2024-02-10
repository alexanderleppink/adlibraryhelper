import { fetchReach } from "./content/fetchReach";
import { fetchCollation } from "./content/fetchCollation";

console.info("Initialize Meta Ad Helper!");

fetchReach(277715382000909).then((reach) => console.log(reach));
fetchCollation("222002310979685").then((collation) => console.log(collation));
