const projects = (() => {
  let projectsList = [];

  function createProject(title) {
    const project = {};

    project.id = Date.now().toString();
    project.title = title;
    project.tasks = [];

    projectsList.push(project);
  }

  return {
    projectsList,
    createProject,
  };
})();

export default projects;
