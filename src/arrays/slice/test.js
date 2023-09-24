import { slice } from './index.js'
import arr from '../samples.js'
import { describe, test } from 'node:test'
import { deepStrictEqual } from 'node:assert'

describe('slice', () => {
  test('should return the expected new sliced array', async t => {
    await t.test(
      'slices from index 0 to index 2 without including index 2 element',
      () => {
        deepStrictEqual(slice(arr, 0, 2), [
          { name: 'asparagus', type: 'vegetables', quantity: 5 },
          { name: 'bananas', type: 'fruit', quantity: 0 }
        ])
      }
    )

    await t.test(
      'slices correctly from negative start index without end index',
      () => {
        deepStrictEqual(slice(arr, -2), [
          { name: 'cherries', type: 'fruit', quantity: 5 },
          { name: 'fish', type: 'meat', quantity: 22 }
        ])
      }
    )

    await t.test(
      'slices correctly from negative start index to negative end index',
      () => {
        deepStrictEqual(slice(arr, -2, -1), [
          { name: 'cherries', type: 'fruit', quantity: 5 }
        ])
      }
    )

    await t.test('returns empty array if nothing is sliced', () => {
      deepStrictEqual(slice(arr), [])
      deepStrictEqual(slice(arr, 0, 0), [])
      deepStrictEqual(slice(arr, 1, 0), [])
    })

    await t.test('slices correctly from index 0 to negative end index', () => {
      deepStrictEqual(slice(arr, 0, -2), [
        { name: 'asparagus', type: 'vegetables', quantity: 5 },
        { name: 'bananas', type: 'fruit', quantity: 0 },
        { name: 'goat', type: 'meat', quantity: 23 }
      ])
    })
  })

  test('should not mutate the original array', () => {
    slice(arr, 0, 2)
    deepStrictEqual(arr, [
      { name: 'asparagus', type: 'vegetables', quantity: 5 },
      { name: 'bananas', type: 'fruit', quantity: 0 },
      { name: 'goat', type: 'meat', quantity: 23 },
      { name: 'cherries', type: 'fruit', quantity: 5 },
      { name: 'fish', type: 'meat', quantity: 22 }
    ])
  })
})
