import getNumberOfLeapYears from 'helpers/get-number-of-leap-years';

/**
 * use link below for outcome results
 * https://miniwebtool.com/leap-years-list/
 */

it('return correct number of lead years between two given year', () => {
  expect(getNumberOfLeapYears(1900, 2000)).toEqual(25);
  expect(getNumberOfLeapYears(1967, 2000)).toEqual(9);
  expect(getNumberOfLeapYears(1981, 1985)).toEqual(1);
  expect(getNumberOfLeapYears(1980, 1985)).toEqual(2);
  expect(getNumberOfLeapYears(1905, 1976)).toEqual(18);
  expect(getNumberOfLeapYears(1904, 1976)).toEqual(19);
  expect(getNumberOfLeapYears(1900, 1988)).toEqual(22);
});
