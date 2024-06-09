// app/posts/[id]/page.tsx
"use client"; // Mark the component as a client component

import { useRouter, useSearchParams } from "next/navigation"; // Use next/navigation
import axios from "axios";
import { useState, useEffect } from "react";

const PostPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Get the 'id' query parameter
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

  if (loading) return <div>Loading...</div>;

  if (!post || !author) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        by {author.firstName} {author.lastName}
      </p>
      <img
        src={author.image}
        alt={author.firstName}
        className="h-[30px] w-[30px] rounded-full"
      />
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
