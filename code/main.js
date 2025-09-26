// main.js

// On récupère l'index de la page courante depuis l'URL (page_1.html → 1)
function getCurrentPageIndex() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1); // ex: page_1.html
  const match = filename.match(/page_(\d+)\.html/);
  return match ? parseInt(match[1], 10) : 1;
}

let currentPage = getCurrentPageIndex();

// Total de pages (20)
const totalPages = 20;

// Navigation
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function goToPage(index) {
  if(index < 1) index = 1;
  if(index > totalPages) index = totalPages;
  window.location.href = `pages/page_${index}.html`;
}

// Flèches
if(nextBtn) {
  nextBtn.addEventListener("click", () => {
    goToPage(currentPage + 1);
  });
}

if(prevBtn) {
  prevBtn.addEventListener("click", () => {
    goToPage(currentPage - 1);
  });
}

// Flèches clavier
window.addEventListener("keydown", e => {
  if(e.key === "ArrowRight") goToPage(currentPage + 1);
  if(e.key === "ArrowLeft") goToPage(currentPage - 1);
});
