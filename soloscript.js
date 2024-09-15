document.addEventListener("DOMContentLoaded", function() {
    const params = getQueryParams();

    document.getElementById('title').textContent = params.title;
    document.getElementById('image').src = params.image;
    document.getElementById('type').textContent = params.location;
    document.getElementById('date').textContent = params.date;
    document.getElementById('description').textContent = params.description;
});