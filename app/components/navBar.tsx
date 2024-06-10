"use client";

import { useState } from "react";
import Image from "next/image";
export default function NavBar() {
  const [state, setState] = useState(false);
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/posts" },
    { title: "Features", path: "#" },
    { title: "Get in touch", path: "#" },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/2560px-Medium_%28website%29_logo.svg.png"
              width={120}
              height={50}
              alt="Medium logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-700 hover:text-gray-900">
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a
            href="#"
            className="py-3 px-4 text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
NavBar.displayName = "NavBar";
