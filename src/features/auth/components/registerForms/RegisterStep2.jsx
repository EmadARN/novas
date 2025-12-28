"use client";

import Select from "react-select";
import { cities_all } from "../../constants";

export default function RegisterStep2({
  formData,
  setFormData,
  provinces,
  filteredCities,
  setFilteredCities,
}) {
  const handleProvinceChange = (opt) => {
    const province = opt?.value || "";
    setFormData((p) => ({ ...p, province, city: "" }));

    setFilteredCities(
      province
        ? cities_all.filter((c) => c.provinceName.includes(province))
        : cities_all
    );
  };

  const handleCityChange = (opt) => {
    setFormData((p) => ({ ...p, city: opt?.label || "" }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <Select
        value={provinces.find((p) => p.value === formData.province) || null}
        onChange={handleProvinceChange}
        options={provinces}
        placeholder="انتخاب استان"
        className="w-full"
      />

      <Select
        value={
          formData.city ? { value: formData.city, label: formData.city } : null
        }
        onChange={handleCityChange}
        options={filteredCities.map((c) => ({
          value: c.cityName,
          label: c.cityName,
        }))}
        placeholder="انتخاب شهر"
        className="w-full"
      />
    </div>
  );
}
