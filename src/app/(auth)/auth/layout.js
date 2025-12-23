import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className=" flex items-center justify-center w-full h-full bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)] rounded-b-xl">
      {children}
    </div>
  );
};

export default AuthLayout;
