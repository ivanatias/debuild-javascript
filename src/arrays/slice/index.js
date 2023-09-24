export function slice(arr, start, end) {
  if (end === undefined) {
    end = arr.length
  }

  if (start < 0) {
    start = arr.length + start
  }

  if (end < 0) {
    end = arr.length + end
  }

  const newArr = []

  for (let i = start; i < end; i++) {
    newArr.push(arr[i])
  }

  return newArr
}
