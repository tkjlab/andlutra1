// Select Elements
const infoBtn = document.getElementById('info-btn');
const infoModal = document.getElementById('info-modal');
const closeModal = document.getElementById('close-modal');

// Open Modal
infoBtn.addEventListener('click', () => {
  infoModal.style.display = 'block';
});

// Close Modal
closeModal.addEventListener('click', () => {
  infoModal.style.display = 'none';
});

// Close Modal on Click Outside
window.addEventListener('click', (e) => {
  if (e.target === infoModal) {
    infoModal.style.display = 'none';
  }
});
