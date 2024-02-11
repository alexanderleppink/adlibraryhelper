import { fetchReach } from "./fetchReach";

export async function fetchReachLoad(rounds: number, cluster: number) {
  for (let i = 0; i < rounds; i++) {
    console.info("test run", i);
    await Promise.all(
      Array(cluster)
        .fill(0)
        .map(async (_, clusterIndex) =>
          fetchReach(277715382000909).then((res) => {
            if (res === null) {
              throw new Error("res is null");
            }
          })
        )
    );
  }
}
