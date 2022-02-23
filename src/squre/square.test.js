import {square} from "./square";


describe('square', () => {
  let mockValue
  beforeEach(() => {
    //вызывается каждый раз перед каждым тестом

  })
  beforeAll(() => {
    //один раз перед запуском всех тестов
  })
  test("Correct value", () => {
    /*expect(square(5)).toBe(25)
    expect(square(2)).toBeLessThan(5)
    expect(square(2)).toBeGreaterThan(3)
    expect(square(2)).not.toBeUndefined()*/
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2)
    expect(spyMathPow).toBeCalledTimes(1)

  })
  test("Incorrect value", () => {
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(1)
    expect(spyMathPow).toBeCalledTimes(0)

  })
  afterAll(() => {
  })
  afterEach(() => {
    jest.clearAllMocks()
    //удалить из бд
  })


})
//моки имеют свойства накапливаться