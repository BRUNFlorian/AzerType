let listeMots = ["Cachalot", "Pétunia", "Serviette"];

let score = 0;

let informationUtilisateur = prompt(
  " Vous devez écrire le premier mot contenu dans la première case du tableau : "
);

let motÉcrit = "Cachalot";

if (motÉcrit === listeMots[0]) {
  score++;
  console.log("Bravo");
  console.log(score);
} else {
  console.log("Erreur");
}
