
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-3 w-full max-w-full overflow-x-clip bg-black text-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-10">

          {/* Brand */}
          <div className="min-w-0 md:max-w-sm">
            <Link to="/" className="inline-block">
              <span className="block whitespace-nowrap text-3xl font-semibold text-green-300 sm:text-4xl">
                Tehreem.
              </span>
            </Link>

            <p className="mt-4 text-lg text-white sm:text-xl">
              “Where Code Meets Creativity”
            </p>
          </div>

          {/* Footer information */}
          <div className="grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10">

            {/* Contact info */}
            <div className="min-w-0">
              <h2 className="mb-4 text-lg font-bold uppercase sm:mb-6">
                Contact info
              </h2>

              <ul className="space-y-4 text-green-200">
                <li className="flex min-w-0 items-start gap-2">
                  <CiLocationOn className="mt-0.5 h-6 w-6 shrink-0" />
                  <span className="break-words text-base sm:text-lg">
                    Sargodha, Pakistan
                  </span>
                </li>

                <li className="flex min-w-0 items-start gap-2">
                  <MdEmail className="mt-0.5 h-6 w-6 shrink-0" />
                  <span className="break-all text-sm sm:text-base">
                    tehreemarifawan@gmail.com
                  </span>
                </li>
              </ul>
            </div>

            {/* Quick links */}
            <div className="min-w-0">
              <h2 className="mb-4 text-lg font-bold uppercase sm:mb-6">
                Quick Links
              </h2>

              <ul className="space-y-3 text-base font-medium text-green-200 sm:text-lg">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about-Tehreem" className="hover:underline">
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/my-projects" className="hover:underline">
                    Projects
                  </Link>
                </li>

                <li>
                  <Link to="/contact-me" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="my-6 border-gray-700 lg:my-8" />

        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="text-sm text-gray-300">
            © 2026{" "}
            <Link to="/" className="hover:underline">
              Tehreem Arif Awan
            </Link>
            . All Rights Reserved. Designed with ♥
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;