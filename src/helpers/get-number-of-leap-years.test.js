import getNumberOfLeapYears from './get-number-of-leap-years';

it('return correct number of lead years between two given year', () => {
  expect(getNumberOfLeapYears(1900, 2000)).toEqual(25);
  expect(getNumberOfLeapYears(1967, 2000)).toEqual(9);
});