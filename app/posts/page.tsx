import Image from "next/image";
import NavBar from "../components/navBar";
import Posts from "../components/postsList";

export default function Blog() {
  return (
    <div>
      <NavBar />
      <h1 className="px-[230px] py-[50px] text-4xl font-bold">Hello World!</h1>
      <Posts />
    </div>
  );
}
