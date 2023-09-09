import dom from './dom';

const handlers = (() => {
  function listenClicks() {
    document.addEventListener('click', (event) => {
      const { target } = event;
      const ui = dom();

      // TOGGLE SIDE MENU
      if (target.classList.contains('menu')) {
        ui.toggleMenu.showMenu();
      } else if (target.classList.contains('menu-close')) {
        ui.toggleMenu.hideMenu();
      }
    });
  }

  return { listenClicks };
})();

export default handlers;
