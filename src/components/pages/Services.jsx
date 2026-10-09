
import Footer from "../common/Footer";
import Header from "../common/Header";

function Services() {
  return (
    <>
      <Header />

      <h1 className="mx-4 mt-4 bg-blue-900 px-3 py-4 text-center text-3xl font-bold text-blue-300 sm:mx-6 sm:text-4xl lg:mx-8">
        My Services
      </h1>

      <section className="mx-auto mt-10 mb-16 grid w-full max-w-[1320px] grid-cols-1 gap-6 px-4 sm:mt-12 sm:grid-cols-2 sm:gap-7 sm:px-6 lg:mt-16 lg:grid-cols-3 lg:gap-9 lg:px-8 lg:mb-25">
        {/* Responsive Web Development */}
        <div className="min-w-0 rounded-3xl bg-blue-100 p-6 transition duration-300 ease-in-out hover:-translate-y-2 sm:p-8 lg:p-10 lg:hover:-translate-y-5">
          <img
            className="mx-auto h-auto w-20 sm:w-24 lg:w-[100px]"
            src="/images/tag.png"
            alt="Responsive web development"
            loading="lazy"
          />
          <h2 className="mt-4 break-words text-center text-2xl font-bold sm:text-3xl">
            Responsive Web Development
          </h2>
          <p className="mt-5 break-words text-center text-lg sm:text-xl lg:text-2xl">
            Creating websites that work smoothly across desktop, tablet, and
            mobile.
          </p>
        </div>

        {/* Modern UI Development */}
        <div className="min-w-0 rounded-3xl bg-blue-100 p-6 transition duration-300 ease-in-out hover:-translate-y-2 sm:p-8 lg:p-10 lg:hover:-translate-y-5">
          <img
            className="mx-auto h-auto w-20 sm:w-24 lg:w-[100px]"
            src="/images/ui.png"
            alt="Modern UI development"
            loading="lazy"
          />
          <h2 className="mt-4 break-words text-center text-2xl font-bold sm:text-3xl">
            Modern UI Development
          </h2>
          <p className="mt-5 break-words text-center text-lg sm:text-xl lg:text-2xl">
            Clean, attractive interfaces built from designs or concepts.
          </p>
        </div>

        {/* React.js Development */}
        <div className="min-w-0 rounded-3xl bg-blue-100 p-6 transition duration-300 ease-in-out hover:-translate-y-2 sm:p-8 lg:p-10 lg:hover:-translate-y-5">
          <img
            className="mx-auto h-auto w-20 sm:w-24 lg:w-[100px]"
            src="/images/react.webp"
            alt="React.js development"
            loading="lazy"
          />
          <h2 className="mt-4 break-words text-center text-2xl font-bold sm:text-3xl">
            React.js Development
          </h2>
          <p className="mt-5 break-words text-center text-lg sm:text-xl lg:text-2xl">
            Interactive and scalable web applications using React.
          </p>
        </div>

        {/* Landing Page Development */}
        <div className="min-w-0 rounded-3xl bg-blue-100 p-6 transition duration-300 ease-in-out hover:-translate-y-2 sm:p-8 lg:p-10 lg:hover:-translate-y-5">
          <img
            className="mx-auto h-auto w-20 sm:w-24 lg:w-[100px]"
            src="/images/landing.png"
            alt="Landing page development"
            loading="lazy"
          />
          <h2 className="mt-4 break-words text-center text-2xl font-bold sm:text-3xl">
            Landing Page Development
          </h2>
          <p className="mt-5 break-words text-center text-lg sm:text-xl lg:text-2xl">
            High-converting landing pages for businesses, products, and
            campaigns.
          </p>
        </div>

        {/* Performance Optimization */}
        <div className="min-w-0 rounded-3xl bg-blue-100 p-6 transition duration-300 ease-in-out hover:-translate-y-2 sm:p-8 lg:p-10 lg:hover:-translate-y-5">
          <img
            className="mx-auto h-auto w-20 sm:w-24 lg:w-[100px]"
            src="/images/performance.png"
            alt="Website performance optimization"
            loading="lazy"
          />
          <h2 className="mt-4 break-words text-center text-2xl font-bold sm:text-3xl">
            Performance Optimization
          </h2>
          <p className="mt-5 break-words text-center text-lg sm:text-xl lg:text-2xl">
            Improving website speed, responsiveness, and overall performance.
          </p>
        </div>

        {/* API Integration */}
        <div className="min-w-0 rounded-3xl bg-blue-100 p-6 transition duration-300 ease-in-out hover:-translate-y-2 sm:p-8 lg:p-10 lg:hover:-translate-y-5">
          <img
            className="mx-auto h-auto w-20 sm:w-24 lg:w-[100px]"
            src="/images/api.png"
            alt="API integration"
            loading="lazy"
          />
          <h2 className="mt-4 break-words text-center text-2xl font-bold sm:text-3xl">
            API Integration
          </h2>
          <p className="mt-5 break-words text-center text-lg sm:text-xl lg:text-2xl">
            Connecting front-end applications with APIs and dynamic data.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;



