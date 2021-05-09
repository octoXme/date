/**
 * use link below to check results
 * https://miniwebtool.com/day-of-year-calendar
 */
import getDayNumber from './get-day-number';

it('return correct days in a year', () => {
  expect(getDayNumber(2020, 8, 18)).toEqual({ "dayNumber": 231, "totalDays": 366 });
  expect(getDayNumber(1988, 10, 2)).toEqual({ "dayNumber": 276, "totalDays": 366 });
  expect(getDayNumber(2021, 5, 8)).toEqual({ "dayNumber": 128, "totalDays": 365 });
});