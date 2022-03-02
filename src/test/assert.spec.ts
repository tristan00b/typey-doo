import {
  assert
} from '../lib/assert'

describe('assert', () => {

  class AssertionError extends Error {}
  const message = 'condition not met'

  it('throws on a false condition argument', () => {
    expect(() => assert(false)).toThrow()
  })

  it('does not throw on a true condition argument', () => {
    expect(() => assert(true)).not.toThrow()
  })

  it('accepts an optional error instance', () => {
    expect(() => assert(false, new Error)).toThrow()
  })

  it('accepts an optional message', () => {
    expect(() => assert(false, message)).toThrow(message)
  })

  it('accepts an optional error type', () => {
    expect(() => assert(false, message, TypeError)).toThrow()
  })

  it('accepts a custom error type', () => {
    expect(() => assert(false, new AssertionError)).toThrowError(AssertionError)
    expect(() => assert(false, message, AssertionError)).toThrowError(AssertionError)
  })
})
