import { hello } from '../../src/index'
import { equal } from 'assert'

describe('hello in index file', () => {
  it('hello without parameter will return Hello World!',
    () => {
      const expected = 'Hello World!'
      const actual = hello()
      equal(actual, expected)
    })
})
