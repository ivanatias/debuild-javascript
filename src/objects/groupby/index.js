export function groupBy(iterable, cb) {
  if (typeof cb !== 'function') {
    throw new TypeError(`${cb} is not a function`)
  }

  const obj = {}

  const isPropertyKey = value => {
    const type = typeof value

    return (
      type === 'string' ||
      type === 'number' ||
      (type === 'symbol' && value.toString() === '[object Symbol]')
    )
  }

  for (const item of iterable) {
    const groupProp = cb(item)

    if (!isPropertyKey(groupProp)) continue

    if (obj[groupProp] === undefined) {
      obj[groupProp] = []
    }

    obj[groupProp].push(item)
  }

  return obj
}
