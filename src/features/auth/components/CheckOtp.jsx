"use client";

import GradientButton from "@/shared/components/ui/Button";

export default function CheckOtp({
  defaultConfig,
  maskedPhone,
  otpRefs,
  otpError,
  timeLeft,
  showResend,
  onEditNumber,
  onOtpChange,
  onOtpKeyDown,
  onSubmit,
  onResend,
}) {
  return (
    <div className="space-y-4">
      {/* ---------- عنوان ---------- */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">
          {defaultConfig.step2_title}
        </h2>
        <p className="text-sm text-text-muted pt-4">
          {defaultConfig.step2_subtitle}
        </p>
      </div>

      {/* ---------- شماره موبایل ---------- */}
      <div className="text-center mb-4 ">
        <button
          className="text-sm font-medium hover:underline text-accent pl-2 cursor-pointer"
          onClick={onEditNumber}
        >
          تغییر شماره <span className="text-sm ">{maskedPhone}</span>{" "}
        </button>
      </div>

      {/* ---------- فرم کد تایید ---------- */}
      <form onSubmit={onSubmit} className="space-y-4">
        <div   dir="ltr" className="flex justify-center gap-3 mb-4 ">
          {Array(otpRefs.current.length)
            .fill(0)
            .map((_, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                className="otp-input w-14 h-14 text-center border-2 border-gray-400 rounded-xl focus:border-primary"
                ref={(el) => (otpRefs.current[idx] = el)}
                onChange={(e) => onOtpChange(e, idx)}
                onKeyDown={(e) => onOtpKeyDown(e, idx)}
                required
              />
            ))}
        </div>

        {/* ---------- نمایش خطا ---------- */}
        {otpError && <p className="text-red-500 text-sm mb-2">{otpError}</p>}

        {/* ---------- زمان و ارسال مجدد ---------- */}
        <div className="text-center mb-4">
          {!showResend ? (
            <span className="text-sm text-text-muted">
              ارسال مجدد کد در ۰۰:{timeLeft.toString().padStart(2, "0")}
            </span>
          ) : (
            <button
              type="button"
              className="text-sm text-accent font-medium hover:underline cursor-pointer"
              onClick={onResend}
            >
              ارسال مجدد کد
            </button>
          )}
        </div>

        {/* ---------- دکمه تایید ---------- */}

        <div className="col-span-2 mt-4">
          <GradientButton
            type="submit"
            title={defaultConfig.step2_button}
            className="w-full text-center "
          />
        </div>
      </form>
    </div>
  );
}
