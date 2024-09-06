const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-content');
const images = document.querySelectorAll('#card-container .conteudo-carta-imagem'); // Seleciona as imagens diretamente
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
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 650);
});

/*Campo de construção dos cards*/
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('card-container');

  athletes.forEach(athlete => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
          <div class="img-box">
              <img src="${athlete.image}" alt="carta" class="conteudo-carta-imagem">
          </div>
          <div class="content">
              <h3>${athlete.title}</h3>
              <p>${athlete.text}</p>
              <a href="${athlete.link}" class="read-more">Leia mais</a>
          </div>
      `;

      container.appendChild(card);
  });

  // Re-seleciona as imagens após a adição dos cards ao DOM
  const updatedImages = document.querySelectorAll('#card-container .conteudo-carta-imagem');
  updatedImages.forEach(image => {
    image.addEventListener('click', () => {
      lightboxImage.src = image.src;
      lightbox.style.display = 'flex';
    });
  });
});
