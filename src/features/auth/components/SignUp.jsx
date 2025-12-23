"use client";

import { useAtom } from "jotai";
import SendOtp from "../components/SendOtp";
import CheckOtp from "../components/CheckOtp";
import useSendOtp from "../hooks/useSendOtp";
import useCheckOtp from "../hooks/useCheckOtp";
import useRegisterForm from "../hooks/useRegisterForm";
import { signUpStepAtom } from "../atoms/signupAtoms";
import RegisterStep1 from "./registerForms/RegisterStep1";
import RegisterStep2 from "./registerForms/RegisterStep2";
import RegisterStep3 from "./registerForms/RegisterStep3";
import {
  fieldOptions,
  provinces,
  schoolTypeOptions,
  yearOptions,
} from "../constants";

export default function SignUp() {
  const [currentStep, setCurrentStep] = useAtom(signUpStepAtom);

  const nextStep = () => setCurrentStep(Number(currentStep) + 1);
  const goToSuccess = () => {
    setCurrentStep("success");
    localStorage.removeItem("signUpStep");
  };
  const handleEditNumber = () => setCurrentStep(1);

  const defaultConfig = {
    step1_title: "خوش آمدید به نوا ",
    step1_subtitle: "شماره موبایل خود را وارد کنید",
    step1_button: "ادامه",
    step2_title: "کد تایید",
    step2_subtitle: "کد ارسال شده به شماره موبایل خود را وارد کنید",
    step2_button: "تایید و ادامه",
    step3_title: "اطلاعات شخصی",
    step3_subtitle: "لطفاً اطلاعات خود را وارد کنید",
    step3_button: "ادامه",
    step4_title: "جزئیات موقعیت مکانی",
    step4_subtitle: "محل سکونت خود را وارد کنید",
    step4_button: "ثبت نهایی",
    success_title: "ثبت نام با موفقیت انجام شد!",
    success_message: "اکنون می‌توانید وارد حساب خود شوید.",
  };

  // ---------- Step 1: Phone ----------
  const {
    phoneNumber,
    handlePhoneSubmit,
    toast: toastPhone,
    loading: loadingPhone,
  } = useSendOtp();

  // ---------- Step 2: OTP ----------
  const {
    otpRefs,
    otpError,
    timeLeft,
    showResend,
    toast: toastOtp,
    handleOtpInput,
    handleOtpKeyDown,
    handleOtpSubmit,
    handleResend,
  } = useCheckOtp(phoneNumber);

  // ---------- Step 3,4,5: Registration ----------
  const {
    formData,
    handleChange,
    handleBirthdayChange,
    handleProvinceChange,
    handleCityChange,
    handleFieldChange,
    filteredCities,
    handleNext,
    handlePrev,
    handleSubmit,
    toast: toastRegister,
  } = useRegisterForm(phoneNumber);


  return (
    <div className="min-h-screen flex items-center justify-center relative px-4 py-8 bg-background md:min-w-[450px]">
      <div className="w-full max-w-md bg-light rounded-3xl shadow-lg p-8 relative z-10">
        {/* ---------- Progress Bar ---------- */}
        {currentStep !== "success" && (
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-primary">{`مرحله ${
                currentStep === 5 ? 5 : currentStep
              } از 5`}</span>
            </div>
            <div className="w-full h-1 bg-gray-200 rounded">
              <div
                className="h-1 rounded"
                style={{
                  width:
                    currentStep === 1
                      ? "20%"
                      : currentStep === 2
                      ? "40%"
                      : currentStep === 3
                      ? "60%"
                      : currentStep === 4
                      ? "80%"
                      : "100%",
                  background: `linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)`,
                }}
              ></div>
            </div>
          </div>
        )}

        {/* ---------- Steps ---------- */}
        {currentStep === 1 && (
          <SendOtp
            defaultConfig={defaultConfig}
            onSubmit={(e) => handlePhoneSubmit(e, nextStep)}
            loading={loadingPhone}
          />
        )}

        {currentStep === 2 && (
          <CheckOtp
            defaultConfig={defaultConfig}
            maskedPhone={phoneNumber}
            otpRefs={otpRefs}
            otpError={otpError}
            timeLeft={timeLeft}
            showResend={showResend}
            onEditNumber={handleEditNumber}
            onOtpChange={handleOtpInput}
            onOtpKeyDown={handleOtpKeyDown}
            onSubmit={(e) => handleOtpSubmit(e, nextStep)}
            onResend={handleResend}
          />
        )}

        {currentStep === 3 && (
          <RegisterStep1
            formData={formData}
            handleChange={handleChange}
            handleBirthdayChange={handleBirthdayChange}
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
          />
        )}

        {currentStep === 4 && (
          <RegisterStep2
            formData={formData}
            provinces={provinces}
            filteredCities={filteredCities}
            handleProvinceChange={handleProvinceChange}
            handleCityChange={handleCityChange}
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
          />
        )}

        {currentStep === 5 && (
          <RegisterStep3
            formData={formData}
            handleChange={handleChange}
            handleFieldChange={handleFieldChange}
            fieldOptions={fieldOptions}
            yearOptions={yearOptions}
            schoolTypeOptions={schoolTypeOptions}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(); // ثبت نهایی فرم
            }}
          />
        )}

        {/* ---------- Success ---------- */}
        {currentStep === "success" && (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              {defaultConfig.success_title}
            </h2>
            <p className="text-sm text-text-muted">
              {defaultConfig.success_message}
            </p>
            <button
              className="w-full py-4 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-primary to-accent"
              onClick={() => alert("خوش آمدید به نوا هت! 🎉")}
            >
              شروع
            </button>
          </div>
        )}

        {/* ---------- Toasts ---------- */}
        {[toastPhone, toastOtp, toastRegister].map(
          (t, i) =>
            t && (
              <div
                key={i}
                className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl shadow-lg z-50`}
                style={{
                  borderLeft: `4px solid ${
                    t.isError ? "#ef4444" : "var(--primary)"
                  }`,
                  backgroundColor: "var(--light)",
                }}
              >
                <p className="text-sm font-medium text-foreground">
                  {t.message}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
}
