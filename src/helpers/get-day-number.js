/**
 * daysInMonths is an array that records days accumulated each month in a common year (pre-calculated)
 * const daysInEachMonths = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
 */
 const accumulatedDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

/**
 * Day of the year is a number between 1 and 365 (366 for leap year)
 * e.g. 1st of January is day 1
 * @param {int} month 
 * @param {int} day 
 * @param {int} isLeapYear 
 * @returns {int} day number of the year
 */
 export const getDayNumber = (month, day, isLeapYear) => {
  let dayNumber = accumulatedDays[month - 1] + day;
  if (isLeapYear && dayNumber > 59) {
    dayNumber +=1;
  }
  return dayNumber;
 }

 export default getDayNumber;
