/**
 * determine whether given year is leap year
 * https://en.wikipedia.org/wiki/Leap_year
 * Every year that is exactly divisible by 4 is a leap year,
 * except for years that are exactly divisible by 100, 
 * but these centurial years are leap years if they are exactly divisible by 400. 
 * For example, the years 1700, 1800, and 1900 are not leap years, but the years 1600 and 2000 are. 
 * @param year
 * @returns bool - whether given year is a leap year
 */
const isLeapYear = year => year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

export default isLeapYear;

