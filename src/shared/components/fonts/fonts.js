import localFont from "next/font/local";

export const vazir = localFont({
  src: [
    {
      path: "../../../../public/fonts/Vazir.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/Vazir-Medium-FD.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/Vazir-Bold-FD.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
