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

fetch("https://touiteur.cefim-formation.org/list")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur de réseau !");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    data.messages.forEach((touit) => {
      const addTouit = (name, message) => {
        const nextTouit = touitTemplate.content.cloneNode(true);
        const newTouitContent = nextTouit.querySelector(".touit");
        newTouitContent.textContent = `${name}: ${message}`;
        touitContainer.appendChild(nextTouit);
      };
      addTouit(touit.name, touit.message);
    });
  })
  .catch((error) => {
    console.error("Erreur !", error);
  });

/****************ENVOIE DE TOUIT***************************/
/*********************************************************/
const nameTouittos = document.querySelector("#name");
const messageInput = document.querySelector("#message");
const btnForm = document.querySelector("#form-btn");

btnForm.addEventListener("click", () => {
  const userName = nameTouittos.value + " ";
  const newMessage = messageInput.value;

  fetch("https://touiteur.cefim-formation.org/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name: userName,
      message: newMessage,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur de réseau !");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête :", error);
    });
});
