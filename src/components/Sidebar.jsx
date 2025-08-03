export default function Sidebar({
  addNewProject,
  projects,
  onSelectProject,
  selectedProjectid,
}) {
  return (
    <aside className="w-3/7 px-4 md:px-6 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-tr-xl">
      <h2 className="md:text-xl text-stone-200 font-bold mb-8">
        YOUR PROJECTS
      </h2>
      <button
        className="bg-stone-700 button mb-[2.5rem] text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={addNewProject}
      >
        +Add Project
      </button>
      <ul className="text-stone-400 ">
        {projects.map((project) => {
          let cssClass =
            "text-left align-center w-full hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectid) {
            cssClass += " bg-stone-800 text-stone-200";
          }
          return (
            <li key={project.id} className={"flex justify-between"}>
              <button
                className={cssClass}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
