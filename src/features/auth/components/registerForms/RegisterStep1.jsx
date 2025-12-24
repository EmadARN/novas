"use client";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Input } from "@/shared/components/ui/Input";
import SelectBox from "@/shared/components/ui/SelectBox";
import GradientButton from "@/shared/components/ui/Button";

export default function RegisterStep1({
  formData,
  handleChange,
  handleBirthdayChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
      <Input
        label="نام"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <Input
        label="نام خانوادگی"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <Input
        label="نام پدر"
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
      />

      <div className="flex flex-col py-2">
        <label className="text-gray-700 mb-1 text-sm font-medium">
          تاریخ تولد
        </label>
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          value={formData.birthday}
          onChange={handleBirthdayChange}
          placeholder="انتخاب تاریخ"
          className="w-full rounded-lg px-4 py-2 border border-gray-300 bg-white text-gray-800"
          inputClass="w-full"
        />
      </div>

      <div className="flex flex-col py-2">
        <label className="text-gray-700 mb-1 text-sm font-medium">جنسیت</label>
        <SelectBox
          options={[
            { value: "", label: "انتخاب جنسیت" },
            { value: "male", label: "مرد" },
            { value: "female", label: "زن" },
          ]}
          value={formData.gender}
          onChange={(selected) =>
            handleChange({ target: { name: "gender", value: selected.value } })
          }
        />
      </div>

      <div className="col-span-2 mt-4">
        <GradientButton
          type="submit"
          title="ادامه"
          className="w-full text-center"
        />
      </div>
    </form>
  );
}
