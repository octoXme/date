import { isStartDateLessThanEndDate, isValidDate } from './is-valid-date';
import isLeapYear from './is-leap-year';
import getDayNumber from './get-day-number';
import getNumberOfLeapYears from './get-number-of-leap-years';

const getDayDifference = (dateString1, dateString2, validated = false) => {
  let startDate = dateString1;
  let endDate = dateString2;

  // if dayStrings haven't been validated beforehand
  if (!validated && (!isValidDate(startDate) || !isValidDate(endDate))) return 'Invalid output, please check your inputs';

  // check date order, startDate must be less than endDate for the following calculations to work
  if (!isStartDateLessThanEndDate(startDate, endDate)) {
    startDate = dateString2;
    endDate = dateString1;
  }

  const date1 = startDate.split(' ').map(Number);
  const date2 = endDate.split(' ').map(Number);

  const year1 = date1[2];
  const year2 = date2[2];

  const month1 = date1[1];
  const month2 = date2[1];

  const day1 = date1[0];
  const day2 = date2[0];

  let differenceInDays = 0;

  const isStartLeapYear = isLeapYear(year1);
  const isEndLeapYear = isLeapYear(year2);

  // get the day number of start and end date
  const startDayNumber = getDayNumber(month1, day1, isStartLeapYear);
  const endDayNumber = getDayNumber(month2, day2, isEndLeapYear);

  // if dates are from the same year,
  // we only need to know the difference between the endDayNumber and startDayNumber
  if (year1 === year2) {
    differenceInDays = endDayNumber - startDayNumber;
  } else {
    // calculate the days from start date to the end of year, total number of the start year - day number of start date
    // and the days from the beginning of the year to end date which is the day number of the end date
    differenceInDays = (isStartLeapYear ? 366 : 365) - startDayNumber + endDayNumber;

    // if the difference between two given calendar years is more than 1 year
    if (year2 - year1 > 1) {
      // total range of years excluding already counted first year  
      const totalYearsBetween = year2 - (year1 + 1);

      // calculate the total leap years excluding the already counted end year
      let totalLeapYears = getNumberOfLeapYears(year1 + 1, year2 - 1);

      // total days in common years
      const daysInCommonYears = (totalYearsBetween - totalLeapYears) * 365;

      // total days in leap years
      const daysInLeapYears = totalLeapYears * 366; 

      // add the days in common years and days in leaps to the result
      differenceInDays += daysInCommonYears + daysInLeapYears;
    }
  }

  return `${startDate}, ${endDate}, ${differenceInDays}`;
}

export default getDayDifference;
