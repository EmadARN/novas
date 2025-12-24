"use client";

import GradientButton from "@/shared/components/ui/Button";
import SelectBox from "@/shared/components/ui/SelectBox";

export default function RegisterStep2({
  formData,
  provinces = [],
  filteredCities = [],
  handleProvinceChange,
  handleCityChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
      {/* ---------- استان ---------- */}
      <div className="flex flex-col py-2">
        <label className="text-gray-700 mb-1 text-sm font-medium">استان</label>
        <SelectBox
          options={provinces}
          value={formData.province}
          placeholder="انتخاب استان"
          onChange={handleProvinceChange}
        />
      </div>

      {/* ---------- شهر ---------- */}
      <div className="flex flex-col py-2">
        <label className="text-gray-700 mb-1 text-sm font-medium">شهر</label>
        <SelectBox
          options={filteredCities.map((c) => ({
            value: c.cityName,
            label: c.cityName,
          }))}
          value={formData.city}
          placeholder={
            formData.province ? "انتخاب شهر" : "ابتدا استان را انتخاب کنید"
          }
          onChange={handleCityChange}
          disabled={!formData.province}
        />
      </div>

      {/* ---------- دکمه ادامه ---------- */}
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
