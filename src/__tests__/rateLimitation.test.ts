import { fetchReach } from "../content/fetchReach";

describe("rateLimitationTest", () => {
  test("try to hit the rate limitation", async () => {
    for (let i = 0; i < 100; i++) {
      console.log("test run", i);
      await Promise.all(
        Array(10)
          .fill(0)
          .map(async () =>
            fetchReach(277715382000909).then((res) => {
              if (res === null) {
                throw new Error("res is null");
              }
            })
          )
      );
    }
  }, 1000000);
});
