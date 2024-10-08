document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-content');
  const closeButton = document.querySelector('.close');
  const container = document.getElementById('card-container');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

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
  artistas.forEach(artista => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
          <div class="img-box">
              <img src="${artista.image}" alt="${artista.title}" class="conteudo-carta-imagem">
          </div>
          <div class="content">
              <h3>${artista.title}</h3>
              <p>${artista.genre}</p>
              <p>${artista.text}</p>
              <a href="${artista.link}" class="read-more" target="_blank">Leia mais</a>
              <a href="${artista.youtube}" class="read-more" target="_blank">Música mais ouvida</a>
          </div>
      `;
      container.appendChild(card);

      // Corrige o problema da lightbox, garantindo que todas as imagens novas tenham o evento 'click'
      const img = card.querySelector('.conteudo-carta-imagem');
      img.addEventListener('click', () => openLightbox(img.src));
  });

  // Função para filtrar os cards
  function filterCards(query) {
      const cards = document.querySelectorAll('#card-container .card');
      cards.forEach(card => {
          const title = card.querySelector('.content h3').textContent.toLowerCase();
          if (title.includes(query.toLowerCase())) {
              card.style.display = 'flex';
          } else {
              card.style.display = 'none';
          }
      });
  }

  // Evento para filtrar cards ao pesquisar
  searchForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita o envio do formulário
      const query = searchInput.value;
      filterCards(query);
  });

  // Script do menu para rolagem de tela
  window.addEventListener("scroll", function () {
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 650);
  });
});
