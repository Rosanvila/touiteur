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

/*********************RECUP DE TOUITT*****************/
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
const nameTouittos = document.querySelector("#name");
const message = document.querySelector("#message");
const btnForm = document.querySelector("#form-btn");

const sendMessage = new XMLHttpRequest();
sendMessage.open("POST", "https://touiteur.cefim-formation.org/send", true);

sendMessage.addEventListener("readystatechange", () => {
  if (sendMessage.readyState === XMLHttpRequest.DONE) {
    if (sendMessage.status === 200) {
      const response = JSON.parse(sendMessage.responseText);
      console.log(response);
    }
  }
});

btnForm.addEventListener("click", () => {
  const userName = nameTouittos.value + " ";
  const newMessage = message.value;

  const data = new URLSearchParams();
  data.append("name", userName);
  data.append("message", newMessage);

  sendMessage.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  sendMessage.send(data);
});
