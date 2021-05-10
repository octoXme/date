import getNumberOfLeapYears from 'helpers/get-number-of-leap-years';

/**
 * use link below for outcome results
 * https://miniwebtool.com/leap-years-list/
 */

it('return correct number of lead years between two given year', () => {
  expect(getNumberOfLeapYears(1900, 2000)).toEqual(25);
  expect(getNumberOfLeapYears(1967, 2000)).toEqual(9);
});