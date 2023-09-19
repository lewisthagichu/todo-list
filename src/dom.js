import projects from './projects';

const dom = (() => {
  const projectContainer = document.querySelector('[data-project-container]');
  const selectLinks = document.querySelectorAll('[data-page');

  const SELECTED_PROJECT_ID_KEY = 'task.selectedProjectId';
  let selectedProjectId = localStorage.getItem(SELECTED_PROJECT_ID_KEY);

  const modal = document.querySelector('#modal');
  const form = modal.querySelector('#form');
  const modalTitle = modal.querySelector('#modal-title');
  const modalTitleError = modal.querySelector('.modal-title-error');
  const allProjects = document.querySelectorAll('.project');

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
      projectElement.setAttribute('data-project', '');
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
      const editButton = createHTMLElement('button', 'edit');
      const editButtonSpan = createHTMLElement(
        'span',
        'material-icons-sharp',
        'edit',
      );
      editButton.appendChild(editButtonSpan);

      const deleteButton = createHTMLElement('button', 'delete');
      const deleteButtonSpan = createHTMLElement(
        'span',
        ['delete-project', 'material-icons-sharp'],
        'delete',
      );
      deleteButton.appendChild(deleteButtonSpan);

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
      }

      // IF MODAL IS FOR ADDING TASK
      if (modalTask === 'Add Project') {
        // SHOW PROJECT TITLE
        modalMainTitle.textContent = 'Add Project';
      }
    }

    // TO CLOSE THE MODAL
    if (modalState === 'close') {
      modal.classList.remove('show');
      overlay.style.opacity = 0;
    }
  }

  function validateModal(modalTask, modalAction) {
    const modalTitleText = modalTitle.value;
    const projectDeletionText = document.querySelector(
      '.project-deletion-text',
    );
    let taskPriority;

    // CHECK FOR MODAL TITLE ERROR IF MODAL FORM IS SHOWN THEN ADD NEW PROJECT
    if (!form.classList.contains('hide') && modalTitleText === '') {
      modalTitleError.classList.remove('hide');
      modalTitleError.classList.add('show');
    } else if (modalAction === 'add' && modalTask === 'Add Project') {
      const projectName = modalTitle.value;
      projects.createProject(projectName);
      modalTitle.value = null;
      manipulateModal('close');
      save();
      console.log(projects.projectsList);
      renderProjects();
    }
  }

  function selectActivePage(target) {
    if (target) {
      const sidebarItems = document.querySelectorAll('.page');
      sidebarItems.forEach((item) => {
        item.classList.remove('active');
      });
      console.log(sidebarItems);
    }
    if (target.classList.contains('page')) {
      addLinkId();

      selectLinks.forEach((link) => {
        if (link.id === target.id) {
          link.classList.add('active');
        }
      });
      // } else {
      //   selectLinks.forEach((link) => link.classList.remove('active'));
      //   selectedProjectId = target.dataset.projectId;

      //   target.classList.add('active');
      // }
    }

    function addLinkId() {
      selectLinks.forEach((link) => {
        link.classList.remove('active');
        link.dataset.id = Date.now().toString();
      });
    }

    function deleteProject() {
      projects.projectsList = projects.projectsList.filter(
        (project) => project.id !== selectedProjectId,
      );
      selectedProjectId = null;
      save();
      renderProjects();
    }

    function save() {
      localStorage.setItem(
        'PROJECT_KEY',
        JSON.stringify(projects.projectsList),
      );
      localStorage.setItem(SELECTED_PROJECT_ID_KEY, selectedProjectId);
    }

    return {
      toggleMenu,
      renderProjects,
      manipulateModal,
      validateModal,
      selectActivePage,
      deleteProject,
    };
  }

  function createHTMLElement(tagName, classNames, textContent) {
    const element = document.createElement(tagName);

    if (classNames) {
      if (Array.isArray(classNames)) {
        // If classNames is an array, join them into a single string
        element.className = classNames.join(' ');
      } else {
        // If classNames is a single string, assign it directly
        element.className = classNames;
      }
    }

    if (textContent) {
      element.textContent = textContent;
    }

    return element;
  }

  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
})();

export default dom;
