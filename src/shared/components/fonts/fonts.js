import localFont from "next/font/local";

export const vazir = localFont({
  src: [
    {
      path: "/fonts/Vazir.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Vazir-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Vazir-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
