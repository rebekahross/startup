const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextArrow = document.querySelectorAll(".arrows span");
// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear();
currMonth = date.getMonth();
// storing full name of all months in array
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
const renderYear = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = "";
  for (let i = firstDayofMonth; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${currYear}`; // passing current mon and yr as currentDate text
  daysTag.innerHTML = liTag;
};

renderYear();

prevNextArrow.forEach((arrows) => {
  // getting prev and next icons
  arrows.addEventListener("click", () => {
    // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currYear = arrows.id === "prev" ? currYear - 1 : currYear + 1;
    date = new Date(currYear, new Date().getDate());
    currYear = date.getFullYear(); // updating current year with new date year
    renderYear(); // calling renderCalendar function
  });
});
