
import Footer from "@/shared/components/coreLayout/Footer";
import Navbar from "@/shared/components/coreLayout/Navbar";
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
