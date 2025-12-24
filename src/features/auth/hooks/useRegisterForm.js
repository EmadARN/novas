import { useAtom } from "jotai";
import { toast } from "react-toastify";
import { register } from "../services/auth.api";
import { signUpStepAtom } from "../atoms/signupAtoms";
import { useState, useEffect } from "react";
import { cities_all } from "../constants";

export default function useRegisterForm(phoneNumber) {
  const [currentStep, setCurrentStep] = useAtom(signUpStepAtom);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    birthday: "",
    gender: "",
    province: "",
    city: "",
    year: "",
    field: "",
    schoolType: "",
    phone: phoneNumber || "",
  });

  const [filteredCities, setFilteredCities] = useState([]);

  // وقتی استان تغییر کرد، cities فیلتر میشن
  useEffect(() => {
    if (!formData.province) {
      setFilteredCities([]);
      return;
    }

    const normalize = (str) => str.replace(/ي/g, "ی").replace(/ك/g, "ک");

    const filtered = cities_all.filter(
      (c) => normalize(c.provinceName) === normalize(formData.province)
    );

    setFilteredCities(filtered);

    if (!filtered.find((c) => c.cityName === formData.city)) {
      setFormData((prev) => ({ ...prev, city: "" }));
    }
  }, [formData.province]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProvinceChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      province: option?.value || "",
      city: "",
    }));
  };

  const handleCityChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      city: option?.value || "",
    }));
  };

  const handleFieldChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      field: option?.value || "",
    }));
  };

  const handleBirthdayChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      birthday: date?.format("YYYY-MM-DD") || "",
    }));
  };

  const handleNext = () => setCurrentStep(Number(currentStep) + 1);
  const handlePrev = () => setCurrentStep(Number(currentStep) - 1);

  const handleSubmit = async () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "birthday",
      "province",
      "city",
      "year",
      "field",
      "phone",
      "gender",
      "schoolType",
    ];
    const missing = requiredFields.filter((f) => !formData[f]);
    if (missing.length > 0) {
      toast.error("لطفاً تمام فیلدهای اجباری را پر کنید");
      return;
    }

    try {
      await register(formData);
      toast.success("ثبت‌نام با موفقیت انجام شد");
      setCurrentStep("success");
    } catch (err) {
      toast.error(err?.message || "خطا در ثبت‌نام");
    }
  };

  return {
    formData,
    filteredCities,
    handleChange,
    handleProvinceChange,
    handleCityChange,
    handleFieldChange,
    handleBirthdayChange,
    handleNext,
    handlePrev,
    handleSubmit,
  };
}
