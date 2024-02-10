export function createUrlEncoded(obj: Record<string, any>) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
}