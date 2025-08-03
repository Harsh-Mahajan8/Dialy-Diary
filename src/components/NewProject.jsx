import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ cancelBtn, onAdd, okay }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  let handleSave = () => {
    const currtitle = title.current.value;
    const currDescription = description.current.value;
    const currDueDate = dueDate.current.value;

    //validations

    if (
      currtitle.trim() === "" ||
      currDescription.trim() === "" ||
      currDueDate.trim() === ""
    ) {
      //Show Modal
      modal.current.open();
      okay();
      return;
    }

    onAdd({
      title: currtitle,
      description: currDescription,
      dueDate: currDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} btnCaption={"Okay"}>
        <h2 className="font-bold md:text-xl">Invalid Input</h2>
        <p>Opps... Its look like you forgot to enter the value</p>
      </Modal>
      <div className="w-[43rem] mt-16  text-stone-700 me-5">
        <menu className="flex items-center justify-end">
          <li className="mx-3">
            <button
              className="hover:text-stone-900 hover:bg-stone-50"
              onClick={cancelBtn}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 hover:bg-stone-950 text-stone-50 hover:text-stone-100"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label={"title"} type={"text"} ref={title} />
          <Input
            label={"description"}
            type={"text"}
            textarea
            ref={description}
          />
          <Input label={"Due-Date"} type={"date"} ref={dueDate} />
        </div>
      </div>
    </>
  );
}
