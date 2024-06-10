import Image from "next/image";
import NavBar from "../components/navBar";
import Posts from "../components/postsList";
import Footer from "../components/footer";

export default function Blog() {
  return (
    <div>
      <NavBar />
      <h1 className="px-[230px] py-[50px] text-4xl font-bold">Hello World!</h1>
      <Posts />
      <Footer />
    </div>
  );
}
Blog.displayName = "Blog";
