let modal = document.getElementById("modalPopUp");
let btn = document.getElementById("modalBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
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

window.onload = loadActivities;

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addActivity();
});

function activityComplete(event) {
  let activities = Array.from(JSON.parse(localStorage.getItem("activities")));
  activities.forEach((activity) => {
    if (activity.activity === event.nextElementSibling.value) {
      activity.completed = !activity.completed;
    }
  });
  localStorage.setItem("activities", JSON.stringify(activities));
  event.nextElementSibling.classList.toggle("completed");
}

// function loadActivities() {
//   if (localStorage.getItem("activities") == null) return;

//   let activities = Array.from(JSON.parse(localStorage.getItem("activities")));

//   activities.forEach((activity) => {
//     const list = document.querySelector("ul");
//     const li = document.createElement("li");
//     li.innerHTML = `<input type="checkbox" onclick="activityComplete(this)" class="check" ${
//       activity.completed ? "checked" : ""
//     }>
//           <input type="text" value="${activity.activity}" class="activity ${
//       activity.completed ? "completed" : ""
//     }" onfocus="getActivity(this)" onblur="editActivity(this)">
//     <span class="close" onclick="removeActivity(this)">&times;</span>`;
//     list.insertBefore(li, list.children[0]);
//   });
// }

// function editActivity(event) {
//   let activities = Array.from(JSON.parse(localStorage.getItem("activities")));
//   if (event.value === "") {
//     alert("Activities cannot be empty!");
//     event.value = currentActivity;
//     return;
//   }
//   activities.forEach((activity) => {
//     if (activity.activity === currentActivity) {
//       activity.activity = event.value;
//     }
//   });
//   localStorage.setItem("activities", JSON.stringify(activities));
// }

// function addActivity() {
//   const activity = document.querySelector("form input");
//   const list = document.querySelector("ul");

//   if (activity.value === "") {
//     alert("You cannot have an empty activity");
//     return false;
//   }

//   localStorage.setItem(
//     "activities",
//     JSON.stringify([
//       ...JSON.parse(localStorage.getItem("activities") || "[]"),
//       { activity: activity.value, completed: false },
//     ])
//   );

//   const li = document.createElement("li");
//   li.innerHTML = `<input type="checkbox" onclick="activityComplete(this)" class="box">
//       <input type="text" value="${activity.value}" class="activity" onfocus="getCurrentActivity(this)" onblur="editActivity(this)">
//       <span class="close" onclick="removeActivity(this)">&times;</span>`;
//   list.insertBefore(li, list.children[0]);

//   activity.value = "";
// }

// function removeActivity(event) {
//   let activities = Array.from(JSON.parse(localStorage.getItem("activities")));
//   activities.forEach((activity) => {
//     if (activity.activity === event.parentNode.children[1].value) {
//       activities.splice(activities.indexOf(activity), 1);
//     }
//   });
//   localStorage.setItem("activities", JSON.stringify(activities));
//   event.parentElement.remove();
// }

// var currentActivity = null;

// function getActivity(event) {
//   currentActivity = event.value;
// }

async function loadActivities() {
  let activities = [];
  try {
    // Get the latest high scores from the service
    const response = await fetch("/api/activities");
    activities = await response.json();

    // Save the scores in case we go offline in the future
    localStorage.setItem("activities", JSON.stringify(activities));
  } catch {
    // If there was an error then just use the last saved scores
    const activitiesText = localStorage.getItem("activities");
    if (activitiesText) {
      activities = JSON.parse(activitiesText);
    }
  }

  displayActivities(activities);
}

function displayActivities(activities) {
  const tableBodyEl = document.querySelector("#activities");

  if (activities.length) {
    // Update the DOM with the scores
    for (const [i, activity] of activities.entries()) {
      const positionTdEl = document.createElement("td");
      const nameTdEl = document.createElement("td");
      const scoreTdEl = document.createElement("td");
      const dateTdEl = document.createElement("td");

      positionTdEl.textContent = i + 1;
      nameTdEl.textContent = activity.name;
      activityTdEl.textContent = activity.score;
      dateTdEl.textContent = activity.date;

      const rowEl = document.createElement("tr");
      rowEl.appendChild(positionTdEl);
      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(scoreTdEl);
      rowEl.appendChild(dateTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML =
      "<tr><td colSpan=4>Add your first activity</td></tr>";
  }
}

loadActivities();
