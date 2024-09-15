document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("carousel");

  const articles = ['article1.yml', 'article2.yml', 'article3.yml', 'article4.yml'];

  // Fonction pour charger un fichier YAML
  function loadYAMLFile(yamlFile) {
    return fetch(`./assets/${yamlFile}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fichier YAML non trouvé");
        }
        return response.text();
      })
      .then((yamlText) => {
        // Convertir YAML en JSON
        return jsyaml.load(yamlText);
      })
      .catch((error) => {
        console.error('Erreur de chargement du fichier YAML:', error);
        return {}; // Retourner un objet vide en cas d'erreur
      });
  }

  function displayArticles(articlesData) {
    container.innerHTML = ''; // Réinitialiser le contenu du conteneur

    articlesData.forEach(data => {
      const firstImage = data.images ? data.images[0] : '';

      const articleHTML = `
        <div class="layout">
          <a href="soloprojet.html?title=${encodeURIComponent(data.title)}&images=${encodeURIComponent(JSON.stringify(data.images))}&type=${encodeURIComponent(data.type)}&date=${encodeURIComponent(data.date)}&description=${encodeURIComponent(data.description || '')}">
            <div class="boximg">
              <img class="carouimg" src="./assets/img/${firstImage}" alt="${data.title}">
            </div>
            <h3>${data.title}</h3>
            <h4 class="type">${data.type}</h4>
            <h6 class="date">${data.date}</h6>
          </a>
        </div>
      `;
      container.innerHTML += articleHTML;
    });

    // Configuration du carrousel
    let currentSlide = 0;
    const slidesToShow = 3; // Nombre d'articles visibles par slide
    const articlesElements = document.querySelectorAll('.layout');
    const totalSlides = Math.ceil(articlesElements.length / slidesToShow);

    function moveSlide(direction) {
      currentSlide += direction;

      if (currentSlide < 0) {
        currentSlide = 0;
      } else if (currentSlide >= totalSlides) {
        currentSlide = totalSlides - 1;
      }

      const slideWidth = container.offsetWidth / slidesToShow;
      container.style.transform = `translateX(-${(slideWidth) * slidesToShow * currentSlide}px)`;
    }

    document.querySelector('.prev').addEventListener('click', function () {
      moveSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', function () {
      moveSlide(1);
    });
  }

  // Fonction pour charger tous les fichiers YAML
  async function loadAllArticles(files) {
    const articlePromises = files.map(file => loadYAMLFile(file));
    const allArticles = await Promise.all(articlePromises);
    return allArticles.flat(); // Aplatir le tableau de tableaux en un seul tableau
  }

  loadAllArticles(articles).then(displayArticles);
});



// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.getElementById("carousel");

//   // Simule les données YAML converties en JSON
//   const articlesData = [
//     {
//       image: "/Untitled_Artwork-1.PNG",
//       title: "Nouvoilà Theme Party",
//       type: "Paris",
//       date: "2023"
//     },
//     {
//       image: "/Untitled_Artwork-1.PNG",
//       title: "Flouflix",
//       type: "London",
//       date: "2023"
//     },
//     {
//       image: "/Untitled_Artwork-1.PNG",
//       title: "Squash It Down!",
//       type: "New York",
//       date: "2023"
//     },
//     {
//       image: "/Untitled_Artwork-1.PNG",
//       title: "Article 4",
//       type: "Tokyo",
//       date: "2023-09-15"
//     },
//     {
//       image: "/Untitled_Artwork-1.PNG",
//       title: "Flouflix",
//       type: "London",
//       date: "2023"
//     },
//     {
//       image: "/Untitled_Artwork-1.PNG",
//       title: "Squash It Down!",
//       type: "New York",
//       date: "2023"
//     },
//     {
//       image: "/Untitled_Artwork-1.PNG",
//       title: "Article 4",
//       type: "Tokyo",
//       date: "2023-09-15"
//     },
//     {
//       image: "/Untitled_Artwork-1.PNG",
//       title: "Squash It Down!",
//       type: "New York",
//       date: "2023"
//     },
//     {
//       image: "/Untitled_Artwork-1.PNG",
//       title: "Article 4",
//       type: "Tokyo",
//       date: "2023-09-15"
//     },
//     {
//       image: "/Untitled_Artwork-1.PNG",
//       title: "Flouflix",
//       type: "London",
//       date: "2023"
//     },
//     {
//       image: "/Untitled_Artwork-1.PNG",
//       title: "Squash It Down!",
//       type: "New York",
//       date: "2023"
//     },
//     {
//       image: "/Untitled_Artwork-1.PNG",
//       title: "Article 4",
//       type: "Tokyo",
//       date: "2023-09-15"
//     }
//   ];

//   // Générer le contenu HTML pour chaque article
//   articlesData.forEach((data) => {
//     const articleHTML = `
//     <div class="layout">
//     <a href="soloprojet.html?title=${encodeURIComponent(data.title)}&image=${encodeURIComponent(data.image)}&type=${encodeURIComponent(data.type)}&date=${encodeURIComponent(data.date)}&description=${encodeURIComponent(data.description || '')}">
//         <div class="boximg"><img class="carouimg" src="./assets/${data.image}" alt="${data.title}"></div>
//         <h3>${data.title}</h3>
//         <h4 class="type">${data.type}</h4>
//         <h6 class="date">${data.date}</h6>
//     </a>
// </div>
//     `;
//     // Ajouter l'article au conteneur
//     container.innerHTML += articleHTML;
//   });

//   // Configuration du carrousel
//   let currentSlide = 0;
//   const slidesToShow = 3; // Nombre d'articles visibles par slide
//   const articlesElements = document.querySelectorAll('.layout');
//   const totalSlides = Math.ceil(articlesElements.length / slidesToShow);

//   // Fonction pour déplacer les slides
//   function moveSlide(direction) {
//     currentSlide += direction;

//     if (currentSlide < 0) {
//       currentSlide = 0;
//     } else if (currentSlide >= totalSlides) {
//       currentSlide = totalSlides - 1;
//     }

//     const slideWidth = container.offsetWidth / slidesToShow;
//     const gap = parseFloat(getComputedStyle(document.querySelector('.layout')).marginRight);
//     container.style.transform = `translateX(-${(slideWidth) * slidesToShow * currentSlide}px)`;
//   }

//   // Ajouter des gestionnaires d'événements pour les boutons
//   document.querySelector('.prev').addEventListener('click', function () {
//     moveSlide(-1);
//   });

//   document.querySelector('.next').addEventListener('click', function () {
//     moveSlide(1);
//   });
// });