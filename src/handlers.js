import doms from './dom';

const handlers = (() => {
  const dom = doms();

  function listenClicks() {
    document.addEventListener('click', (event) => {
      const { target } = event;

      // TOGGLE SIDE MENU
      if (target.classList.contains('menu')) {
        dom.toggleMenu().showMenu();
      } else if (target.classList.contains('menu-close')) {
        dom.toggleMenu().hideMenu();
      }

      // MODAL FOR ADDING PROJECT
      if (target.classList.contains('add-project')) {
        dom.manipulateModal('show', 'Add Project', 'Add');
      }

      // CLOSE MODAL
      if (target.classList.contains('close')) {
        dom.manipulateModal('close');
      }
    });
  }

  return { listenClicks };
})();

export default handlers;
