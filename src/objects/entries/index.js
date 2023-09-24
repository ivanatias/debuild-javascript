export function entries(obj) {
  if (!obj) {
    throw new TypeError(`Cannot convert ${obj} to object`)
  }

  const arr = []

  for (const key in obj) {
    arr.push([key, obj[key]])
  }

  return arr
}
