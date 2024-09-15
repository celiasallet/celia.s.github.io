document.addEventListener('DOMContentLoaded', () => {
    async function loadImages() {
      try {
        const response = await fetch('./assets/inspirations.yml');
        const yamlText = await response.text();
        const data = jsyaml.load(yamlText);
        const container = document.querySelector('.inspi');
  
        data.images.forEach(src => {
          const div = document.createElement('div');
          div.className = 'image-item';
          const img = document.createElement('img');
          img.src = `./assets/img/${src}`;
          img.alt = 'Inspirational Image';
          div.appendChild(img);
          container.appendChild(div);
        });
      } catch (error) {
        console.error('Erreur de chargement des images:', error);
      }
    }
  
    loadImages();
  });