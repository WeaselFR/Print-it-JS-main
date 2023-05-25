// Sélectionne les flèches
var arrowLeft = document.querySelector('.arrow_left');
var arrowRight = document.querySelector('.arrow_right');

// Sélectionne les images du slider
var sliderImages = document.querySelectorAll('.slider img');

// Initialise le compteur d'image
var imageIndex = 0;

// Crée un tableau avec les objets "slides" donnés
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Met à jour l'image et la tagline dans la div "banner"
function updateBanner() {
  const bannerImage = document.querySelector('.banner-img');
  const bannerTagline = document.querySelector('#banner p');
  
  bannerImage.src = `./assets/images/slideshow/${slides[imageIndex].image}`;
  bannerTagline.innerHTML = slides[imageIndex].tagLine;
}

// Appelle la fonction pour la première image
updateBanner();

// Ajoute un événement de clic pour la flèche gauche
arrowLeft.addEventListener('click', function() {
    // Décrémente le compteur d'image
    imageIndex--;
    // Si le compteur d'image est inférieur à 0, retourne à la dernière image
    if (imageIndex < 0) {
        imageIndex = sliderImages.length - 1;
    }
    // Met à jour l'image et la tagline dans la div "banner"
    updateBanner();
    // Modifie la source de l'image dans la div "slider"
    sliderImages.forEach(function(image) {
        image.style.display = "none";
    });
    sliderImages[imageIndex].style.display = "none";
    // Met à jour le point de balle actif
    updateSliderDots();
    console.log('Clic sur la flèche gauche');
});

// Ajoute un événement de clic pour la flèche droite
arrowRight.addEventListener('click', function() {
    // Incrémente le compteur d'image
    imageIndex++;
    // Si le compteur d'image dépasse le nombre d'images dans le slider, retourne à la première image
    if (imageIndex >= sliderImages.length) {
        imageIndex = 0;
    }
    // Met à jour l'image et la tagline dans la div "banner"
    updateBanner();
    // Modifie la source de l'image dans la div "slider"
    sliderImages.forEach(function(image) {
        image.style.display = "none";
    });
    sliderImages[imageIndex].style.display = "none";
    // Met à jour le point de balle actif
    updateSliderDots();
    console.log('Clic sur la flèche droite');
});

// Sélectionne les points du slider
var sliderDots = document.querySelectorAll('.slider-dots li');

// Met à jour l'affichage des points du slider
function updateSliderDots() {
  const sliderDots = document.querySelectorAll('.slider-dot');
  sliderDots.forEach((dot, index) => {
    if (index === imageIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Appelle la fonction pour la première image
updateSliderDots();

// Ajoute un événement de clic pour chaque point du slider
sliderDots.forEach(function(dot, index) {
dot.addEventListener('click', function() {
// Met à jour le compteur d'image avec l'index du point
imageIndex = index;
// Met à jour l'image et la tagline dans la div "banner"
updateBanner();
// Modifie la source de l'image dans la div "slider"
sliderImages.forEach(function(image) {
image.style.display = "none";
});
sliderImages[imageIndex].style.display = "block";
// Met à jour l'affichage des points du slider
updateSliderDots();
});
});
  

// Dans cet exemple, j'ai sélectionné les flèches "arrow_left" et "arrow_right" à l'aide de la méthode document.querySelector() 
// et les images du slider à l'aide de la méthode document.querySelectorAll(). 
// J'ai ensuite initialisé un compteur d'image imageIndex à 0 pour suivre l'index de l'image actuellement affichée.
// Dans la fonction de rappel de l'événement de clic de la flèche gauche, j'ai décrémenté le compteur d'image imageIndex, 
// vérifié si le compteur d'image était inférieur à 0, et si c'est le cas, j'ai ramené le compteur à la dernière image. 
// J'ai ensuite modifié la source de l'image dans la div "slider" en utilisant la méthode forEach() pour parcourir chaque image 
// et masquer toutes les images sauf celle avec l'index imageIndex.
// Dans la fonction de rappel de l'événement de clic de la flèche droite 
// j'ai incrémenté le compteur d'image imageIndex, vérifié si le compteur d'image dépassait le nombre d'images dans le slider, 
// et si c'est le cas, j'ai ramené le compteur à la première image. J'ai ensuite modifié la source de l'image dans la div "slider" en utilisant la méthode forEach() 
// pour parcourir chaque image et masquer toutes les images sauf celle avec l'index imageIndex.

// Comment j'ai défini le premier point comme actif :
// Tout d'abord, j'ai sélectionné l'élément HTML de la liste à puces où je voulais ajouter les bullets points. 
// Dans ce cas, j'ai sélectionné la liste à puces avec la classe "slider-dots" et j'ai stocké cette sélection dans une variable appelée "sliderDots".
// J'ai créé une boucle qui a créé un élément "li" pour chaque image dans le slider, en utilisant la méthode "createElement" de JavaScript. 
// J'ai stocké chaque élément "li" dans une variable appelée "dot".
// J'ai ensuite ajouté une classe "slider-dot" à chaque élément "li" en utilisant la propriété "classList" de JavaScript.
// J'ai ensuite utilisé la méthode "appendChild" pour ajouter chaque élément "li" créé à la liste à puces "sliderDots".
// J'ai ajouté un événement "click" à chaque élément "li" en utilisant la méthode "addEventListener". 
// À l'intérieur de la fonction de rappel de l'événement, j'ai mis à jour la variable "imageIndex" avec l'index de l'image correspondante.
// Enfin, j'ai mis à jour la classe de l'élément "li" correspondant à l'image en cours de visualisation en utilisant la propriété "classList" de JavaScript. 
// J'ai supprimé la classe "active" de tous les éléments "li" et j'ai ajouté la classe "active" uniquement à l'élément "li" correspondant à l'index de l'image en cours de visualisation.
// Cela a créé les bullets points et a défini le premier point comme actif.

// DOM : modèle objet de document) est une interface de programmation pour les documents HTML, XML et SVG.
// Var : est une fonction au même titre que let, pour déclarer des variables. N'EST PLUS UTILISER
// Document.queryselector : permet de sélectionner la première balise de l'élement grâce à un sélecteur CSS
// Document.queryselectorall : permet de selectionner toutes les balises de l'élément grâce aux selecteurs CSS.
// ImageIndex : Compteur d'image , 0 étant la première image.
// Const : pour constante est similaire à let, la différence est que l'on ne peut pas changer le contenu d'origine.
// Slides : Tableau pour instaurer des images dans un slider js.
// for each : La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau
// add event listener : addEventListener est la manière d'enregistrer un écouteur d'évènements telle que spécifiée dans le DOM
