function myHours() {
  const actually = new Date();
  const heures = actually.getHours();
  const minutes = actually.getMinutes();
  const secondes = actually.getSeconds();

  const secondesRestantes =
    24 * 60 * 60 - (heures * 60 * 60 + minutes * 60 + secondes);

  const heuresRestantes = Math.floor(secondesRestantes / 3600);
  const minutesRestantes = Math.floor((secondesRestantes % 3600) / 60);
  const secondesRestantesAffichage = secondesRestantes % 60;

  const tempsRestant = `${heuresRestantes}:${minutesRestantes}:${secondesRestantesAffichage}`;

  console.log(tempsRestant);

  monHeure.textContent =tempsRestant + " Avant de touitter";
}

const monHeure = document.querySelector("#heure-actuelle");

myHours();
setInterval(myHours, 1000);

/*****************Button disabbled*****************/

const formButton = document.querySelector("#form-btn");

isMinuit = () => {
  const maintenant = new Date();
  const heures = maintenant.getHours();

  return heures >= 0 && heures < 1;
};

if (!isMinuit()) {
  formButton.disabled = true;
  formButton.style.backgroundColor = "gray";
  formButton.style.color = "white";
  monHeure.style.opacity = "1";
} else {
  formButton.disabled = false;
  formButton.style.backgroundColor = "";
  formButton.style.color = "";
}
