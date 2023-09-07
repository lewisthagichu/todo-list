const menuShowBtn = document.getElementById('menu');
const menuCloseBtn = document.getElementById('menu-close-btn');
const addProjectBtn = document.getElementById('add-project');
const sidebar = document.querySelector('aside');
const modal = document.getElementById('modal');

menuShowBtn.addEventListener('click', showMenu);

menuCloseBtn.addEventListener('click', hideMenu);

addProjectBtn.addEventListener('click', () => {
  modal.style.display = 'block';
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
