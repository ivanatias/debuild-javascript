import { values } from './index.js'
import { obj } from '../samples.js'
import { describe, test } from 'node:test'
import { deepStrictEqual, throws } from 'node:assert'

describe('values', () => {
  test('should throw if passed null or undefined as argument', () => {
    throws(() => values(null), TypeError)
    throws(() => values(undefined), TypeError)
  })

  test('should return an array of object property values', () => {
    deepStrictEqual(values(obj), ['John', 'Doe', 30])
  })
})
