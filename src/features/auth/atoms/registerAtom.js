import { atom } from "jotai";

// بارگذاری اولیه از localStorage
const loadFromLocalStorage = () => {
  if (typeof window === "undefined") return null;
  const saved = localStorage.getItem("registerForm");
  return saved ? JSON.parse(saved) : null;
};

export const registerFormAtom = atom(
  loadFromLocalStorage() || {
    currentStep: 1,
    formData: {
      firstName: "",
      lastName: "",
      fatherName: "",
      birthday: "",
      province: "",
      city: "",
      year: "",
      field: "",
      phone: "",
      parentPhone: "",
      schoolType: "",
      targetField: "",
      targetUniversity: "",
      hasCounselorExperience: "",
      hasExamExperience: "",
      hasClassExperience: "",
      hasProfessionalStudy: "",
      gender: "",
    },
  }
);

// افکت برای ذخیره خودکار در localStorage
export const registerFormAtomWithPersistence = atom(
  (get) => get(registerFormAtom),
  (get, set, update) => {
    set(registerFormAtom, update);
    if (typeof window !== "undefined") {
      localStorage.setItem("registerForm", JSON.stringify(update));
    }
  }
);
