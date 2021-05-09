/**
 * use link below for outcome results
 * https://www.timeanddate.com/date/durationresult.html
 */
 import getDayDifference from './get-day-difference';

 it('return correct days between two given valid day strings', () => {
   expect(getDayDifference('08 01 1995', '24 12 2005')).toEqual({ startDate: '08 01 1995', endDate: '24 12 2005', isValid: true, differenceInDays: 4003 });
  expect(getDayDifference('15 04 1969', '12 09 1945')).toEqual({ startDate: '12 09 1945', endDate: '15 04 1969', isValid: true, differenceInDays: 8616 });
  expect(getDayDifference('26 12 1995', '05 01 1996')).toEqual({ startDate: '26 12 1995', endDate: '05 01 1996', isValid: true, differenceInDays: 10 });
  expect(getDayDifference('26 12 1995', '05 03 1999')).toEqual({ startDate: '26 12 1995', endDate: '05 03 1999', isValid: true, differenceInDays: 1165 });
  expect(getDayDifference('11 12 1999', '29 09 1999')).toEqual({ startDate: '29 09 1999', endDate: '11 12 1999', isValid: true, differenceInDays: 73 });
  expect(getDayDifference('29 09 1999', '11 12 1999')).toEqual({ startDate: '29 09 1999', endDate: '11 12 1999', isValid: true, differenceInDays: 73 });
 });
