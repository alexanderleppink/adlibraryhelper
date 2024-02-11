import { fetchReachLoad } from "../content/fetchReachLoad";

describe("rateLimitationTest", () => {
  test("try to hit the rate limitation", async () => {
    await fetchReachLoad(100, 10);
  }, 1000000);
});
