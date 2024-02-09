import { fetchReach } from "./content/fetchReach";

console.info("Initialize Meta Ad Helper!");

fetchReach(277715382000909).then((reach) => console.log(reach));
