import { DIAL_MAP } from "../constants";

export const matchByName = (name: string, digits: string): boolean => {
  if (!digits) return true;

  const alphaChars = name.replace(/[^a-zA-Z]/g, "").toUpperCase();
  if (alphaChars.length < digits.length) return false;

  return digits.split("").every((digit, i) => {
    const letters = DIAL_MAP[digit];
    return letters?.includes(alphaChars[i]) ?? false;
  });
};

export const matchByNumber = (phone: string, digits: string): boolean =>
  !digits || phone.replace(/\D/g, "").includes(digits);
