export default function hasValuesFromArray(aSet, arr) {
  return arr.reduce((acc, cur) => acc && aSet.has(cur), true);
}
