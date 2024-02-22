// const bodyPage = document.querySelector("body");
// document.addEventListener("DOMContentLoaded", () => {
//   let today = new Date();
//   let currentHour = today.getHours();

//   if (currentHour >= 0 && currentHour < 1) {
//     document.body.style.background = "pink"
// }
// else {
//   document.body.style.background ="grey"
// }
// });

const touitteur = document.querySelector("#touit");
const touitContainer = document.querySelector("#touit-container");

const addTouit = (name, message) => {
  const nextTouit = document.createElement("div");
  nextTouit.className = "touit";

  const newTouitContent = document.createElement("p");
  newTouitContent.textContent = `${name}: ${message}`;

  nextTouit.appendChild(newTouitContent);
  touitContainer.appendChild(nextTouit);
};

addTouit("Robin", "Yo la team");

const sendTouit = document.querySelector("#message");
const user = document.querySelector("#pseudo");
const btnForm = document.querySelector("#form-btn");

btnForm.addEventListener("click", () => {
  const userName = user.value + " : ";
  const touitNew = sendTouit.value;
  console.log(userName, touitNew);
});
