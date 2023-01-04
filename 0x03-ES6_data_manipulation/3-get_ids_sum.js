export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.reduce((accum, currentVal) => accum + currentVal.id, 0);
}
