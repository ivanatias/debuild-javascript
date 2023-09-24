export function values(obj) {
  if (!obj) {
    throw new TypeError(`Cannot convert ${obj} to object`)
  }

  const arr = []

  for (const key in obj) {
    arr.push(obj[key])
  }

  return arr
}
