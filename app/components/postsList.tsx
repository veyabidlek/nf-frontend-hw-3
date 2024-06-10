"use client";

import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts?limit=100")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=100")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const getAuthor = (userId) => {
    return users.find((user) => user.id === userId);
  };

  return (
    <section className="mt-12 max-w-screen-lg mx-auto px-4 md:px-8">
      <ul className="mt-12 space-y-6">
        {posts.map((post) => {
          const author = getAuthor(post.userId);
          if (!author) return null;

          return (
            <li
              key={post.id}
              className="p-5 bg-white border-b-[0.5px] border-gray"
            >
              <Link href={`/posts/${post.id}`}>
                <div>
                  <div className="flex gap-2 pb-[50px] items-center">
                    <img
                      src={author.image}
                      className="h-[30px] w-[30px] rounded-full"
                      alt={`${author.firstName} ${author.lastName}`}
                    />
                    <p>
                      {`${author.firstName} ${author.lastName}`}
                      <span className="text-gray-500"> in</span>{" "}
                      {post.tags[0].charAt(0).toUpperCase() +
                        post.tags[0].slice(1)}
                    </p>
                    <span className="pl-[20px] text-gray-500">{post.date}</span>
                  </div>
                  <div className="justify-between sm:flex">
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-black-600 pb-[20px]">
                        {post.title}
                      </h3>

                      <p className="text-gray-500 mt-2 pr-2">{post.body}</p>
                    </div>
                    <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                      <img
                        src={author.image}
                        className="h-[200px] w
                        [200px] overflow-hidden"
                        alt={`${author.firstName} ${author.lastName}`}
                      />
                    </div>
                  </div>
                  <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-10 sm:space-y-0">
                    <span className="flex items-center text-gray-500 bg-gray-200 text-black rounded-2xl py-1.5 px-3">
                      {post.views} views
                    </span>
                    <span className="flex items-center text-gray-500">
                      liked by {post.reactions.likes} people
                    </span>
                    <span className="flex items-center text-gray-500">
                      Selected for you
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
