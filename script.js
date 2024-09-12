document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("article-container");

  // Fonction pour charger le fichier YAML
  function loadYAMLFile() {
    const yamlFile = './assets/data.yml';  // Assurez-vous que le chemin est correct

    // Charger le fichier YAML
    fetch(yamlFile)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fichier YAML non trouvé");
        }
        return response.text();
      })
      .then((yamlText) => {
        // Parser le YAML en objet JavaScript
        const data = jsyaml.load(yamlText);

        // Utiliser les données du fichier YAML
        const articleHTML = `
          <div class="article">
            <img src="${data.image}" alt="${data.title}">
            <h2>${data.title}</h2>
            <p class="date">${data.date}</p>
            <p class="description">${data.description}</p>
            <p class="artists">Artistes : ${data.artists.join(', ')}</p>
            <p class="location">Lieu : ${data.location}</p>
          </div>
        `;

        // Ajouter l'article à la page
        container.innerHTML = articleHTML;
      })
      .catch((error) => {
        container.innerHTML = `<p>${error.message}</p>`;
      });
  }

  // Charger le fichier YAML
  loadYAMLFile();
});