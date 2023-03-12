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

// function updateName() {
//   let nameEl = document.getElementById("#name");
//   localStorage.setItem("userName", nameEl.value);
//   console.log(localStorage.getItem("userName"));

//   const userNameEl = document.querySelector(".account-name");
//   userNameEl.textContent = localStorage.getItem("userName");
// }

// function updateName() {
//   const nameEl = document.querySelector("#name");

//   if (nameEl.value === "") {
//     alert("You cannot have an empty name");
//     return false;
//   }
//   localStorage.setItem("userName", nameEl.value);

// const input = document.querySelector("input");
// const log = document.getElementById("name");

// input.addEventListener("change", updateValue);
// function updateValue(e) {
//   log.textContent = e.target.value;
// }

// localStorage.setItem(
//   "activities",
//   JSON.stringify([
//     ...JSON.parse(localStorage.getItem("activities") || "[]"),
//     { activity: activity.value, completed: false },
//   ])
// );

// const li = document.createElement("li");
// li.innerHTML = `<input type="checkbox" onclick="activityComplete(this)" class="box">
//     <input type="text" value="${activity.value}" class="activity" onfocus="getCurrentActivity(this)" onblur="editActivity(this)">
//     <span class="close" onclick="removeActivity(this)">&times;</span>`;
// list.insertBefore(li, list.children[0]);

// activity.value = "";
// }
