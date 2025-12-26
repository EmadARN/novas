"use client";
import { atom } from "jotai";

const getInitialStep = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("signUpStep");
    if (!saved) return 1;
    const parsed = Number(saved);
    return isNaN(parsed) ? 1 : parsed;
  }
  return 1;
};

export const signUpStepAtom = atom(getInitialStep(), (get, set, update) => {
  set(signUpStepAtom, update);
  if (typeof window !== "undefined") {
    localStorage.setItem("signUpStep", update);
  }
});
