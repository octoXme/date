/**
 * use link below for outcome results
 * https://www.timeanddate.com/date/durationresult.html
 */
 import getDayDifference from 'helpers/get-day-difference';

 it('return correct days between two given valid day strings', () => {
   expect(getDayDifference('08 01 1995', '24 12 2005')).toEqual('08 01 1995, 24 12 2005, 4003');
  expect(getDayDifference('15 04 1969', '12 09 1945')).toEqual('12 09 1945, 15 04 1969, 8616');
  expect(getDayDifference('26 12 1995', '05 01 1996')).toEqual('26 12 1995, 05 01 1996, 10');
  expect(getDayDifference('26 12 1995', '05 03 1999')).toEqual('26 12 1995, 05 03 1999, 1165');
  expect(getDayDifference('11 12 1999', '29 09 1999')).toEqual('29 09 1999, 11 12 1999, 73');
  expect(getDayDifference('11 12 1999', '11 11 1999')).toEqual('11 11 1999, 11 12 1999, 30');
 });
