const menuShowBtn = document.getElementById('menu');
const menuCloseBtn = document.getElementById('menu-close-btn');
const addProjectBtn = document.getElementById('add-project');
const sidebar = document.querySelector('aside');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close');

menuShowBtn.addEventListener('click', showMenu);

menuCloseBtn.addEventListener('click', hideMenu);

addProjectBtn.addEventListener('click', () => {
  modal.classList.remove('hide');
  modal.classList.add('show');
  overlay.style.opacity = 1;
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  overlay.style.opacity = 0;
});

function showMenu() {
  sidebar.style.left = '0';
  menuShowBtn.style.display = 'none';
  menuCloseBtn.style.display = 'inline-block';
}

function hideMenu() {
  sidebar.style.left = '-100%';
  menuCloseBtn.style.display = 'none';
  menuShowBtn.style.display = 'inline-block';
}
