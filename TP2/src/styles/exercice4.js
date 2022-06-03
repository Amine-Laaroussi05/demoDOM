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














// =================== Exercice 4 =================== //

// Balise div
let divFizz = document.createElement("div");
body.appendChild(divFizz);
// Bouton d'incrémentation
let incrementButton = document.createElement("button");
incrementButton.innerText = `Plus`;
divFizz.appendChild(incrementButton);
// Paragraphe contenant le text Fizz/Buzz/Chiffres
let textFizz = document.createElement("p");
textFizz.innerText = `1`;
divFizz.appendChild(textFizz);
// Bouton décrémentation
let decrementButton = document.createElement("button");
decrementButton.innerText = `Moins`;
divFizz.appendChild(decrementButton);


// Initialisation du compteur
let compteur = 1;



/**
 * Fonction FizzBuzz ++
 */
function fizzPlus() {
    incrementButton.addEventListener("click", () => {
        compteur++;
        textFizz.innerText = `${fizzBuzz(compteur)}`;
    })
    decrementButton.addEventListener("click", () => {
        if (compteur > 1) {
            compteur--;
            textFizz.innerText = `${fizzBuzz(compteur)}`;
        }
    })
}

fizzPlus();






/**
 * Fonction FizzBuzz
 * Retourne soit le nombre, soit Fizz, soit Buzz, soit FizzBuzz
 * selon si le nombre est divisible par 3 et/ou par 5
 */
function fizzBuzz(i) {
    if (i % 15 == 0) {
        return "FizzBuzz";
    } else if (i % 5 == 0) {
        return "Buzz";
    } else if (i % 3 == 0) {
        return "Fizz";
    } else {
        return i;
    }
}



/**
 * Style pour le div : bouton + paragraphe + bouton
 */
divFizz.style.display = "inline-block";
divFizz.style.textAlign = "center";
divFizz.style.margin = "5% 50%"