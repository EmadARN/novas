import { atom } from "jotai";

const getInitialStep = () => {
  if (typeof window !== "undefined") {
    const step = localStorage.getItem("signUpStep");
    if (!step) return 1;
    return step === "success" ? "success" : Number(step);
  }
  return 1;
};

export const signUpStepAtom = atom(getInitialStep(), (get, set, update) => {
  set(signUpStepAtom, update);
  if (typeof window !== "undefined") {
    localStorage.setItem("signUpStep", update);
  }
});
