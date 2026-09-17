export function countOccurrences(arr) {
  if (arr == null) return {};

  const result = {};
  for (const item of arr) {
    const key = String(item);
    result[key] = (result[key] ?? 0) + 1;
  }

  return result;
}
