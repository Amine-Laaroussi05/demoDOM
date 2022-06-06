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
// Boutons des exercices 1 & 2 & 3 & 4 & Accueil
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
nav.style.boxShadow = "inset 10px 10px 5px #2ee69a, inset -10px -10px 5px #2ee69a";










//======================== Exercice 2 ==================== //

/**
 * Balise div
 */
let div = document.createElement("div");
body.appendChild(div);

/**
 * Paragraphe contenant le time
 */
let paragrapheTime = document.createElement("p");

// Time

function time() {
    let d = new Date();
    let t = d.toLocaleTimeString();
    paragrapheTime.innerText = `${t}`;
    div.appendChild(paragrapheTime);
    setTimeout(time, 1000);
}

time();




/**
 * Style div
 */
div.style.textAlign = "center";
div.style.border = "1px solid black";
div.style.margin = "200px 30%";