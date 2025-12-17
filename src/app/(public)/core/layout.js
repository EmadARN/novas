// import HomeHeader from "@/src/components/layout/homeHeader";
import Footer from "@/shared/components/layout/Footer";
import Navbar from "@/shared/components/layout/Navbar";

export const metadata = {
  title: "آکادمی نُوا",
  icons: {
    icon: "/logo.png",
  },
};

export default function PublicpagesLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <main
          style={{
            width: "100%",
            paddingBottom: "100px",
            margin: "0px",
            paddingTop: "4.5%",
          }}
        >
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
