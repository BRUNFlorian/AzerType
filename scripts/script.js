function afficherResultat(score, nombreMotsProposes) {
  let spanScore = document.querySelector(".zoneScore span");
  let affichageScore = `${score} / ${nombreMotsProposes}`;
  spanScore.innerText = affichageScore;
  console.log("Votre score est de : " + score + " sur " + nombreMotsProposes);
}

// function choisirPhrasesOuMots() {
//   let choix = prompt(
//     "Voulez-vous jouer avec les mots (écrivez mots) ou pour les phrases (écrivez phrases) !"
//   );
//   while (choix != "mots" && choix != "phrases") {
//     prompt(
//       "Voulez-vous jouer avec les mots (écrivez mots) ou pour les phrases (écrivez phrases) !"
//     );
//   }
//   return choix;
// }

function lancerBoucleDeJeu(listePropositions) {
  let score = 0;
  for (let i = 0; i < listePropositions.length; i++) {
    motUtilisateur = prompt("Entrez le mot : " + listePropositions[i]);
    if (motUtilisateur === listePropositions[i]) {
      score++;
    }
  }
  return score;
}

function lancerJeu() {
  let choix = choisirPhrasesOuMots();
  let score = 0;
  let nombreMotsProposes = 0;
  if (choix === "mots") {
    score = lancerBoucleDeJeu(listeMots);
    nombreMotsProposes = listeMots.length;
  } else if (choix === "phrases") {
    score = lancerBoucleDeJeu(listePhrases);
    nombreMotsProposes = listePhrases.length;
  }

  afficherResultat(score, nombreMotsProposes);
}
