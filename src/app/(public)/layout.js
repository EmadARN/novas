import Footer from "@/shared/components/layout/Footer";
import Navbar from "@/shared/components/layout/Navbar";
import FooterWrapper from "@/shared/provider/FooterWrapper";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <FooterWrapper>{children}</FooterWrapper>
      <Footer />
    </>
  );
}
