import { Either, left, right } from './either'

function doSomething(shouldSuccess: boolean): Either<string, number> {
  return shouldSuccess ? right(0) : left('error')
}

test('success result', () => {
  const result = doSomething(true)

  if (result.isRight()) {
    result.value
  }

  expect(result.isRight()).toBe(true)
  expect(result.isLeft()).toBe(false)
})

test('error result', () => {
  const result = doSomething(false)

  expect(result.isLeft()).toBe(true)
  expect(result.isRight()).toBe(false)
})
