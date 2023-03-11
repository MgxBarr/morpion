let joueur = 1;
let fin = 0;
let maGrille = [[0,0,0],[0,0,0],[0,0,0]];
let tour = 0;

function gagne(){
  let victoire = 0;
  for(let i=0;i<3;i++){
    if (maGrille[i][0]==joueur && maGrille[i][0]==maGrille[i][1] && maGrille[i][2]==maGrille[i][1]){
      victoire=1;
    }
  }
  for(let j=0;j<3;j++){
    if (maGrille[0][j]==joueur && maGrille[0][j]==maGrille[1][j] && maGrille[1][j]==maGrille[2][j]){
      victoire=1;
    }
  }
  let diag1 = 1;
  for (let k=0;k<3;k++){
    if (maGrille[k][k]!=joueur){
      diag1=0;
    }
  }
  let diag2 = 1;
  for (let k=0; k<3;k++){
    if (maGrille[2-k][2-k]!=joueur){
      diag2=0;
    }
  }
  if (diag1==1 || diag2==1){
    victoire=1;
  }
  if (victoire==1){
    document.getElementById("Statut").innerHTML=("Le joueur " + joueur +" a gagné !");
    console.log("Le joueur "+joueur+" a gagné !");
    fin = 1;
  }
  tour=tour+1;
  if (tour == 9 && victoire == 0){
    console.log("égalité bozo");
    document.getElementById("Statut").innerHTML=("Aucun joueur n'a gagné, égalité !");
    fin = 1;
  }
}


function jeu(id) {
  //récup ligne et colonne
  ligne=id.split("-")[0] -1;
  col=id.split("-")[1] -1;
  if (fin == 1){
    tour = 0;
  }else{

    if (joueur == 1 && maGrille[ligne][col]==0) {
      var valeur = document.getElementById(id);
      valeur.value = "X";

      maGrille[ligne][col]=joueur;
      gagne();
      joueur = 2;
      if (fin != 1){
      document.getElementById("Statut").innerHTML=("C'est au joueur "+ joueur +" de jouer");
      }
    }else if (joueur == 2 && maGrille[ligne][col]==0) {
      var valeur = document.getElementById(id);
      valeur.value = "O";

      maGrille[ligne][col]=joueur;
      gagne();
      joueur = 1;
      if (fin != 1){
      document.getElementById("Statut").innerHTML=("C'est au joueur "+ joueur +" de jouer");
      }
    }

  }
  console.log(maGrille);
}
