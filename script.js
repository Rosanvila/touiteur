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

const addTouit = () => {
  const nextTouit = document.createElement("div");
  newTouit.className = "touit";

  const NewTouitContent = document.createElement("p");
  NewTouitContent.textContent = "Bonjour";

  nextTouit.appendChild(NewTouitContent);
  touitContainer.appendChild(newTouit);
};

const sendTouit = document.querySelector("#message");
const user = document.querySelector("#pseudo");
const btnForm = document.querySelector("#form-btn");

btnForm.addEventListener("click", () => {
  const userName = user.value + " : ";
  const touitNew = sendTouit.value;
  console.log(userName, touitNew);
});
