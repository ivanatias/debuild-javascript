export function map(arr, cb) {
  if (typeof cb !== 'function') {
    throw new TypeError(`${cb} is not a function`)
  }

  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i], i, arr))
  }

  return newArr
}
