document.addEventListener("DOMContentLoaded", function () {
    // Liste des articles
    const articles = ['article1', 'article2']; // Ajoute tous les articles ici
  
    const container = document.getElementById("article-container");
  
    // Fonction pour charger un article
    function loadArticle(article) {
      const markdownFile = `articles/${article}.md`;
  
      // Charger le fichier Markdown
      fetch(markdownFile)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Article non trouvé");
          }
          return response.text();
        })
        .then((markdown) => {
          // Extraire les métadonnées et le contenu
          const metaData = parseFrontMatter(markdown);
          const content = marked(metaData.content);
  
          // Créer le template HTML pour chaque article
          const articleHTML = `
            <div class="article">
              <img src="${metaData.image}" alt="${metaData.title}">
              <h2>${metaData.title}</h2>
              <p class="date">${metaData.date}</p>
              <p class="description">${metaData.description}</p>
              <p class="artists">Artistes : ${metaData.artists}</p>
              <p class="location">Lieu : ${metaData.location}</p>
              <div class="content">${content}</div>
            </div>
          `;
  
          // Ajouter l'article à la page
          container.innerHTML += articleHTML;
        })
        .catch((error) => {
          container.innerHTML += `<p>${error.message}</p>`;
        });
    }
  
    // Charger tous les articles
    articles.forEach(loadArticle);
  
    // Fonction pour extraire le front matter
    function parseFrontMatter(markdown) {
      const frontMatterRegex = /^---\n([\s\S]+?)\n---/;
      const match = markdown.match(frontMatterRegex);
  
      let metaData = {};
      let content = markdown;
  
      if (match) {
        const yaml = match[1];
        content = markdown.slice(match[0].length);
  
        yaml.split('\n').forEach((line) => {
          const [key, value] = line.split(': ');
          metaData[key] = value;
        });
      }
  
      metaData.content = content;
      return metaData;
    }
  });