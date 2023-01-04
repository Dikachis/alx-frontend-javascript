export default function cleanSet(aSet, startString) {
  const res = [];
  let result = '';
  if (startString && typeof startString === 'string') {
    for (const set of aSet) {
      if (set && set.startsWith(startString)) {
        const temp = set.slice(startString.length);
        res.push(temp);
      }
    }
    result = res.join('-');
  }
  return result;
}
