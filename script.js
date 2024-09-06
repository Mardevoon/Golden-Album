document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-content');
  const closeButton = document.querySelector('.close');
  const container = document.getElementById('card-container');

  // Função para abrir lightbox
  function openLightbox(imageSrc) {
      lightboxImage.src = imageSrc;
      lightbox.style.display = 'flex';
  }

  // Evento para fechar lightbox
  function closeLightbox() {
      lightbox.style.display = 'none';
  }

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
  });

  // Renderizar os cards
  athletes.forEach(athlete => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
          <div class="img-box">
              <img src="${athlete.image}" alt="${athlete.title}" class="conteudo-carta-imagem">
          </div>
          <div class="content">
              <h3>${athlete.title}</h3>
              <p>${athlete.text}</p>
              <a href="${athlete.link}" class="read-more" target="_blank">Leia mais</a>
          </div>
      `;
      container.appendChild(card);

      // Corrige o problema da lightbox, garantindo que todas as imagens novas tenham o evento 'click'
      const img = card.querySelector('.conteudo-carta-imagem');
      img.addEventListener('click', () => openLightbox(img.src));
  });
});
