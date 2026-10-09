
import Footer from "../common/Footer";
import Header from "../common/Header";

const projects = [
  {
    title: "Food Delivery Website",
    description: "HTML, CSS, JavaScript",
    image: "/images/food.webp",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Quote Generator Website",
    description: "HTML, CSS, JavaScript",
    image: "/images/quote.webp",
    tags: ["HTML5", "CSS3", "Javascript"],
  },
  {
    title: "Portfolio Website",
    description: "HTML, Tailwind CSS, React",
    image: "/images/portfolio.jpeg",
    tags: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Weather App",
    description: "HTML, CSS, JavaScript",
    image: "/images/weather.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Gaming Website",
    description: "HTML, CSS, JavaScript",
    image: "/images/game.jpeg",
    tags: ["HTML5", "CSS3", "JavaScipt"],
  },
  {
    title: "Quiz App",
    description: "HTML, CSS, JavaScript",
    image: "/images/quiz.jpeg",
    tags: ["HTML5", "CSS3", "Javascript"],
  },
];

function Projects() {
  return (
    <section className="w-full min-w-0">
      <Header />

      <section className="mx-auto w-full max-w-[2080px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <h1 className="mx-auto mt-2 w-full bg-blue-900 px-3 py-4 text-3xl font-bold text-blue-300 sm:text-4xl">
            My Projects
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-500 sm:mt-6 sm:text-base">
            A collection of projects I've built recently using modern web
            technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[18px]">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group min-w-0 overflow-hidden rounded-xl bg-[#f8f9fa] shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.13)]"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="px-4 py-4 sm:px-[18px] sm:py-[17px]">
                <h3 className="mb-2 break-words text-lg font-semibold text-[#292d32] sm:text-xl">
                  {project.title}
                </h3>

                <p className="mb-4 break-words text-sm text-gray-500 sm:text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.title}-${tag}-${index}`}
                      className="max-w-full break-words rounded-[4px] bg-blue-500 px-2 py-[3px] text-xs font-semibold text-white sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <button
            type="button"
            className="flex max-w-full items-center justify-center gap-3 rounded-md border border-blue-500 px-4 py-3 text-sm font-medium text-blue-600 transition-all duration-300 hover:bg-blue-500 hover:text-white sm:px-5"
          >
            View All Projects
            <span className="text-lg leading-none">⊙</span>
          </button>
        </div>
      </section>

      <Footer />
    </section>
  );
}

export default Projects;

