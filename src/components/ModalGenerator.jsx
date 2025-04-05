import { useRef } from "react";
import { ConfigurationGenerator } from "./ConfigurationGenerator";

export const ModalGenerator = () => {
  const modalRef = useRef(null);

  return (
    <>
      <button onClick={() => modalRef.current.showModal()}>
        <i className="fa-solid fa-filter"></i>
      </button>
      <dialog ref={modalRef}>
        <header>
          <h1>Modal Generator</h1>
        </header>
        <main>
          <ConfigurationGenerator buttonText="Generar"/>
        </main>
      </dialog>
    </>
  );
};
