export function filter(arr, cb) {
  if (typeof cb !== 'function') {
    throw new TypeError(`${cb} is not a function`)
  }

  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i])
    }
  }

  return newArr
}
