const listeMots = ["Cachalot", "Pétunia", "Serviette"];

let score = 0;

let premierMotÉcrit = prompt(
  " Écrivez le mot contenu dans la première case du tableau : " + listeMots[0]
);

if (premierMotÉcrit === listeMots[0]) {
  score++;
  console.log("Bravo");
  console.log(score);
} else {
  console.log("Vous vous êtes trompé");
  console.log(score);
}

let deuxièmeMotÉcrit = prompt(
  " Écrivez le mot contenu dans la deuxième case du tableau : " + listeMots[1]
);

if (deuxièmeMotÉcrit === listeMots[1]) {
  score++;
  console.log("Bravo");
  console.log(score);
} else {
  console.log("Vous vous êtes trompé");
  console.log(score);
}

let troisièmeMotÉcrit = prompt(
  " Écrivez le mot contenu dans la troisième case du tableau : " + listeMots[2]
);

if (troisièmeMotÉcrit === listeMots[2]) {
  score++;
  console.log("Bravo");
  console.log(score);
} else {
  console.log("Vous vous êtes trompé");
  console.log(score);
}
