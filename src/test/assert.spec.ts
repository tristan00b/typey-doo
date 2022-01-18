import {
  assert
} from '../lib/assert'

describe('assert', () => {
  test('it asserts the truthiness of a condition expression', () => {
    const shouldThrow = () => assert(''.length > 0, 'String value should not be empty')
    expect(shouldThrow).toThrow()

    const shouldNotThrow = () => assert(''.length == 0, 'String value should be empty')
    expect(shouldNotThrow).not.toThrow()
  })
})
