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

/*********************ENVOIE DE TOUITT*****************/
const touitContainer = document.getElementById("touit-container");
const touitTemplate = document.getElementById("touit-template");

const getMessage = new XMLHttpRequest();
getMessage.open("GET", "https://touiteur.cefim-formation.org/list", true);

getMessage.addEventListener("readystatechange", () => {
  if (getMessage.readyState === XMLHttpRequest.DONE) {
    if (getMessage.status === 200) {
      const response = JSON.parse(getMessage.responseText);
      console.log(response);

      response.messages.forEach((touit) => {
        const addTouit = (name, message) => {
          const nextTouit = touitTemplate.content.cloneNode(true);
          const newTouitContent = nextTouit.querySelector(".touit");
          newTouitContent.textContent = `${name}: ${message}`;
          touitContainer.appendChild(nextTouit);
        };
        addTouit(touit.name, touit.message);
      });
    } else {
      console.error("Erreur !");
    }
  }
});
getMessage.send();

/****************ENVOIE DE TOUIT***************************/
/*********************************************************/
const name = document.querySelector("#name")
const message = document.querySelector("#message")
const btnForm = document.querySelector("#form-btn")

btnForm.addEventListener("click", () => {
  const userName = name.value + " : ";
  const newMessage = message.value;
  console.log(userName, newMessage);
});
