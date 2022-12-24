export default function iterateThroughObject(reportWithIterator) {
  let strin = '';
  let _ = 0;
  for (const objs of reportWithIterator) {
    strin += objs;
    _ += 1;
    if (_ !== reportWithIterator.length) {
      strin += ' | ';
    }
  }

  return strin;
}
