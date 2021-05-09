import isLeapYear from './is-leap-year';

const requiredDateFormat = "DD MM YYYY";
const requiredDateSize = requiredDateFormat.length;

// check the given date string is valid
export const isValidDayString = dateString => dateString && dateString.length === requiredDateSize;

// min year 1900 max year 2010
const isValidYear = year => year >= 1900 && year <=2010;
const isValidMonth = month => month > 0 && month <= 12;
const isValidDay = (year, month, day) => {
  let days = 0;
  switch(month) {
    case 2:
      if (isLeapYear(year)) {
        days = 29;
      } else {
        days = 28;
      }
      break;
    // months with 31 days
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      days = 31;
      break;
    // rest of months with 30 days
    default:
      days = 30;
      break;
  }

  return day > 0 && day <= days;
}

export const isValidDate = dateString => {
  if (!isValidDayString(dateString)) return false;
  const date = dateString.split(' ').map(Number);
  return isValidDay(date[2], date[1], date[0]) && isValidMonth(date[1]) && isValidYear(date[2]);
}

// use to arrange the order of two dates
export const isStartDateLessThanEndDate = (dateString1, dateString2) => {
  if (!isValidDate(dateString1) || !isValidDate(dateString2)) return false;

  // convert input string format of 'DD MM YYYY' to YYYYMMDD for comparison 
  let date1 = Number(dateString1.split(' ').reverse().join(''));
  let date2 = Number(dateString2.split(' ').reverse().join(''));

  if (date1 <= date2) {
    return true;
  }

  return false;
}
