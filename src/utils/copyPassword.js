export const copyPassword = (password) => {
  navigator.clipboard.writeText(password);
  const avisoCopiado = document.querySelector(".aviso-copiado");
  
  avisoCopiado.classList.add("show");

  setTimeout(() => {
    avisoCopiado.classList.remove("show");
  }, 3000);
}