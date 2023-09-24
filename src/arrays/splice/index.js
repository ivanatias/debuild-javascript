import { slice } from '../slice/index.js'

export function splice(arr, start, deleteCount, ...items) {
  if (start > arr.length) {
    start = arr.length
  }

  // If deleteCount === undefined, start + deleteCount will equal to NaN
  // in that case, fallback to the length of the array to be slice's end index
  const numOfDeleteEls = start + deleteCount || arr.length

  const removedEls = slice(arr, start, numOfDeleteEls)
  // Get the elements immediately after the position from slice's end index
  // including the first one (non-removed elements)
  const tail = slice(arr, numOfDeleteEls)
  arr.length = start

  for (let i = 0; i < items.length; i++) {
    arr.push(items[i])
  }

  for (let i = 0; i < tail.length; i++) {
    arr.push(tail[i])
  }

  return removedEls
}
