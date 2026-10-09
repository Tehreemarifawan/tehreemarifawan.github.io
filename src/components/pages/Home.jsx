
import Footer from "../common/Footer";
import Header from "../common/Header";

function Home() {
  return (
    <section className="w-full min-w-0">
      <Header />

      <div className="mx-auto mb-12 flex w-full max-w-screen-xl flex-col items-center gap-10 px-4 py-8 sm:px-6 sm:py-10 md:mb-16 md:px-8 lg:mb-20 lg:flex-row lg:justify-between lg:gap-8 lg:py-10">

        {/* Introduction */}
        <div className="relative top-0 w-full min-w-0 lg:flex-1">
          <h2 className="text-2xl text-blue-500 sm:text-3xl">
            Hello, I'm
          </h2>

          <h1 className="mt-3 break-words text-4xl font-bold text-black sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
            Tehreem Arif
          </h1>

          <h1 className="text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
            Awan
          </h1>

          <h2 className="mt-4 w-fit max-w-full break-words bg-blue-100 px-2 py-1 text-2xl text-blue-700 sm:mt-5 sm:text-3xl md:text-4xl lg:text-[40px]">
            Front-end Developer
          </h2>

          <h3 className="mt-5 w-full max-w-full break-words text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
            I transform ideas and designs into clean, intuitive interfaces
            that work seamlessly across devices. With a strong foundation
            in HTML5, CSS3, JavaScript, React and modern frontend
            technologies, I focus on both functionality and visual precision.
          </h3>
        </div>

        {/* Profile image */}
        <div className="flex w-full min-w-0 justify-center lg:w-auto lg:flex-1">
          <img
            className="h-auto w-full max-w-[320px] rounded-lg object-cover sm:max-w-[380px] lg:max-w-[460px]"
            src="/images/tehreem.jpg"
            alt="Tehreem Arif Awan"
          />
        </div>

      </div>

      <Footer />
    </section>
  );
}

export default Home;