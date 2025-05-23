// mostrar imatges quan cliques
/*
function openLightbox(imageUrl) {
    var lightbox = document.querySelector('.lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageUrl;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    var lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';
}
*/

//eliminar botó dret
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

//menu lateral - sidebar
function openNav() {
  document.querySelector(".sidenav").style.width = "250px";
  //var button = document.querySelector(".openbtn");
  //button.style.display = "none";
}

function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
  //var button = document.querySelector(".openbtn");
  //button.style.display = "block";
}