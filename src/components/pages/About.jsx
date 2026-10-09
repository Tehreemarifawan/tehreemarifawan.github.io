
import Footer from "../common/Footer";
import Header from "../common/Header";

function About() {
  return (
    <section className="w-full min-w-0">
      <Header />

      <h1 className="mx-4 mt-4 bg-blue-900 px-3 py-4 text-center text-3xl font-bold text-blue-300 sm:mx-6 sm:text-4xl lg:mx-8">
        About me
      </h1>

      {/* About Me */}
      <div className="mx-auto flex w-full max-w-[1420px] flex-col items-center gap-8 px-4 py-8 sm:gap-10 sm:px-6 sm:py-10 lg:flex-row lg:justify-between lg:gap-12 lg:px-10">
        {/* Profile Image */}
        <div className="flex w-full justify-center lg:w-auto lg:shrink-0">
          <img
            className="h-auto w-full max-w-[320px] rounded-lg object-cover sm:max-w-[400px] lg:h-[500px] lg:w-[480px] lg:max-w-none"
            src="/images/pic2.jpg"
            alt="Tehreem Arif Awan"
            loading="lazy"
          />
        </div>

        {/* About Text */}
        <div className="w-full min-w-0 lg:flex-1">
          <h2 className="text-2xl font-bold tracking-wide sm:text-3xl">
            Who am I?
          </h2>

          <p className="mt-5 break-words text-base leading-relaxed sm:mt-6 sm:text-lg lg:text-xl">
            I am Tehreem Arif Awan, a passionate Front end Developer based in
            Sargodha, Pakistan. I have done my BS in Software Engineering from
            University of Sargodha, Pakistan.
          </p>

          <p className="mt-5 break-words text-base leading-relaxed sm:text-lg lg:text-xl">
            Through some academic projects and extracurricular activities, I
            have developed a strong interest in the field of Web Development.
            My approach goes beyond just writing code. I focus on clean design,
            smooth interactions, performance, and attention to detail, making
            sure every element has a purpose and every experience feels
            polished.
          </p>

          <p className="mt-5 break-words text-base leading-relaxed sm:text-lg lg:text-xl">
            I’m constantly learning, experimenting, and pushing my skills
            further. For me, development isn’t just about building websites and
            apps; it’s about creating digital experiences that people
            remember.
          </p>
        </div>
      </div>

      {/* My Skills */}
      <section className="mx-auto w-full max-w-[1000px] px-4 py-8 sm:px-6 sm:py-10">
        <h2 className="mb-8 text-3xl font-medium text-[#25282d] sm:mb-10 sm:text-4xl">
          My Skills
        </h2>

        {/* HTML/CSS */}
        <div className="mb-9 sm:mb-12">
          <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
            <span className="text-lg font-semibold text-[#292d32] sm:text-2xl">
              HTML/CSS
            </span>
            <span className="shrink-0 text-lg font-semibold text-[#292d32] sm:text-2xl">
              97%
            </span>
          </div>
          <div
            className="h-[14px] w-full overflow-hidden rounded-full bg-gray-300 sm:h-[18px]"
            role="progressbar"
            aria-label="HTML/CSS skill level"
            aria-valuenow={97}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
          </div>
        </div>

        {/* JavaScript */}
        <div className="mb-9 sm:mb-12">
          <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
            <span className="text-lg font-semibold text-[#292d32] sm:text-2xl">
              JavaScript
            </span>
            <span className="shrink-0 text-lg font-semibold text-[#292d32] sm:text-2xl">
              89%
            </span>
          </div>
          <div
            className="h-[14px] w-full overflow-hidden rounded-full bg-gray-300 sm:h-[18px]"
            role="progressbar"
            aria-label="JavaScript skill level"
            aria-valuenow={89}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
          </div>
        </div>

        {/* React */}
        <div className="mb-9 sm:mb-12">
          <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
            <span className="text-lg font-semibold text-[#292d32] sm:text-2xl">
              React
            </span>
            <span className="shrink-0 text-lg font-semibold text-[#292d32] sm:text-2xl">
              80%
            </span>
          </div>
          <div
            className="h-[14px] w-full overflow-hidden rounded-full bg-gray-300 sm:h-[18px]"
            role="progressbar"
            aria-label="React skill level"
            aria-valuenow={80}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
          </div>
        </div>

        {/* MySQL */}
        <div className="mb-4">
          <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
            <span className="text-lg font-semibold text-[#292d32] sm:text-2xl">
              MySQL
            </span>
            <span className="shrink-0 text-lg font-semibold text-[#292d32] sm:text-2xl">
              90%
            </span>
          </div>
          <div
            className="h-[14px] w-full overflow-hidden rounded-full bg-gray-300 sm:h-[18px]"
            role="progressbar"
            aria-label="MySQL skill level"
            aria-valuenow={90}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}

export default About;

