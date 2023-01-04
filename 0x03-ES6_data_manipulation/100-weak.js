export const weakMap = new WeakMap();
let callTime = 1;

export function queryAPI(endPoint) {
  weakMap.set(endPoint, callTime);
  callTime += 1;
  const callCount = weakMap.get(endPoint);
  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
