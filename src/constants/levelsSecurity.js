export const levels = {
  lowSecurity: /^[A-Za-z\d@$!%*?&_-]{6,}$/,
  mediumSecurity: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{8,}$/,
  highSecurity: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{10,}$/
}