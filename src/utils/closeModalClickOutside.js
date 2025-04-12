export const closeModalClickOutside = ({e, modalRef}) => {
  const dialogDimensions = e.target.getBoundingClientRect();

  if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
    modalRef.current.close();
  }
}