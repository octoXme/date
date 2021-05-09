/**
 * daysInMonths is an array that records days accumulated each month in common years
 * const daysInMonths = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
 */
 const accumulatedDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

 export const getDayNumber = (month, day, isLeapYear) => {
  let dayNumber = accumulatedDays[month - 1] + day;
  if (isLeapYear && dayNumber > 59) {
    dayNumber +=1;
  }
  return dayNumber;
 }

 export default getDayNumber;
