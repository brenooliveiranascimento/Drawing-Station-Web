const MIN_CHARACTERS = 6;
const regex = /\S+@\S+\.\S+/;

export const emailVerification = (email: string) => regex.test(email);

export const passwordVerification = (password: string) => password.length >= MIN_CHARACTERS;
