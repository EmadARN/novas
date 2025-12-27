"use client";
import { useAtom } from "jotai";
import SendOtp from "../components/SendOtp";
import CheckOtp from "../components/CheckOtp";
import { signUpStepAtom } from "../atoms/signupAtoms";
import RegisterStep1 from "./registerForms/RegisterStep1";
import RegisterStep2 from "./registerForms/RegisterStep2";
import RegisterStep3 from "./registerForms/RegisterStep3";
import UserVerify from "./UserVerify";
import { toast } from "react-toastify";
import useSendOtp from "../hooks/useSendOtp";
import useCheckOtp from "../hooks/useCheckOtp";
import useRegisterForm from "../hooks/useRegisterForm";
import {
  provinces,
  fieldOptions,
  yearOptions,
  schoolTypeOptions,
} from "../constants";

export default function SignUp() {
  const [currentStep, setCurrentStep] = useAtom(signUpStepAtom);

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

  const {
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
  } = useRegisterForm(phoneNumber);

  const defaultConfig = {
    step1_title: "ورود شماره موبایل",
    step1_subtitle: "لطفا شماره موبایل خود را وارد کنید",
    step2_title: "تایید کد OTP",
    step2_subtitle: "کد ارسال شده را وارد کنید",
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative py-8 md:min-w-[450px]">
      <div className="w-full max-w-md bg-light rounded-3xl shadow-lg p-8 relative z-10">
        {currentStep !== 6 && (
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-primary">{`مرحله ${
                currentStep > 5 ? 5 : currentStep
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
              />
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <SendOtp
            defaultConfig={defaultConfig}
            onSubmit={(e) => handlePhoneSubmit(e, handleNext)}
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
            onOtpChange={handleOtpInput}
            onOtpKeyDown={handleOtpKeyDown}
            onSubmit={(e) => handleOtpSubmit(e, handleNext)}
            onResend={handleResend}
            loading={loadingOtp}
            onEditNumber={() => setCurrentStep(1)}
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
            loading={false}
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
            loading={false}
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
              handleSubmit();
            }}
            loading={false}
          />
        )}

        {currentStep === 6 && (
          <div className="text-center space-y-4">
            <UserVerify />
          </div>
        )}
      </div>
    </div>
  );
}
