import { isStartDateLessThanEndDate, isValidDate } from './is-valid-date';
import isLeapYear from './is-leap-year';
import getDayNumber from './get-day-number';
import getNumberOfLeapYears from './get-number-of-leap-years';

const getDayDifference = (dateString1, dateString2, validated = false) => {
  let startDate = dateString1;
  let endDate = dateString2;

  // check date string are valid dates??? TODO return isValid false???
  if (!validated && (!isValidDate(startDate) || !isValidDate(endDate))) return;

  // check date order
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

  const startDayNumber = getDayNumber(month1, day1, isStartLeapYear);
  const endDayNumber = getDayNumber(month2, day2, isEndLeapYear);

  if (year1 === year2) {
    differenceInDays = endDayNumber - startDayNumber;
  } else {
    differenceInDays = (isStartLeapYear ? 366 : 365) - startDayNumber + endDayNumber;
    // if the difference between two given years is more than 1 year
    if (year2 - year1 > 1) {
      const fromYear = year1 + 1;
      const toYear = year2;
      const totalYearsBetween = toYear - fromYear;
      const totalLeapYears = getNumberOfLeapYears(fromYear, toYear);
      const daysInCommonYears = (totalYearsBetween - totalLeapYears) * 365;
      const daysInLeapYears = totalLeapYears * 366; 
      differenceInDays += daysInCommonYears + daysInLeapYears;
    }
  }

  // alterative way to calculate between days
  // for (var i = year1 + 1; i <= year2 - 1; i++) {
  //   if (isLeapYear(i)) {
  //     differenceInDays += 366;
  //   } else {
  //     differenceInDays += 365;
  //   }
  // }

  return ({
    startDate,
    endDate,
    differenceInDays,
    isValid: true,
  });
}

export default getDayDifference;