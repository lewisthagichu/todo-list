const projects = (() => {
  let projectsList = [];

  function createProject(name) {
    const project = {};

    project.id = Date.now().toString();
    project.name = name;
    project.tasks = [];

    projectsList.push(project);
  }

  return {
    projectsList,
    createProject,
  };
})();

export default projects;
