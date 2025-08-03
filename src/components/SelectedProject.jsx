import Task from "./Task";
export default function SelectedProject({ project, handleDeleteProject }) {
  const formatteddate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="mb-4 pb-4 border-b-2 border-stone-300">
        <div className="flex justify-between items-center">
          <h1>{project.title}</h1>
          <button
            onClick={() => handleDeleteProject(project.id)}
            className="text-stone-800 hover:text-red-600 hover:bg-stone-200"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatteddate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Task />
    </div>
  );
}
