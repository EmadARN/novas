export const Input = ({ label, inputMode, ...props }) => (
  <div className="flex flex-col py-2 sm:py-3">
    <label className="text-gray-700 mb-1 text-sm font-medium">{label}</label>
    <input
      {...props}
      inputMode={inputMode}
      className="w-full rounded-lg px-4 py-2 border border-gray-300 bg-white text-gray-800
                     focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all
                     placeholder-gray-400"
      placeholder={label}
      dir={inputMode === "numeric" ? "ltr" : "rtl"}
    />
  </div>
);
