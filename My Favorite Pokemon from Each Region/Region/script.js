const contentDiv = document.getElementById('content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const contentArray = ['Kanto', 'Johto', 'Hoenn','Sinnoh','Unova','Kalos','Alola','Galar','Paldea'];
let currentIndex = 0;

function updateContent() {
  contentDiv.textContent = contentArray[currentIndex];
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + contentArray.length) % contentArray.length;
  updateContent();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % contentArray.length;
  updateContent();
});

updateContent();