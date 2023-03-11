let joueur = 1;
let fin = 0;
let maGrille = [[0,0,0],[0,0,0],[0,0,0]];
let tour = 0;

function gagne(){
  let victoire = 0;
  
  for(let i=0;i<3;i++){
    //if (maGrille[i][0]==joueur && maGrille[i][0]==maGrille[i][1] && maGrille[i][2]==maGrille[i][1]){
    if ((maGrille[i][0]==maGrille[i][1] && maGrille[i][1]==maGrille[i][2]) && (maGrille[i][0]!=0 && maGrille[i][1]!=0 && maGrille[i][2]!=0 )) {
      document.getElementById((i+1)+"-1").style.color = "#7CAE7A"; 
      document.getElementById((i+1)+"-2").style.color = "#7CAE7A"; 
      document.getElementById((i+1)+"-3").style.color = "#7CAE7A"; 
      victoire=1;
    }
  }
  for(let j=0;j<3;j++){
    //if (maGrille[0][j]==joueur && maGrille[0][j]==maGrille[1][j] && maGrille[1][j]==maGrille[2][j]){
    if ((maGrille[0][j]==maGrille[1][j] && maGrille[1][j]==maGrille[2][j]) && (maGrille[0][j]!=0 && maGrille[1][j]!=0 && maGrille[2][j]!=0)) {
      document.getElementById("1-"+(j+1)).style.color = "#7CAE7A"; 
      document.getElementById("2-"+(j+1)).style.color = "#7CAE7A"; 
      document.getElementById("3-"+(j+1)).style.color = "#7CAE7A";
      victoire=1;
    }
  }

  if (((maGrille[0][0]==maGrille[1][1]) && (maGrille[1][1]==maGrille[2][2])) && (maGrille[0][0]!=0 && maGrille[1][1]!=0 && maGrille[2][2]!=0)) {
    document.getElementById("1-1").style.color = "#7CAE7A"; 
    document.getElementById("2-2").style.color = "#7CAE7A"; 
    document.getElementById("3-3").style.color = "#7CAE7A";
    victoire=1;
  }

  if (((maGrille[2][0]==maGrille[1][1]) && (maGrille[1][1]==maGrille[0][2])) && (maGrille[2][0]!=0 && maGrille[1][1]!=0 && maGrille[0][2]!=0)) {
    document.getElementById("1-3").style.color = "#7CAE7A"; 
    document.getElementById("2-2").style.color = "#7CAE7A"; 
    document.getElementById("3-1").style.color = "#7CAE7A";
    victoire=1;
  }
  console.log(victoire); 
  if (victoire==1){
    document.getElementById("Statut").innerHTML=("Le joueur " + joueur +" a gagné !");
    console.log("Le joueur "+joueur+" a gagné !");
    fin = 1;
  }
  tour=tour+1;
  if (tour == 9 && victoire == 0){
    console.log("égalité bozo");
    for (let m = 0;m<3;m++){
      for (let n =0;n<3;n++){
        document.getElementById((m+1)+"-"+(n+1)).style.color = "#DA5552"; 
      }
    }
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
