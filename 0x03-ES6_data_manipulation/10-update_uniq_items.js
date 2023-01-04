export default function updateUniqueItems(aMap) {
  if (!(aMap instanceof Map)) throw new Error('Cannot process');
  for (const [key, value] of aMap.entries()) {
    if (value === 1) {
      aMap.set(key, 100);
    } else aMap.set(key, value);
  }
  return aMap;
}
