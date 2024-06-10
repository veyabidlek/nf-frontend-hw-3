"use client";

export default function Footer() {
  const footerNavs = [
    {
      label: "Resources",
      items: [
        { href: "#", name: "Contact" },
        { href: "#", name: "Support" },
        { href: "#", name: "Documentation" },
        { href: "#", name: "Pricing" },
      ],
    },
    {
      label: "About",
      items: [
        { href: "#", name: "Terms" },
        { href: "#", name: "License" },
        { href: "#", name: "Privacy" },
        { href: "#", name: "About Us" },
      ],
    },
    {
      label: "Explore",
      items: [
        { href: "#", name: "Showcase" },
        { href: "#", name: "Roadmap" },
        { href: "#", name: "Languages" },
        { href: "#", name: "Blog" },
      ],
    },
    {
      label: "Company",
      items: [
        { href: "#", name: "Partners" },
        { href: "#", name: "Team" },
        { href: "#", name: "Careers" },
      ],
    },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-lg">
            <h3 className="text-2xl font-bold">
              Get our beautiful newsletter straight to your inbox.
            </h3>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-x-3 md:justify-end"
            >
              <div className="relative">
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-black active:shadow-none rounded-lg shadow">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 text-gray-600" key={idx}>
              <h4 className="text-gray-800 font-semibold sm:pb-2">
                {item.label}
              </h4>
              {item.items.map((el, subIdx) => (
                <li key={subIdx}>
                  <a
                    href={el.href}
                    className="hover:text-gray-800 duration-150"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <div className="flex items-center gap-x-6 text-gray-400 mt-6">
            <a href="#">
              <svg
                className="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="currentColor"
                    d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <g clipPath="url(#clip0_17_80)">
                  <path
                    fill="currentColor"
                    d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.86 9.86 0 007.906 9.666 9.87 9.87 0 01-4.449.169 9.86 9.86 0 009.207 6.845A19.775 19.775 0 010 38.58a27.904 27.904 0 0015.1 4.419"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_80">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M24 0C10.745 0 0 10.745 0 24c0 11.956 8.388 21.917 19.438 23.854v-16.87H13.9v-7.123h5.537v-4.893c0-5.623 3.34-8.726 8.456-8.726 2.448 0 5.003.437 5.003.437v5.503H30.34c-2.491 0-3.267 1.548-3.267 3.133v3.644h6.516l-1.041 7.123h-5.475v16.86C39.612 45.918 48 35.957 48 24 48 10.745 37.255 0 24 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-sm text-gray-500">
        © 2023 - Company Name. All rights reserved.
      </div>
    </footer>
  );
}
Footer.displayName = "Footer";
