import GradientButton from "@/shared/components/ui/Button";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <GradientButton href="/about" title="Go to About Page" />
    </div>
  );
};

export default page;
