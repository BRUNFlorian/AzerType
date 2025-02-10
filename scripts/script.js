function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition;
}

let choixMotsOuPhrases = document.querySelectorAll(".optionSource input");
for (let i = 0; i < choixMotsOuPhrases.length; i++) {
  choixMotsOuPhrases[i].addEventListener("change", function () {
    if (choixMotsOuPhrases[i].value === 1) {
      afficherProposition(listeMots[0]);
    } else {
      afficherProposition(listePhrases[0]);
    }
  });
}

function afficherResultat(score, i) {
  let spanScore = document.querySelector(".zoneScore span");
  let affichageScore = `${score} / ${i}`;
  spanScore.innerText = affichageScore;
  console.log("Votre score est de : " + score + " sur " + i);
}

function lancerJeu() {
  let score = 0;
  let i = 0;

  let btnValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");
  afficherProposition(listeMots[i]);

  btnValiderMot.addEventListener("click", () => {
    console.log(inputEcriture.value);
    if (
      inputEcriture.value === listeMots[i] ||
      inputEcriture.value === listePhrases[i]
    ) {
      score++;
    }
    i++;
    afficherResultat(score, i);
    inputEcriture.value = "";
    if (listeMots[i] === undefined || listePhrases[i] === undefined) {
      afficherProposition("Le jeu est maintenant terminé");
      btnValiderMot.disabled = true;
    } else {
      if (choixMotsOuPhrases[0].checked) {
        afficherProposition(listeMots[i]);
      } else {
        afficherProposition(listePhrases[i]);
      }
    }
  });
}
