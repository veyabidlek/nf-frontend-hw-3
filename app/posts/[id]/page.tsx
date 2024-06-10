"use client";

import { useParams } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "@/app/components/navBar";
import Footer from "@/app/components/footer";
import Image from "next/image";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/posts/${id}`)
        .then((response) => {
          setPost(response.data);
          return axios.get(
            `https://dummyjson.com/users/${response.data.userId}`
          );
        })
        .then((response) => {
          setAuthor(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-black" />
      </div>
    );
  if (!post || !author) return <div>Post not found</div>;

  return (
    <div>
      <NavBar />
      <section className="relative py-28 ">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto ">
            <h3 className=" font-bold text-2xl pb-6">{post.title}</h3>
            <figure className="mb-10">
              <blockquote>
                <p className=" text-xl sm:text-2xl">{post.body}</p>
              </blockquote>
              <div className="mt-6">
                <img src={author.image} className="w-16 h-16 rounded-full" />
                <div className="mt-3">
                  <span className="block font-semibold">
                    {author.firstName} {author.lastName}
                  </span>
                  <span className="block text-sm mt-0.5">
                    {author.address.country}
                  </span>
                </div>
              </div>
            </figure>
            <a
              className=""
              href="/posts/ "
              className="inline-block py-1 px-3 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            >
              See Other Posts
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
PostPage.displayName = "PostPage";

export default PostPage;
