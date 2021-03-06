import isLeapYear from 'helpers/is-leap-year';

/**
 * use link below for outcome results
 * https://miniwebtool.com/is-it-leap-year/
 * the years 2000 and 2400 are leap years,
 * while 1800, 1900, 2100, 2200, 2300, and 2500 are not leap years.
 */

it('isLeapYear function is valid', () => {
  expect(isLeapYear(2000)).toEqual(true);
  expect(isLeapYear(2400)).toEqual(true);
  expect(isLeapYear('2400')).toEqual(true);
  expect(isLeapYear(1800)).toEqual(false);
  expect(isLeapYear(1900)).toEqual(false);
  expect(isLeapYear(2100)).toEqual(false);
  expect(isLeapYear(2200)).toEqual(false);
  expect(isLeapYear(2300)).toEqual(false);
  expect(isLeapYear(2500)).toEqual(false);
  expect(isLeapYear(1996)).toEqual(true);
  expect(isLeapYear(1980)).toEqual(true);
});
