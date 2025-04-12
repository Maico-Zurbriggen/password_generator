import { useRef } from "react";
import { ConfigurationGenerator } from "../components";
import { closeModalClickOutside } from "../utils";

export const ModalGenerator = ({ modifyPassword }) => {
  const modalRef = useRef(null);

  return (
    <>
      <button onClick={() => modalRef.current.showModal()}>
        <i className="fa-solid fa-filter"></i>
      </button>
      <dialog ref={modalRef} onClick={(e) => closeModalClickOutside({e, modalRef})}>
        <header>
          <h1>Modal Generator</h1>
        </header>
        <main>
          <ConfigurationGenerator modal={modalRef} buttonText="Generar" buttonText2="Cerrar" modifyPassword={modifyPassword}/>
        </main>
      </dialog>
    </>
  );
};
