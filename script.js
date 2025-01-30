// Cette variable va contenir le score de l'utilisateur, il commence à zéro
let score = 0;

// Cette variable va contenir le mot ou la phrase entré par l'utilisateur
let motÉcrit = prompt(
  " Écrivez le mot contenu dans la première case du tableau : " + listeMots[0]
);

// Tant que l'utilisateur n'a pas choisi "mots" ou "phrases", on lui repose la question
let choix = prompt("Veuillez choisir la liste : mots ou phrases ?");

while (choix != "mots" && choix != "phrases") {
  choix = prompt("Veuillez choisir la liste : mots ou phrases ?");
}

// Si l'utilisateur choisi "mots", on lui demande de taper les mots de la liste
if (choix === "mots") {
  for (let i = 0; i < listeMots.length; i++) {
    motÉcrit = prompt("Entrez le mot : " + listeMots[i]);
    if (motÉcrit === listeMots[i]) {
      score++;
      console.log("Votre score est de : " + score + " / " + listeMots.length);
    }
  }
}

// Si l'utilisateur choisi "phrases", on lui demande de taper les phrases de la liste
if (choix === "phrases") {
  for (let i = 0; i < listePhrases.length; i++) {
    motÉcrit = prompt("Entrez la phrase : " + listePhrases[i]);
    if (motÉcrit === listePhrases[i]) {
      score++;
      console.log(
        "Votre score est de : " + score + " / " + listePhrases.length
      );
    }
  }
}
