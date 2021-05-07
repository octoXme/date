import isLeapYear from './is-leap-year';

const getDayDifference = (dateString1, dateString2) => {
  const date1 = dateString1.split(' ').map(Number);
  const date2 = dateString2.split(' ').map(Number);

  const year1 = date1[2];
  const year2 = date2[2];

  const month1 = date1[1];
  const month2 = date2[1];

  const day1 = date1[0];
  const day2 = date1[0];

  let totalDays = 0;

  console.log("year1 + 1", year1 + 1, year2 - 1)

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

  return totalDays;
}

export default getDayDifference;