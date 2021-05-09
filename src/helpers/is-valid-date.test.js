import { isValidDate, isStartDateLessThanEndDate, isValidDayString } from './is-valid-date';

/**
 * check input date is valid
 * 1. is valid format
 * 2. is a valid date
 */
it('given date is valid date', () => {
  expect(isValidDate('11 08 2000')).toEqual(true);
  expect(isValidDate('08 07 2012')).toEqual(false); // max year is 2010
  expect(isValidDate('29 02 1999')).toEqual(false);
  expect(isValidDate('08 7 1976')).toEqual(false);
  expect(isValidDate('29 02 2000')).toEqual(true);
  expect(isValidDate('05 30 1965')).toEqual(false);
  expect(isValidDate('1900 01 09')).toEqual(false);
});

it('check date ordering', () => {
  expect(isStartDateLessThanEndDate('08 01 1995', '24 12 2005')).toEqual(true);
  expect(isStartDateLessThanEndDate('15 04 1969', '15 04 1945')).toEqual(false);
  expect(isStartDateLessThanEndDate('25 06 1980', '03 10 1985')).toEqual(true);
});

// required format DD MM YYYY
it('given day string is valid format', () => {
  expect(isValidDayString('12 14 2000')).toEqual(true);
  expect(isValidDayString('12 2 1987')).toEqual(false);
  expect(isValidDayString('12021987')).toEqual(false);
});