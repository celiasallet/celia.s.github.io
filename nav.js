
// nav barre fonction

function openNav() {
  const sideNav = document.getElementById("mySidenav");
  sideNav.style.width = "55%"; // Open the sidebar to full width

  // Animate list items to appear one by one
  const links = sideNav.querySelectorAll('a');
  links.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = "1"; // Make the item visible
    }, index * 700); // Stagger the appearance by 200ms intervals
  });
}

function closeNav() {
  const sideNav = document.getElementById("mySidenav");
  sideNav.style.width = "0"; // Close the sidebar

  // Hide the links again for next time
  const links = sideNav.querySelectorAll('a');
  links.forEach((link) => {
    link.style.opacity = "0"; // Reset opacity when closing
  });
}