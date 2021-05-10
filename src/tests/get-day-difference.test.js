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
  expect(getDayDifference('28 02 1996', '28 03 1996')).toEqual('28 02 1996, 28 03 1996, 29');
  expect(getDayDifference('01 05 2020', '10 05 2020')).toEqual('Invalid output, please check your inputs');
  expect(getDayDifference('25 06 1980', '03 10 1985')).toEqual('25 06 1980, 03 10 1985, 1926');
  expect(getDayDifference('12 10 1976', '14 07 1904')).toEqual('14 07 1904, 12 10 1976, 26388');
  expect(getDayDifference('25 06 1928', '03 10 1964')).toEqual('25 06 1928, 03 10 1964, 13249');
  expect(getDayDifference('25 06 1928', '03 10 1965')).toEqual('25 06 1928, 03 10 1965, 13614'); // start is leap year
  expect(getDayDifference('11 12 1909', '19 08 1961')).toEqual('11 12 1909, 19 08 1961, 18879'); // end is leap year
  expect(getDayDifference('25 02 1928', '03 10 1965')).toEqual('25 02 1928, 03 10 1965, 13735');
  expect(getDayDifference('25 02 1909', '01 01 1961')).toEqual('25 02 1909, 01 01 1961, 18938');
 });
