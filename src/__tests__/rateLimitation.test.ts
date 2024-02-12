import { fetchReachLoad } from "./fetchReachLoad";

describe("rateLimitationTest", () => {
  test("try to hit the rate limitation", async () => {
    await fetchReachLoad(1000, 1, { throwOnError: true });
  }, 1000000);
});
