import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  let addProject = () => {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: null,
      };
    });
  };

  let handleAddProject = (projectData) => {
    setProjectState((preState) => {
      const newProject = {
        ...projectData,
        id: Date.now(),
      };
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: [...preState.projects, newProject],
      };
    });
  };

  let handleSelectProject = (id) => {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: id,
      };
    });
  };
  console.log(projectState);

  let cancelProject = () => {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
      };
    });
  };

  let handleDelete = (id) => {
    setProjectState((preState) => {
      const newProjects = preState.projects.filter(
        (project) => project.id !== id
      );  
      return {
        ...preState,
        projects: newProjects,
        selectedProjectId: undefined,
      };
    });
  };

  let selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      handleDeleteProject={handleDelete}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        cancelBtn={cancelProject}
        onAdd={handleAddProject}
      />
    );
  }
  if (projectState.selectedProjectId === undefined) {
    content = <NoProject createNewProject={addProject} />;
  }

  return (
    <div className="min-h-screen mt-8 flex gap-6 md:gap-16">
      <Sidebar
        addNewProject={addProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectid={projectState.selectedProjectId}
      />
      {content}
    </div>
  );
}
