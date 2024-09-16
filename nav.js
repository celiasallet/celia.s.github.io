
function openNav() {
  const sideNav = document.getElementById("mySidenav");
  sideNav.style.width = "60%"; 
  // la largeur du fond de la nav

  const links = sideNav.querySelectorAll('a');
  links.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = "1"; 
    }, index * 400);
  });
}

function closeNav() {
  const sideNav = document.getElementById("mySidenav");
  sideNav.style.width = "0"; 

  const links = sideNav.querySelectorAll('a');
  links.forEach((link) => {
    link.style.opacity = "0"; 
  });
}