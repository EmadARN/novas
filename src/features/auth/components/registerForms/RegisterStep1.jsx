"use client";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { SelectBox } from "@/shared/components/ui/SelectBox";
import { Input } from "@/shared/components/ui/Input";
import { genders } from "../../constants";

export default function RegisterStep1({ formData, onChange, setFormData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <Input
        label="نام"
        name="first_name"
        value={formData.first_name}
        onChange={onChange}
      />
      <Input
        label="نام خانوادگی"
        name="last_name"
        value={formData.last_name}
        onChange={onChange}
      />
      <Input
        label="نام پدر"
        name="father_name"
        value={formData.father_name}
        onChange={onChange}
      />

      <div className="flex flex-col pt-4 ">
        <label className="text-sm pb-0.5">تاریخ تولد</label>
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          value={formData.birthday}
          style={{ height: "35px", width: "100%" }}
          onChange={(date) => {
            if (!date) {
              setFormData((p) => ({ ...p, birthday: "" }));
              return;
            }

            const gregorianDate = date
              .convert("gregorian")
              .format("YYYY-MM-DD");

            setFormData((prev) => ({
              ...prev,
              birthday: gregorianDate,
            }));
          }}
        />
      </div>

      <SelectBox
        label="جنسیت"
        name="gender"
        value={formData.gender}
        onChange={onChange}
        options={genders}
      />
    </div>
  );
}
