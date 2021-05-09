import { isStartDateLessThanEndDate, isValidDate } from './is-valid-date';
import isLeapYear from './is-leap-year';
import getDayNumber from './get-day-number';
import getNumberOfLeapYears from './get-number-of-leap-years';

const getDayDifference = (dateString1, dateString2, validated = false) => {
  let startDate = dateString1;
  let endDate = dateString2;

  // check date string are valid dates??? TODO
  if (!validated && (!isValidDate(startDate) || !isValidDate(endDate))) return;

  console.log("isStartDateLessThanEndDate(startDate, endDate)", isStartDateLessThanEndDate(startDate, endDate))
  // check date order
  if (!isStartDateLessThanEndDate(startDate, endDate)) {
    startDate = dateString2;
    endDate = dateString1;
  }

  const date1 = dateString1.split(' ').map(Number);
  const date2 = dateString2.split(' ').map(Number);

  const year1 = date1[2];
  const year2 = date2[2];

  const month1 = date1[1];
  const month2 = date2[1];

  const day1 = date1[0];
  const day2 = date1[0];

  let totalDays = 0;

  const { dayNumber: startDayNumber, totalDays: startDayTotal } = getDayNumber(year1, month1, day1);
  const { dayNumber: endDayNumber } = getDayNumber(year2, month2, day2);

  // const getEndDate = getDayNumber(year2, month2, day2);

  totalDays = startDayTotal - startDayNumber;


  // console.log("year1 + 1", startDayNumber, startDayTotal)

  totalDays = totalDays + endDayNumber;

  // getNumberOfLeapYears(year1 + 1, year2 - 1)

  // if the difference between two days are less than 1 we only have calculate the month and day

  // calculate days before 2 years
  for (var i = year1 + 1; i <= year2 - 1; i++) {
    if (isLeapYear(i)) {
      totalDays += 366;
    } else {
      totalDays += 365;
    }
  }

  // calculate the rest

  return ({
    startDate,
    endDate,
    totalDays,
    isValid: true,
  });
}

export default getDayDifference;