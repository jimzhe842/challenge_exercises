// January starts at 0

const NUMBER_TO_DAY = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

function getDaysInMonth(year, month) {
  actualMonth = month + 1; // January is one based
  return new Date(year, actualMonth, 0).getDate();
}

function meetupDay(year, month, dayOfWeek, count) {
  let firstDayOfMonth = (new Date(year, month)).getDay();
  let targetDay = 1;
  while (NUMBER_TO_DAY[(firstDayOfMonth % 7)] !== dayOfWeek) {
    // firstDayOfMonth = (firstDayOfMonth + 1) % 7; (Wrong)
    firstDayOfMonth = firstDayOfMonth + 1;
    targetDay++;
  }
  if (count === "teenth") {
    while (targetDay < 12) {
      targetDay += 7;
    }
    // targetDay = firstDayOfMonth;
  } else if (count === "last") {
    let lengthOfMonth = getDaysInMonth(year, month); // have to adjust the month (if needed)
    while (targetDay <= lengthOfMonth) { // edge case (need <=)
      targetDay += 7;
    }
    targetDay = targetDay - 7;
  } else if (count === "1st") {
    targetDay = targetDay;
  } else if (count === "2nd") {
    targetDay = targetDay + 7;
  } else if (count === "3rd") {
    targetDay = targetDay + 14;
  } else if (count === "4th") {
    targetDay = targetDay + 21;
  } else if (count === "5th") {
    targetDay = targetDay + 28;
    let lengthOfMonth = getDaysInMonth(year, month);
    if (targetDay > lengthOfMonth) {
      throw "Invalid date";
    }
  }
  
  return new Date(year, month, targetDay);
}

module.exports = meetupDay;