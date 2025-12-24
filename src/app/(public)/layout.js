import FooterWrapper from "@/shared/provider/FooterWrapper";
import Footer from "@/shared/components/coreLayout/Footer";
import LoaderWrapper from "@/shared/provider/LoaderWrapper";
import Navbar from "@/shared/components/coreLayout/Navbar";

export default function PublicLayout({ children }) {
  return (
    <LoaderWrapper>
      <Navbar />
      <FooterWrapper>{children}</FooterWrapper>
      <Footer />
    </LoaderWrapper>
  );
}
