/* ------------------------------------------------------------------------------------------------------------------ *\

   File: error.spec.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import {
  fail,
  isError,
  isAggregateError
} from '../../src/lib/error'

describe('fail', () => {

  const msg   = 'An error occurred'
  const ErrTs = [ Error, TypeError, SyntaxError] as const

  test('it throws an Error argument', () => {
    const shouldThrow = () => fail(new TypeError(msg))
    expect(shouldThrow).toThrow()
  })

  test('it throw an AggregateError argument', () => {
    const shouldThrow = () => fail(
      new AggregateError(ErrTs.map(ErrT => new ErrT(msg)))
    )

    expect(shouldThrow).toThrow()
  })

  test('it throws a string argument', () => {
    const shouldThrow = () => fail(msg)
    expect(shouldThrow).toThrow()
  })

  test('it throws a message as a given error type', () => {
    const shouldThrow = () => fail(msg, ErrTs[1])
    expect(shouldThrow).toThrow()
  })
})

describe('Error type predicates', () => {

  const values = [
    new Error,
    new TypeError,
    new SyntaxError,
    new AggregateError([]),
    'whatch out for the racoons!',
    new AggregateError([]),
    { name: 'dubious', message: 'is this an error?', stack: 'of stacks' },
    new Boolean
  ]

  const reducer = (acc: { errorCount: number, notErrorCount: number }, val: boolean) => {
    if (val) acc.errorCount +=1
    else acc.notErrorCount  +=1
    return acc
  }

  describe('isError', () => {

    test('it correctly indicates whether a value is belongs to an error type', () => {

      const counts = values.map(isError).reduce(reducer, { errorCount: 0, notErrorCount: 0 })
      const expected = 5

      expect(counts.errorCount).toBe(expected)
      expect(counts.notErrorCount).toBe(values.length - expected)
    })
  })

  describe('isAggregateError', () => {

    test('it correctly indicates whether a value is of type AggregateError', () => {

      const counts = values.map(isAggregateError).reduce(reducer, { errorCount: 0, notErrorCount: 0 })
      const expected = 2

      expect(counts.errorCount).toBe(expected)
      expect(counts.notErrorCount).toBe(values.length - expected)
    })
  })
})
