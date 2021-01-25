const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click', function () {
  modalOverlay.style.display = 'flex';
});

closeBtn.addEventListener('click', function () {
  modalOverlay.style.display = 'none';
});
