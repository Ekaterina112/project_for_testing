import {validateValue} from "./validateValue";

test("Validation value", () => {
  expect(validateValue(50)).toBe(true)
})

describe('validateValue', ()=>{
  test("Correct value", () => {
    expect(validateValue(50)).toBe(true)
  })
  test("Less correct value", () => {
    expect(validateValue(-1)).toBe(false)
  })
  test("More correct value", () => {
    expect(validateValue(101)).toBe(false)
  })

})