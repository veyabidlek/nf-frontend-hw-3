import Image from "next/image";
import NavBar from "./components/navBar";
import Cta from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Cta />
      <Footer />
    </div>
  );
}
