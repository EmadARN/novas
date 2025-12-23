"use client";

import GradientButton from "@/shared/components/ui/Button";

export default function SendOtp({ defaultConfig, onSubmit, loading }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">
          {defaultConfig.step1_title}
        </h2>
        <p className="text-sm text-text-muted">
          {defaultConfig.step1_subtitle}
        </p>
      </div>

      <input
        type="tel"
        name="phone"
        placeholder="09xxxxxxxxx"
        maxLength={11}
        className="input-field w-full p-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary"
        required
      />
      <div className="col-span-2 mt-4">
        <GradientButton
          type="submit"
          title={defaultConfig.step1_button}
          className="w-full text-center"
        />
      </div>
    </form>
  );
}
