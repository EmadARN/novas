"use client";

import SelectBox from "@/shared/components/ui/SelectBox";
import GradientButton from "@/shared/components/ui/Button";

export default function RegisterStep3({
  formData,
  handleChange,
  handleFieldChange,
  yearOptions = [],
  fieldOptions = [],
  schoolTypeOptions = [],
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
      <div className="flex flex-col py-2">
        <label className="text-gray-700 mb-1 text-sm font-medium">
          پایه تحصیلی
        </label>
        <SelectBox
          options={yearOptions}
          value={formData.year}
          placeholder="انتخاب پایه"
          onChange={(option) =>
            handleChange({
              target: { name: "year", value: option.value },
            })
          }
        />
      </div>

      <div className="flex flex-col py-2">
        <label className="text-gray-700 mb-1 text-sm font-medium">
          رشته تحصیلی
        </label>
        <SelectBox
          options={fieldOptions}
          value={formData.field}
          placeholder="انتخاب رشته"
          onChange={handleFieldChange}
        />
      </div>

      <div className="flex flex-col py-2">
        <label className="text-gray-700 mb-1 text-sm font-medium">
          نوع مدرسه
        </label>
        <SelectBox
          options={schoolTypeOptions}
          value={formData.schoolType}
          placeholder="انتخاب نوع مدرسه"
          onChange={(option) =>
            handleChange({
              target: { name: "schoolType", value: option.value },
            })
          }
        />
      </div>

      <div className="col-span-2 mt-4">
        <GradientButton
          type="submit"
          title="ثبت نهایی"
          className="w-full text-center"
        />
      </div>
    </form>
  );
}
