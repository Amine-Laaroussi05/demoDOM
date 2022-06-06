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









// ======================================== //

/**
 * Exercice 1 : liste des personnages
 */

// Balises : div & ul
let divList = document.createElement("div");
body.appendChild(divList);
let ulList = document.createElement("ul");
divList.appendChild(ulList);

// Tableau des 5 personnages
let friends = ['Twilight Sparkle', 'Applejack', 'Rarity', 'Fluttershy', 'Spike'];

//  Chacun des noms est mis dans une balise liste
for (let friend of friends) {
    let friendList = document.createElement("li");
    friendList.innerText = `${friend}`;
    ulList.appendChild(friendList);
}


divList.style.margin = "100px 45%";



/**
 * Balise div : 
 * conteneur des blocks pour la liste de personnages
 */
let divFriends = document.createElement("div");
body.appendChild(divFriends);

// Tableaux des images , des titres, et des desciptions
let pictures = ["../../assets/twilight_sparkle.png", "../../assets/applejack.png", "../../assets/rarity.png", "../../assets/fluttershy.png", "../../assets/spike.png"];

let picturesTitles = ["Twilight Sparkle", "Applejack", "Rarity", "Fluttershy", "Spike"];

let titledesc1 = "Twilight Sparkle is the central main character of My Little Pony Friendship is Magic. She is a female unicorn pony who transforms into an Alicorn and becomes a princess in Magical Mystery Cure. She is also the daughter of Twilight Velvet and Night Light, the younger sister of Shining Armor, sister-in-law to Princess Cadance, and paternal aunt to Flurry Heart.";
let titledesc2 = "Applejack is a female Earth pony and one of the main characters of My Little Pony Friendship is Magic. She lives and works at Sweet Apple Acres with her grandmother Granny Smith, her older brother Big McIntosh, her younger sister Apple Bloom, and her dog Winona. She represents the element of honesty.";
let titledesc3 = "Rarity is a female unicorn pony and one of the main characters of My Little Pony Friendship is Magic. She is Sweetie Belle's older sister and the subject of Spike's long-term crush. Rarity works as both a fashion designer and a seamstress at her own shop in Ponyville, the Carousel Boutique. She has a white Persian cat named Opalescence. She represents the element of generosity.";
let titledesc4 = "Fluttershy is a female Pegasus pony and one of the main characters of My Little Pony Friendship is Magic. She lives in a small cottage near the Everfree Forest and takes care of animals, the most prominent of her charges being Angel the bunny. She represents the element of kindness.";
let titledesc5 = "Spike, also known as Spike the Dragon, is a male  dragon and one of the seven main characters of My Little Pony Friendship is Magic. He is Twilight Sparkle's best friend and number one assistant. He has the ability to magically deliver scrolls to and from Princess Celestia with his fire breath, which features in many episodes, as does his crush on Rarity.";
let titlesDescription = [titledesc1, titledesc2, titledesc3, titledesc4, titledesc5];


/**
 * Balise div pour chaque colonne : image + h2 + description
 */
for (let i = 1; i <= 5; i++) {
    let colonne = document.createElement("div");
    colonne.classList.add("colonne");
    divFriends.appendChild(colonne);
    // image
    let img = document.createElement("img");
    img.src = pictures[i - 1];
    img.classList.add("image");
    colonne.appendChild(img);
    // heading 2 : titre de l'image
    let titreImage = document.createElement("h2");
    titreImage.classList.add("texte" + i);
    titreImage.innerText = `${picturesTitles[i-1]}`;
    colonne.appendChild(titreImage);
    // paragraphe : description
    let p = document.createElement("p");
    p.classList.add("texte" + i);
    p.innerText = `${titlesDescription[i-1]}`;
    colonne.appendChild(p);
}


/**
 * Style balise div (balise principal contenant nos colonnes)
 */
divFriends.style.display = "flex";
divFriends.style.flexFlow = "row wrap";
divFriends.style.justifyContent = "space-around";
divFriends.style.margin = "100px 0";


/**
 * Style colonnes 
 */
for (let i = 1; i <= 5; i++) {
    let colonne = document.getElementsByClassName("colonne")[i - 1];
    colonne.style.display = "flex";
    colonne.style.flexFlow = "column wrap";
    colonne.style.justifyContent = "center";
    colonne.style.alignItems = "space-between";
    colonne.style.border = "1px solid black";
    colonne.style.width = "300px";
    colonne.style.transition = " .5s ease";
    colonne.style.padding = "3px 10px";
    let img = document.getElementsByClassName("image")[i - 1];
    img.style.width = "200px";
    img.style.height = "200px";
    let text = document.getElementsByClassName("texte" + i)[0];
    text.style.textAlign = "center";

    // Hover: transform
    colonne.onmouseover = () => {
        colonne.style.transform = "translate(-10%, -10%)";
    }

    colonne.onmouseleave = () => {
        colonne.style.transform = "translate(0, 0)";
    }
}