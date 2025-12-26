import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className=" flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)] ">
      {children}
    </div>
  );
};

export default AuthLayout;
