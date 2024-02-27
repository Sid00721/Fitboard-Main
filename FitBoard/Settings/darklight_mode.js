const toggle = document.getElementById("toggle");
const main = document.getElementById('main');
toggle.addEventListener('change', () => {
  main.classList.toggle('dark');
})