import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-Tehreem" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/my-projects" },
    { name: "Contact", path: "/contact-me" },
  ];

  return (
    <header className="w-full">
      <nav className="w-full border-b border-gray-200">
        <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 md:flex-nowrap lg:px-8">
          <Link
            to="/"
            className="flex min-w-0 items-center"
            onClick={() => setMenuOpen(false)}
          >
            <span className="whitespace-nowrap text-3xl font-bold text-blue-700 sm:text-4xl lg:text-5xl">
              Tehreem.
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m6 6 12 12M18 6 6 18"
                />
              ) : (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              )}
            </svg>
          </button>

          <div
            id="navbar-default"
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full min-w-0 md:block md:w-auto`}
          >
            <ul className="flex flex-col gap-1 rounded-lg py-2 font-medium md:flex-row md:items-center md:gap-6 md:py-0">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-base text-gray-800 transition-colors hover:bg-gray-100 hover:text-blue-700 md:px-0 md:py-2 md:text-lg md:hover:bg-transparent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;