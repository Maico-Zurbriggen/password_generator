import { useRef } from "react";
import { ConfigurationGenerator } from "./ConfigurationGenerator";

export const ModalGenerator = ({ modifyPassword }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    const dialogDimensions = e.target.getBoundingClientRect();

    if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
      modalRef.current.close();
    }
  }

  return (
    <>
      <button onClick={() => modalRef.current.showModal()}>
        <i className="fa-solid fa-filter"></i>
      </button>
      <dialog ref={modalRef} onClick={handleClickOutside}>
        <header>
          <h1>Modal Generator</h1>
        </header>
        <main>
          <ConfigurationGenerator modal={modalRef} buttonText="Generar" modifyPassword={modifyPassword}/>
          <button className="button-modal-form" onClick={() => modalRef.current.close()}>cerrar</button>
        </main>
      </dialog>
    </>
  );
};
