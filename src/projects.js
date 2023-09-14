const projects = (() => {
  let projectsList = [];

  // GET DEFAULT PROJECTS AND TASKS FROM LOCAL STORAGE
  if (localStorage.getItem('PROJECT_KEY') === null) {
    projectsList = [
      {
        id: 1,
        name: 'Craft New Project',
        tasks: [
          {
            title: 'Enjoy my tea as much as my coding! 🍵',
            description:
              'Longer description of my demo task, just to show you this surprisingly nice scrollbar and amazingly cute kitty ฅ(^◉ᴥ◉^)ฅ',
            date: '2011-11-11',
            priority: 'low',
            projectIndex: 0,
            taskIndex: 0,
            completed: false,
          },
        ],
      },
      {
        id: 2,
        name: 'Craft Another Project',
        tasks: [
          {
            title:
              'Create magic through my mind, my heart and my keyboard.. 👩🏻‍💻',
            description:
              'Another longer description of my demo task, just to show you this surprisingly nice scrollbar and cute little birdie ϵ( ‘Θ’ )϶♪♫',
            date: '2012-12-12',
            priority: 'high',
            projectIndex: 1,
            taskIndex: 0,
            completed: false,
          },
        ],
      },
    ];
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
  }

  return {
    projectsList,
    createProject,
  };
})();

export default projects;
