"use client";
import { atom } from "jotai";

const getInitialPhone = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("signUpPhone") || "";
  }
  return "";
};

export const phoneAtom = atom(getInitialPhone());
