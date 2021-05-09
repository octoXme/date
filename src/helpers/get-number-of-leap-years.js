
/**
 * Follow the rules of leap year
 * 1. can be divisible by 4 but not by 100
 * 2. can be divisible by 400
 * 
 * work out the number that fullfil the conditions in [0, startYear - 1]
 * then the number that fullfil [0, endYear]
 * use endNumber - startNumber will be the number that fullfil the condition from start year to end year???
 */
const calculateYear = year => year / 4 - year / 100 + year / 400;
const getNumberOfLeapYears = (year1, year2) => Math.ceil(calculateYear(year2) - calculateYear(year1 - 1));

export default getNumberOfLeapYears;
