document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("article-container");

  // Liste des fichiers YAML à charger (un fichier pour chaque article)
  const articles = ['article2.yml', 'article3.yml', 'article4.yml']; // Corrige la répétition

  // Fonction pour charger un fichier YAML
  function loadYAMLFile(yamlFile) {
    // Charger le fichier YAML
    fetch(`./assets/${yamlFile}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fichier YAML non trouvé");
        }
        return response.text();
      })
      .then((yamlText) => {
        // Parser le YAML en objet JavaScript
        const data = jsyaml.load(yamlText);
        
        // Vérification que la clé 'images' existe et contient au moins une image
        const firstImage = data.images && data.images.length > 0 ? data.images[0] : ''; 

        if (!firstImage) {
          throw new Error("Aucune image trouvée pour l'article : " + yamlFile);
        }

        // Utiliser les données du fichier YAML pour créer l'HTML
        const articleHTML = `
          <article class="article">
            <img class="home" src="./assets/img/${firstImage}" alt="${data.title}">
            <h3>${data.title}</h3>
          </article>
        `;

        // Ajouter l'article à la page
        container.innerHTML += articleHTML;
      })
      .catch((error) => {
        console.error(error);
        container.innerHTML += `<p>${error.message}</p>`;
      });
  }

  // Charger tous les articles
  articles.forEach((article) => loadYAMLFile(article));
});

