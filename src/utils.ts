export const isEmailValid = (email: string): boolean =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

export const isPasswordValid = (password: string): boolean =>
  /^(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{4,10})$/.test(password);
