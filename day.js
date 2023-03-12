// Get the modal

let modal = document.getElementById("modalPopUp");

// Get the button that opens the modal
let btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// function getPlayerName() {
//   return localStorage.getItem("month") ?? "Mystery player";
// }

// const playerNameEl = document.querySelector(".player-name");
// playerNameEl.textContent = this.getPlayerName();

const hoursTag = document.querySelector(".hours"),
  currentDate = document.querySelector(".current-date"),
  prevNextArrow = document.querySelectorAll(".arrows span");
// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currDate = date.getDate(),
  currMonth = date.getMonth(),
  currDay = date.getDay();
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

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const setDate = () => {
  if (
    new Date().getDate() === currDate &&
    new Date().getFullYear() === currYear &&
    new Date().getMonth() === currMonth
  ) {
    currentDate.innerText = `${days[currDay]},\n${months[currMonth]} ${currDate}, ${currYear} \n(Today)`;
  } else {
    currentDate.innerText = `${days[currDay]},\n${months[currMonth]} ${currDate}, ${currYear}`;
  }

  // passing current mon and yr as currentDate text
};

setDate();

prevNextArrow.forEach((arrow) => {
  // getting prev and next icons
  arrow.addEventListener("click", () => {
    // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1

    if (arrow.id === "prev") {
      currDate = currDate - 1;
      currDay = currDay - 1;
      if (currDay < 0) {
        currDay = currDay + 7;
      }
    } else {
      currDate = currDate + 1;
      currDay = currDay + 1;
      if (currDay > 6) {
        currDay = currDay - 7;
      }
    }

    if (
      currMonth == 0 ||
      currMonth == 2 ||
      currMonth == 4 ||
      currMonth == 6 ||
      currMonth == 7 ||
      currMonth == 9 ||
      currMonth == 11
    ) {
      if (currDate < 1 || currDate > 31) {
        // creating a new date of current year & month and pass it as date value
        date = new Date(currYear, currMonth, currDate, currDay);
        currMonth = date.getMonth();
        currYear = date.getFullYear();
        currDate = date.getDate();
        currDay = date.getDay();
      } else {
        date = new Date(); // pass the current date as date value
      }
      setDate();
    } else if (currMonth === 1) {
      if (currYear % 4 === 0) {
        if (currDate < 1 || currDate > 29) {
          // creating a new date of current year & month and pass it as date value
          date = new Date(currYear, currMonth, currDate, currDay);
          currMonth = date.getMonth();
          currYear = date.getFullYear(); // updating current year with new date year
          currDate = date.getDate(); // updating current month with new date month
          currDay = date.getDay();
        } else {
          date = new Date(); // pass the current date as date value
        }
        setDate();
      } else {
        if (currDate < 1 || currDate > 28) {
          // creating a new date of current year & month and pass it as date value
          date = new Date(currYear, currMonth, currDate, currDay);
          currMonth = date.getMonth();
          currYear = date.getFullYear(); // updating current year with new date year
          currDate = date.getDate(); // updating current month with new date month
          currDay = date.getDay();
        } else {
          date = new Date(); // pass the current date as date value
        }
        setDate();
      }
    } else if (
      currMonth === 3 ||
      currMonth === 5 ||
      currMonth === 8 ||
      currMonth === 10
    ) {
      if (currDate < 1 || currDate > 30) {
        // creating a new date of current year & month and pass it as date value
        date = new Date(currYear, currMonth, currDate, currDay);
        currMonth = date.getMonth();
        currYear = date.getFullYear(); // updating current year with new date year
        currDate = date.getDate(); // updating current month with new date month
        currDay = date.getDay();
      } else {
        date = new Date(); // pass the current date as date value
      }
      setDate();
    }
  });
});

function save() {
  const activityEl = document.querySelector("#activity");
  localStorage.setItem("activity", activityEl.value);
  window.location.href = "day.html";
}

// function getActivity() {
//   return localStorage.getItem("activity");
// }

// const activityEl = document.querySelector(".activity");
// activityEl.innerHTML = this.getActivity();
