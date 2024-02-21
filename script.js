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
  const newTouit = document.createElement("div");
  newTouit.className = "touit";

  const NewTouitContent = document.createElement("p");
  NewTouitContent.textContent = "Bonjour";

  newTouit.appendChild(NewTouitContent);
  touitContainer.appendChild(newTouit);
};
