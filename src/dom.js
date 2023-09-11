import projects from './projects';

const doms = () => {
  const projectContainer = document.querySelector('[data-project-container]');

  const modal = document.querySelector('#modal');
  const form = modal.querySelector('#form');
  const modalTitle = modal.querySelector('#modal-title');
  const modalTitleError = modal.querySelector('.modal-title-error');
  const addTaskButton = document.querySelector('.add-task');
  const tasksCount = document.querySelector('.tasks-count');
  const taskDescription = modal.querySelector('.task-description');
  const taskDueDate = modal.querySelector('#dueDate');
  const taskPrioritySelection = modal.querySelector('.task-priority');

  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'task.selectedProjectId';
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
    clearElement(projectContainer);
    projects.projectsList.forEach((project) => {
      const projectElement = createHTMLElement('div', 'project');
      projectElement.dataset.projectId = project.id;
      if (project.id === selectedProjectId) {
        projectElement.classList.add('active');
      }

      const projectTitle = createHTMLElement('div', 'project-title');
      const projectTitleSpan = createHTMLElement(
        'span',
        'material-icons-sharp',
        'list',
      );
      const projectTitleHeader = createHTMLElement(
        'h3',
        'project-name',
        project.name,
      );
      projectTitle.appendChild(projectTitleSpan);
      projectTitle.appendChild(projectTitleHeader);

      const projectConfig = createHTMLElement('div', 'project-config');
      const editButton = createHTMLElement('button', 'edit', 'edit');
      const deleteButton = createHTMLElement('button', 'delete', 'delete');
      projectConfig.appendChild(editButton);
      projectConfig.appendChild(deleteButton);

      projectElement.appendChild(projectTitle);
      projectElement.appendChild(projectConfig);
      projectContainer.appendChild(projectElement);
    });
  }

  function manipulateModal(modalState, modalTask, modalAction) {
    const modalHeader = modal.querySelector('.modal-header');
    const modalMainTitle = modal.querySelector('.modal-main-title');
    const modalTaskButton = modal.querySelector('.modal-task-button');
    const projectDeletionText = modal.querySelector('.project-deletion-text');
    const taskDeletionText = modal.querySelector('.task-deletion-text');
    const taskInfoDiv = modal.querySelector('.info-div');
    const confirmButton = modal.querySelector('.confirm-modal');
    const cancelButton = modal.querySelector('.cancel-modal');

    modalHeader.classList.remove('deletion-modal-header');
    form.reset();
    form.classList.remove('hide');
    taskInfoDiv.classList.add('hide');
    modalTitleError.classList.add('hide');
    projectDeletionText.classList.add('hide');
    taskDeletionText.classList.add('hide');
    cancelButton.classList.remove('cancel-deletion');
    confirmButton.classList.remove('confirm-deletion', 'hide');

    if (modalState === 'show') {
      const modalTasksDiv = modal.querySelector('.modal-tasks-div');

      modal.classList.remove('hide');
      modal.classList.add('show');
      overlay.style.opacity = 1;
      modalMainTitle.textContent = modalTask;
      modalTaskButton.textContent = modalAction;
      modalTasksDiv.classList.add('hide');

      // IF MODAL IS FOR ADDING PROJECT
      if (modalTask === 'Add Project') {
        // SHOW PROJECT TITLE
        modalMainTitle.textContent = 'Add Project';
        console.log('test');
      }
    }

    // TO CLOSE THE MODAL
    if (modalState === 'close') {
      modal.classList.remove('show');
      overlay.style.opacity = 0;
    }
  }

  return {
    toggleMenu,
    renderProjects,
    manipulateModal,
  };
};

function createHTMLElement(tagName, className, textContent) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

function save() {
  localStorage.setItem(
    LOCAL_STORAGE_PROJECT_KEY,
    JSON.stringify(projects.projectsList),
  );
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectId,
  );
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export default doms;
