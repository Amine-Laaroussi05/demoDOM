let body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "#56bde9";

/**
 * Header avec titre : Correction des exercices
 */
let titleHeader = document.createElement("header");
body.appendChild(titleHeader);
let divTitle = document.createElement("div");
divTitle.classList.add("Titre")
titleHeader.appendChild(divTitle);
let titleText = document.createElement("h1");
titleText.innerText = `Correction des exercices`;
divTitle.appendChild(titleText);

/**
 * Style pour le titre
 */
divTitle.style.textAlign = "center";
divTitle.style.border = "solid 1px black";
divTitle.style.margin = "10px 30%"


/**
 * Barre de navigation
 */
let nav = document.createElement("nav");
titleHeader.appendChild(nav);
let container = document.createElement("div");
nav.appendChild(container);
// Boutons des exercices 1 & 2 & 3 & 4 & accueil
let a = document.createElement("a");
a.href = "./index.html";
container.appendChild(a);
let button = document.createElement("button");
button.innerText = `Accueil`;
button.classList.add("button");
a.appendChild(button);
let a1 = document.createElement("a");
a1.href = "./exercice1.html";
container.appendChild(a1);
let button1 = document.createElement("button");
button1.innerText = `Exercice 1`;
button1.classList.add("button1");
a1.appendChild(button1);

let a2 = document.createElement("a");
a2.href = "./exercice2.html";
container.appendChild(a2);
let button2 = document.createElement("button");
button2.innerText = `Exercice 2`;
a2.appendChild(button2);

let a3 = document.createElement("a");
a3.href = "./exercice3.html";
container.appendChild(a3);
let button3 = document.createElement("button");
button3.innerText = `Exercice 3`;
a3.appendChild(button3);

let a4 = document.createElement("a");
a4.href = "./exercice4.html";
container.appendChild(a4);
let button4 = document.createElement("button");
button4.innerText = `Exercice 4`;
a4.appendChild(button4);


/**
 * Style pour la barre de navigation
 */
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.padding = "0 400px";
nav.style.backgroundColor = "grey";
nav.style.margin = "30px 0";
nav.style.padding = "10px 0";


/**
 * Colonnes avec chacun un desciptif de l'exercice
 * colonne : h2(titre) + paragraphe(descriptif) + bouton
 */
let divColonnes = document.createElement("div");
body.appendChild(divColonnes);

// Colonne 1 : Liste
let divColonne1 = document.createElement("div");
divColonnes.appendChild(divColonne1);
let h2Colonne1 = document.createElement("h2");
h2Colonne1.innerText = `La liste`;
divColonne1.appendChild(h2Colonne1);
let parColonne1 = document.createElement("p");
parColonne1.innerText = `Une liste de 5 personnages de 'Friendship is magic'.`;
divColonne1.appendChild(parColonne1);
let a1Col1 = document.createElement("a");
a1Col1.href = "./exercice1.html";
divColonne1.appendChild(a1Col1);
let buttonCol1 = document.createElement("button");
buttonCol1.innerText = `Exercice 1`;
a1Col1.appendChild(buttonCol1);

// Colonne 2 : Horloge
let divColonne2 = document.createElement("div");
divColonnes.appendChild(divColonne2);
let h2Colonne2 = document.createElement("h2");
h2Colonne2.innerText = `L'horloge`;
divColonne2.appendChild(h2Colonne2);
let parColonne2 = document.createElement("p");
parColonne2.innerText = `Une horloge qui affiche l'heure.`;
divColonne2.appendChild(parColonne2);
let a1Col2 = document.createElement("a");
a1Col2.href = "./exercice2.html";
divColonne2.appendChild(a1Col2);
let buttonCol2 = document.createElement("button");
buttonCol2.innerText = `Exercice 2`;
a1Col2.appendChild(buttonCol2);

// Colonne 3 : FizzBuzz
let divColonne3 = document.createElement("div");
divColonnes.appendChild(divColonne3);
let h2Colonne3 = document.createElement("h2");
h2Colonne3.innerText = `FizzBuzz`;
divColonne3.appendChild(h2Colonne3);
let parColonne3 = document.createElement("p");
parColonne3.innerText = `Une page qui affichera la liste de tous les nombres entre 1 et 100. Pour chaque nom, on affichera à coté de ce dernier 'fizz' si le nom est un multiple de 3, 'buzz' si le nom est un multiple de 5 et 'fizzbuzz' si le nom est un multiple de 3 et 5.`;
divColonne3.appendChild(parColonne3);
let a1Col3 = document.createElement("a");
a1Col3.href = "./exercice3.html";
divColonne3.appendChild(a1Col3);
let buttonCol3 = document.createElement("button");
buttonCol3.innerText = `Exercice 3`;
a1Col3.appendChild(buttonCol3);

// Colonne 4 : FizzBuzz ++
let divColonne4 = document.createElement("div");
divColonnes.appendChild(divColonne4);
let h2Colonne4 = document.createElement("h2");
h2Colonne4.innerText = `FizzBuzz ++`;
divColonne4.appendChild(h2Colonne4);
let parColonne4 = document.createElement("p");
parColonne4.innerText = `Même chose que FizzBuzz sauf qu'un seul chiffre/Fizz/Buzz/FizzBuzz sera affiché à l'écran.`;
divColonne4.appendChild(parColonne4);
let a1Col4 = document.createElement("a");
a1Col4.href = "./exercice4.html";
divColonne4.appendChild(a1Col4);
let buttonCol4 = document.createElement("button");
buttonCol4.innerText = `Exercice 4`;
a1Col4.appendChild(buttonCol4);



/**
 * Style pour les colonnes
 */
divColonnes.style.display = "flex";
divColonnes.style.justifyContent = "space-around";
divColonnes.style.margin = "150px 0";


// Colonne 1
divColonne1.style.textAlign = "center";
divColonne1.style.border = "solid 1px blue";
divColonne1.style.margin = "10px";
divColonne1.style.backgroundColor = "#2ee69a";


// Colonne 2
divColonne2.style.textAlign = "center";
divColonne2.style.border = "solid 1px blue";
divColonne2.style.margin = "10px";
divColonne2.style.backgroundColor = "#2ee69a";


// Colonne 3
divColonne3.style.textAlign = "center";
divColonne3.style.border = "solid 1px blue";
divColonne3.style.margin = "10px";
divColonne3.style.backgroundColor = "#2ee69a";


// Colonne 4
divColonne4.style.textAlign = "center";
divColonne4.style.border = "solid 1px blue";
divColonne4.style.margin = "10px";
divColonne4.style.backgroundColor = "#2ee69a";