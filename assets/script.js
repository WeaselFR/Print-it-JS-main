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
});

// Dans cet exemple, nous avons sélectionné les flèches "arrow_left" et "arrow_right" à l'aide de la méthode document.querySelector() 
// et les images du slider à l'aide de la méthode document.querySelectorAll(). 
// Nous avons ensuite initialisé un compteur d'image imageIndex à 0 pour suivre l'index de l'image actuellement affichée.
// Dans la fonction de rappel de l'événement de clic de la flèche gauche, nous avons décrémenté le compteur d'image imageIndex, 
// vérifié si le compteur d'image était inférieur à 0, et si c'est le cas, nous avons ramené le compteur à la dernière image. 
// Nous avons ensuite modifié la source de l'image dans la div "slider" en utilisant la méthode forEach() pour parcourir chaque image 
// et masquer toutes les images sauf celle avec l'index imageIndex.
// Dans la fonction de rappel de l'événement de clic de la flèche droite 
// nous avons incrémenté le compteur d'image imageIndex, vérifié si le compteur d'image dépassait le nombre d'images dans le slider, 
// et si c'est le cas, nous avons ramené le compteur à la première image. Nous avons ensuite modifié la source de l'image dans la div "slider" en utilisant la méthode forEach() 
// pour parcourir chaque image et masquer toutes les images sauf celle avec l'index imageIndex.
