/**
 * Follow the rules of leap year
 * 1. can be divisible by 4 but not by 100
 * 2. can be divisible by 400
 * 
 * work out the total leap years from 0 to startYear (exclusive start year)
 * work out the total leap years from 0 to endYear
 * @param {*} yearNumber 
 * @returns {int}
 */
const leapYearsBefore = yearNumber => {
  let year = yearNumber;
  if (typeof year !== 'number') {
    year = Number(year);
  }

  return Math.trunc(year / 4) - Math.trunc(year / 100) + Math.trunc(year / 400);
};

/**
 * @param {*} year1 
 * @param {*} year2 
 * @returns {int} total leap years between two given years
 */
export const getNumberOfLeapYears = (year1, year2) => leapYearsBefore(year2) - leapYearsBefore(year1 - 1);

export default getNumberOfLeapYears;
