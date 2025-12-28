"use client";

import GradientButton from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";

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

      <Input label="شماره همراه" name="phone" />
      <div className="col-span-2 mt-4">
        <GradientButton
          loading={loading}
          type="submit"
          title={defaultConfig.step1_title}
          className="w-full text-center"
        />
      </div>
    </form>
  );
}
