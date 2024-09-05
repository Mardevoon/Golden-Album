const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-content');
const images = document.querySelectorAll('.conteudo-carta-imagem');
const closeButton = document.querySelector('.close');

/*Comando para deixar a carta grande na tela e escurecer o fundo*/
images.forEach(image => {
  image.addEventListener('click', () => {
    lightboxImage.src = image.src;
    lightbox.style.display = 'flex';
  });
});

closeButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

/*Script do menu para rolagem de tela*/
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 650)
})