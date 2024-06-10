import Image from "next/image";
import NavBar from "./components/NavBar";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Cta />
      <Footer />
    </div>
  );
}
Home.displayName = "Home";
