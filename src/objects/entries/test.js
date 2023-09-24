import { entries } from './index.js'
import { obj } from '../samples.js'
import { describe, test } from 'node:test'
import { deepStrictEqual, throws } from 'node:assert'

describe('entries', () => {
  test('should throw if passed null or undefined as argument', () => {
    throws(() => entries(null), TypeError)
    throws(() => entries(undefined), TypeError)
  })

  test('should return an array of tuples with key/value pairs', () => {
    deepStrictEqual(entries(obj), [
      ['name', 'John'],
      ['surname', 'Doe'],
      ['age', 30]
    ])
  })
})
