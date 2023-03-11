const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextArrow = document.querySelectorAll(".arrows span");
// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currWeek = 123,
  (currday = date.getDay());
// storing full name of all months in array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const renderDay = () => {
  let firstHourofDay = new Date(currYear, currWeek, 1).getDay(), // getting first day of week
    lastDateofWeek = new Date(currYear, currWeek + 1, 0).getDate(), // getting last date of week
    lastDayofWeek = new Date(currYear, currWeek, lastDateofWeek).getDay(), // getting last day of week
    lastDateofLastWeek = new Date(currYear, currWeek, 0).getDate(); // getting last date of previous week
  let liTag = "";
  for (let i = firstDayofWeek; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastWeek - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofWeek; i++) {
    // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday =
      i === date.getDate() &&
      currWeek === new Date().getWeek() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayofWeek; i < 6; i++) {
    // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofWeek + 1}</li>`;
  }
  currentDate.innerText = `${weeks[currWeek]} ${currYear}`; // passing current mon and yr as currentDate text
  daysTag.innerHTML = liTag;
};

renderDay();

prevNextArrow.forEach((arrows) => {
  // getting prev and next icons
  arrows.addEventListener("click", () => {
    // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = arrows.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(); // calling renderCalendar function
  });
});
