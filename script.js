const touitContainer = document.querySelector("#touit-container");
const touitTemplate = document.querySelector("#touit-template");
const originalClone = touitTemplate.content.cloneNode(true);

/*************************RECUP DE TOUITT***************************/
/*******************************************************************/

addTouit = (touit) => {
  const clonedTouit = originalClone.cloneNode(true);
  const newTouitContent = clonedTouit.querySelector(".touit");
  const nbrLike = newTouitContent.querySelector(".nbr-likes");
  const likeBtn = newTouitContent.querySelector(".like-btn");
  const dislikeBtn = newTouitContent.querySelector(".dislike-btn");
  const nameElement = newTouitContent.querySelector("#name");
  const messageElement = newTouitContent.querySelector("#message");

  nbrLike.textContent = `${touit.likes}`;
  nameElement.textContent = `${touit.name}`;
  messageElement.textContent = `${touit.message}`;

  touitContainer.appendChild(clonedTouit);

  /****        BOUTON DE LIKE     ****/
  likeBtn.addEventListener("click", () => {
    sendLike(touit.id);
  });

  /****        BOUTON DE DISLIKE     ****/
  dislikeBtn.addEventListener("click", () => {
    removeLike(touit.id);
  });
};

fetchData = () => {
  const apiUrl = "https://touiteur.cefim-formation.org/list";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur de requête: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      const messagesOrder = data.messages
        .sort((a, b) => b.ts - a.ts)
        .slice(0, 10);
      messagesOrder.forEach((touit) => {
        addTouit(touit);
        console.log("Données récupérées avec succès");
      });
    })
    .catch((error) => {
      console.error("Erreur de requête:", error.message);
    });
};
fetchData();

/************************ENVOIE DE LIKE*********************************/
/*********************************************************************/
sendLike = (touitId) => {
  const touitData = new URLSearchParams();
  touitData.append("message_id", touitId);

  fetch("https://touiteur.cefim-formation.org/likes/send", {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: touitData.toString(),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Erreur lors de la requête au serveur" + response.status
        );
      }
      console.log(
        "Like enregistré avec succès pour le touit avec l'ID : " + touitId
      );
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête au serveur :", error);
    });
};

/************************REMOVE DE LIKE*********************************/
/*********************************************************************/

removeLike = (touitId) => {
  const touitData = new URLSearchParams();
  touitData.append("message_id", touitId);

  fetch("https://touiteur.cefim-formation.org/likes/remove", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: touitData.toString(),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Erreur lors de la requête au serveur" + response.status
        );
      }
      console.log(
        "Like enregistré avec succès pour le touit avec l'ID : " + touitId
      );
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête au serveur :", error);
    });
};

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
