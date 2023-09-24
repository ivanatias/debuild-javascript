import { keys } from './index.js'
import { obj } from '../samples.js'
import { describe, test } from 'node:test'
import { deepStrictEqual, throws } from 'node:assert'

describe('keys', () => {
  test('should throw if passed null or undefined as argument', () => {
    throws(() => keys(null), TypeError)
    throws(() => keys(undefined), TypeError)
  })

  test('should return an array of object keys', () => {
    deepStrictEqual(keys(obj), ['name', 'surname', 'age'])
  })
})
