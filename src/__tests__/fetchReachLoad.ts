import { fetchReach } from "../content/fetchReach";

export async function fetchReachLoad(
  rounds: number,
  cluster: number,
  {
    timeout = 0,
    throwOnError = true,
  }: Partial<{
    timeout: number;
    throwOnError: boolean;
  }> = {}
) {
  for (let i = 0; i < rounds; i++) {
    console.info("test run", i);
    await Promise.all(
      Array(cluster)
        .fill(0)
        .map(async (_, clusterIndex) =>
          fetchReach(277715382000909).then((res) => {
            if (res === null) {
              if (throwOnError) {
                throw new Error("res is null");
              } else {
                console.warn("res is null");
              }
            }
          })
        )
    );
    await new Promise((resolve) => setTimeout(resolve, timeout));
  }
}
