import dom from './dom';

const projects = (() => {
  let projectsList = [];

  // GET DEFAULT PROJECTS AND TASKS FROM LOCAL STORAGE
  if (localStorage.getItem('PROJECT_KEY') === null) {
    projectsList = [];
  } else {
    const projectsFromStorage = JSON.parse(localStorage.getItem('PROJECT_KEY'));
    projectsList = projectsFromStorage;
  }

  function createProject(name) {
    const project = {};

    project.id = Date.now().toString();
    project.name = name;
    project.tasks = [];

    projectsList.push(project);
    console.log(projectsList);
  }

  return {
    projectsList,
    createProject,
  };
})();

export default projects;
