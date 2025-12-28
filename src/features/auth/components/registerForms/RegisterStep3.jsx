"use client";

import { SelectBox } from "@/shared/components/ui/SelectBox";
import { fieldOptions, schoolTypeOptions, yearOptions } from "../../constants";

export default function RegisterStep3({ formData, onChange }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <SelectBox
        label="پایه تحصیلی"
        name="year"
        value={formData.year}
        onChange={onChange}
        options={yearOptions}
        className="w-full"
      />

      <SelectBox
        label="رشته"
        name="field"
        value={formData.field}
        onChange={onChange}
        options={fieldOptions}
        className="w-full"
      />

      <SelectBox
        label="نوع مدرسه"
        name="school_type"
        value={formData.school_type}
        onChange={onChange}
        options={schoolTypeOptions}
        className="w-full"
      />
    </div>
  );
}
