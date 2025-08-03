import img from "../assets/no-projects.png";
export default function NoProject({ createNewProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-18 h-18 object-contain mx-auto" src={img} alt="" />
      <h2 className="text-xl font-bold text-stone-600 my-4">
        No Project Selected
      </h2>
      <p className="my-4 text-stone-500">
        Select a Project or get Started with a new one
      </p>
      <button
        onClick={createNewProject}
        className="button bg-stone-800 text-stone-400 mt-3 hover:bg-stone-700 hover:text-stone-300"
      >
        Create new Project
      </button>
    </div>
  );
}
