export const levels = {
  //Seguridad baja: cualquier número de caracteres con 1 tipo de caracter entre minusculas, mayusculas, numeros y simbolos
  lowSecurity: /^[A-Za-z\d!@#$%^&*()_+~`|}{[\\\]:;?><,./-=]+$/,
  //Seguridad media: minimo 8 caracteres, con 3 combinaciones
  mediumSecurity: /^(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*[\d\W_].*).{8,}$/,
  //Seguridad alta: minimo 8 caracteres, con las 4 combinaciones
  highSecurity: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

}