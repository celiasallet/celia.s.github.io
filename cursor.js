document.addEventListener('DOMContentLoaded', () => {

const imageContainer = document.querySelector('.fit');
const cursorText = document.querySelector('.cursor-text');

imageContainer.addEventListener('mousemove', (e) => {
  const rect = imageContainer.getBoundingClientRect(); 
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  cursorText.style.left = `${x + 10}px`; 
  cursorText.style.top = `${y + 10}px`;
  cursorText.style.display = 'block';
});

imageContainer.addEventListener('mouseleave', () => {
  cursorText.style.display = 'none'; 
});
});