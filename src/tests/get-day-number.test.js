import getDayNumber from 'helpers/get-day-number';
import isLeapYear from 'helpers/is-leap-year';

/**
 * use link below for outcome results
 * https://miniwebtool.com/day-of-year-calendar
 */

it('return correct days in a year', () => {
  expect(getDayNumber(8, 18, isLeapYear(2020))).toEqual(231);
  expect(getDayNumber(10, 2, isLeapYear(1988))).toEqual(276);
  expect(getDayNumber(5, 8, isLeapYear(2021))).toEqual(128);
  expect(getDayNumber(1, 5, isLeapYear(1996))).toEqual(5);
  expect(getDayNumber(6, 25, isLeapYear(1981))).toEqual(176);
  expect(getDayNumber(6, 25, isLeapYear(1980))).toEqual(177);
  expect(getDayNumber(10, 3, isLeapYear(1985))).toEqual(276);
});
