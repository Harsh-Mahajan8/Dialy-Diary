import { createPortal } from "react-dom";
import { useRef, forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
       close() {
      dialog.current.close();
    }
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/80 p-5 rounded text-stone-700 mx-auto my-auto">
      {children}
      <form className="text-right">
  <button 
    type="button" 
    className="bg-stone-800 text-stone-300 hover:bg-stone-900 hover:text-stone-100 mt-3"
    onClick={() => {
      // Close the modal programmatically
      dialog.current.close();
    }}
  >
    {btnCaption}
  </button>
</form>
    </dialog>,
    document.querySelector("#modal-root")
  );
});

export default Modal;
