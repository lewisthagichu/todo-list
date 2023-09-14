import doms from './dom';

const handlers = (() => {
  const dom = doms();

  function listenClicks() {
    document.addEventListener('click', (event) => {
      const modalMainTitle = document.querySelector('.modal-main-title');

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

      // VALIDATE MODAL
      if (target.classList.contains('confirm-modal')) {
        // VALIDATE MODAL FOR ADDING PROJECT
        if (target.textContent === 'Add') {
          if (modalMainTitle.textContent === 'Add Project') {
            dom.validateModal('Add Project', 'add');
          }
        }
      }

      // SELECT ACTIVE PAGE
      if (target.closest('.page')) {
        const activeLink = target.closest('.page');
        dom.selectActivePage(activeLink);
      }

      if (target.closest('.project')) {
        const projectDiv = target.closest('.project');
        dom.selectActivePage(projectDiv);
      }

      // DELETE PROJECT
      if (target.classList.contains('delete-project')) {
        dom.deleteProject();
      }
    });
  }

  return { listenClicks };
})();

export default handlers;
