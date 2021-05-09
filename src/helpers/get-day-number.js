import isLeapYear from './is-leap-year';
/**
 * daysInMonths is an array that records days accumulated each month in common years
 * const daysInMonths = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
 */
 const daysInMonths = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

 export const getDayNumberInYear = (year, month, day) => {
   let dayNumber = daysInMonths[month - 1] + day;
   let totalDays = 365
   if (isLeapYear(year)) {
     dayNumber += 1;
     totalDays = 366;
   } 
 
   return {
     dayNumber,
     totalDays,
   };
 }

 export default getDayNumberInYear;
