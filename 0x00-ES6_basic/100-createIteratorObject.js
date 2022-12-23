export default function createIteratorObject(report) {
  const nArr = [];
  for (const arr of Object.values(report)) {
    nArr.push(arr);
  }
  return nArr;
}
