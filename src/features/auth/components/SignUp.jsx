"use client";

import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import SendOtp from "../components/SendOtp";
import UserVerify from "./UserVerify";
import RegisterStep1 from "./registerForms/RegisterStep1";
import RegisterStep2 from "./registerForms/RegisterStep2";
import RegisterStep3 from "./registerForms/RegisterStep3";
import { signUpStepAtom } from "../atoms/signupAtoms";
import useSendOtp from "../hooks/useSendOtp";
import useCheckOtp from "../hooks/useCheckOtp";
import { register } from "../services/auth.api";
import { cities_all, provinces } from "../constants";
import BtnLoader from "@/shared/components/ui/BtnLoader";
import CheckOtp from "./CheckOtp";

const defaultConfig = {
  step1_title: "ورود شماره موبایل",
  step1_subtitle: "لطفا شماره موبایل خود را وارد کنید",
  step2_title: "تایید کد OTP",
  step2_subtitle: "کد ارسال شده را وارد کنید",
};

export default function SignUp() {
  const [currentStep, setCurrentStep] = useAtom(signUpStepAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filteredCities, setFilteredCities] = useState(cities_all);

  /* =======================
      فرم دیتا اصلی (اصلاح‌شده)
  ======================= */
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    father_name: "",
    birthday: "",
    gender: "",
    province: "",
    city: "",
    year: "",
    field: "",
    school_type: "",
    national_code: "",
    address: "",
  });

  /* ======================= */
  useEffect(() => {
    const savedStep = localStorage.getItem("signUpStep");
    if (!savedStep) setCurrentStep(1);
  }, [setCurrentStep]);

  useEffect(() => {
    localStorage.setItem("signUpStep", currentStep.toString());
  }, [currentStep]);

  /* ======================= OTP ======================= */
  const {
    phoneNumber,
    handlePhoneSubmit,
    loading: loadingPhone,
  } = useSendOtp();

  const {
    otpRefs,
    otpError,
    timeLeft,
    showResend,
    handleOtpInput,
    handleOtpKeyDown,
    handleOtpSubmit,
    handleResend,
    loading: loadingOtp,
  } = useCheckOtp(phoneNumber);

  /* ======================= Handlers ======================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setCurrentStep((p) => p + 1);
  const handlePrev = () => setCurrentStep((p) => p - 1);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      const payload = {
        ...formData,
        phone: phoneNumber,
      };

      await register(payload);

      localStorage.removeItem("signUpStep");
      setCurrentStep(6);
    } catch (err) {
      console.error(err);
      alert("ثبت نام انجام نشد");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ======================= UI ======================= */
  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="w-full min-w-sm bg-light rounded-3xl shadow-lg p-8">
        {currentStep <= 5 && (
          <div className="mb-6">
            <span className="text-sm text-primary">
              مرحله {currentStep} از 5
            </span>
            <div className="w-full h-1 bg-gray-200 rounded mt-2">
              <div
                className="h-1 rounded"
                style={{
                  width: `${currentStep * 20}%`,
                  background:
                    "linear-gradient(90deg, var(--primary), var(--accent))",
                }}
              />
            </div>
          </div>
        )}
        {currentStep === 1 && (
          <SendOtp
            onSubmit={(e) => handlePhoneSubmit(e, handleNext)}
            loading={loadingPhone}
            defaultConfig={defaultConfig}
          />
        )}
        {currentStep === 2 && (
          <CheckOtp
            maskedPhone={phoneNumber}
            otpRefs={otpRefs}
            otpError={otpError}
            timeLeft={timeLeft}
            showResend={showResend}
            onOtpChange={handleOtpInput}
            onOtpKeyDown={handleOtpKeyDown}
            onSubmit={(e) => handleOtpSubmit(e, handleNext)}
            onResend={handleResend}
            loading={loadingOtp}
            onEditNumber={() => setCurrentStep(1)}
            defaultConfig={defaultConfig}
          />
        )}
        {currentStep === 3 && (
          <RegisterStep1
            formData={formData}
            onChange={handleChange}
            setFormData={setFormData}
          />
        )}
        {currentStep === 4 && (
          <RegisterStep2
            formData={formData}
            setFormData={setFormData}
            provinces={provinces}
            filteredCities={filteredCities}
            setFilteredCities={setFilteredCities}
          />
        )}
        {currentStep === 5 && (
          <RegisterStep3 formData={formData} onChange={handleChange} />
        )}
        <div className="flex justify-between mt-8 gap-3">
          {currentStep >= 4 && currentStep < 6 && (
            <button
              onClick={handlePrev}
              className="px-5 py-3 bg-gray-200 rounded-lg cursor-pointer"
            >
              مرحله قبل
            </button>
          )}

          {currentStep >= 3 && currentStep < 5 ? (
            <button
              onClick={handleNext}
              className="px-5 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white rounded-lg cursor-pointer "
            >
              مرحله بعد
            </button>
          ) : (
            currentStep === 5 && (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-5 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white rounded-lg cursor-pointer"
              >
                {isSubmitting ? <BtnLoader /> : "ثبت نهایی"}
              </button>
            )
          )}
        </div>
        {currentStep === 6 && (
          <div className="w-full min-w-sm bg-light rounded-3xl  p-8">
            <UserVerify />
          </div>
        )}
      </div>
    </div>
  );
}
