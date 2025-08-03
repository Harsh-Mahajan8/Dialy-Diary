import { useRef, useState } from "react";
import Modal from "./Modal";
export default function Task() {
  const task = useRef();
  const modal = useRef();

  const [taskList, setTaskList] = useState([]);
  const handleAddTask = () => {
    if (task.current.value.trim() === "") {
      //Show Modal
      modal.current.open();
    } else {
      let taskValue = task.current.value;
      setTaskList((preTask) => [...preTask, taskValue]);
      task.current.value = "";
    }
  };

  const clearTask = (id) => {
    setTaskList(taskList.filter((task, index) => index !== id));
  };

  let content = <p>This project does not any Task yet .....</p>;
  if (taskList.length > 0) {
    content = (
      <ul className="bg-stone-100 rounded">
        {taskList.map((task, index) => {
          return (
            <li
              key={index}
              className="flex w-full px-2 m-2 text-center items-center justify-between"
            >
              <p>{task}</p>
              <button
                onClick={() => clearTask(index)}
                className="hover:bg-stone-200 text-stone-800 hover:text-red-700"
              >
                Clear
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <>
      <Modal ref={modal} btnCaption={"Okay"}>
        <h2 className="font-bold md:text-xl">Invalid Input</h2>
        <p>Opps... Its look like you forgot to enter the value</p>
      </Modal>
      <div className="my-5">
        <h1>Task</h1>
        <div className="flex my-4 mb-10">
          <input type="text" className="input w-4/7" ref={task} />
          <button
            className="text-stone-800 hover:text-stone-950 hover:bg-stone-100 ms-4 "
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
        {content}
      </div>
    </>
  );
}
