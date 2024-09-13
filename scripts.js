document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("article-container");

  const articles = ['article1.yml', 'article2.yml', 'article3.yml', 'article4.yml'];


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
       
        const data = jsyaml.load(yamlText);

        const articleHTML = `
          <article class="article">
            <img class="home" src="${data.image}" alt="${data.title}">
          </article>
        `;

        container.innerHTML += articleHTML;
      })
      .catch((error) => {
        container.innerHTML += `<p>${error.message}</p>`;
      });
  }

  articles.forEach((article) => loadYAMLFile(article));
});
