import projects from './projects';

const dom = () => {
  const projectContainer = document.querySelector('[data-project-container]');

  const LOCAL_STORAGE_PROJECT_KEY = 'task.projects';
  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'task.selectedProjectId';
  let projectsList =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
  let selectedProjectId = localStorage.getItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
  );

  function toggleMenu() {
    const menuShowBtn = document.getElementById('menu');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const sidebar = document.querySelector('aside');

    const showMenu = () => {
      sidebar.style.left = '0';
      menuShowBtn.style.display = 'none';
      menuCloseBtn.style.display = 'inline-block';
    };

    const hideMenu = () => {
      sidebar.style.left = '-100%';
      menuCloseBtn.style.display = 'none';
      menuShowBtn.style.display = 'inline-block';
    };

    return {
      showMenu,
      hideMenu,
    };
  }

  function renderProjects() {
    projectsList.forEach((project) => {
      const projectBody = createDiv('projectBody', 'project-body');
      projectElement.dataset.projectId = project.id;
      projectElement.classList.add('list-name');
      projectElement.innerText = project.name;
      if (project.id === selectedProjectId) {
        projectElement.classList.add('active');
      }
      projectContainer.appendChild(listElement);
    });
  }

  function manipulateModal() {}

  return { toggleMenu: toggleMenu() };
};

function elementsFactory() {
  function createHeader(text) {
    const header = document.createElement('h1');
    header.textContent = text;
    return header;
  }

  function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
  }

  function createDiv(name, text) {
    name = document.createElement('div');
    name.classList.add(text);
    return name;
  }

  function createButton(name, text) {
    name = document.createElement('div');
    name.classList.add(text);
    return name;
  }
}

export default dom;
