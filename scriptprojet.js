document.addEventListener("DOMContentLoaded", function () {
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      title: params.get('title'),
      images: JSON.parse(decodeURIComponent(params.get('images'))), // Décodage du tableau d'images
      type: params.get('type'),
      date: params.get('date'),
      description: params.get('description') || "No description available."
    };
  }

  const params = getQueryParams();
  document.getElementById('title').textContent = params.title;
  document.getElementById('type').textContent = params.type;
  document.getElementById('date').textContent = params.date;
  document.getElementById('description').textContent = params.description;

  const imagesContainer = document.getElementById('images');
  params.images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = `./assets/img/${image}`;
    imagesContainer.appendChild(imgElement);
  });
});


