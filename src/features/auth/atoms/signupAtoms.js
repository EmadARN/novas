"use client";
import { atom } from "jotai";

const getInitialStep = () => {
  if (typeof window === "undefined") return 1;

  const saved = localStorage.getItem("signUpStep");
  const parsed = Number(saved);
  return isNaN(parsed) ? 1 : parsed;
};

export const signUpStepAtom = atom(getInitialStep(), (get, set, update) => {
  const prev = get(signUpStepAtom);

  const nextValue = typeof update === "function" ? update(prev) : update;

  set(signUpStepAtom, nextValue);

  if (typeof window !== "undefined") {
    localStorage.setItem("signUpStep", String(nextValue));
  }
});
