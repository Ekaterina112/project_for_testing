import {mapArrToString} from "./mapArrToString";


describe('mapArrToString', () => {
  test("Correct values", () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3'])
  })
  test("Mixed values", () => {
    expect(mapArrToString([1, 2, 3, null, undefined, 'bla'])).toEqual(['1', '2', '3'])
  })

  test("Empty array", () => {
    expect(mapArrToString([])).toEqual([])
  })

  test("Not equal", () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4])
  })

})