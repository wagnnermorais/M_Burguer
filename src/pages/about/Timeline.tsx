import { timeline } from "../api/db/Timeline";

export default function Timeline() {
  return (
    <section className="relative mb-12">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-400 h-full z-0"></div>
      <div className="relative z-10">
        {timeline.map((year, index) => (
          <div
            key={year.id}
            className={`flex flex-col md:flex-row items-start md:items-center relative mb-0 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div
              className={`w-full md:w-1/2 flex flex-col shadow-lg ${
                index % 2 === 0
                  ? "items-start text-left md:pr-8 pr-8"
                  : "items-end text-right md:pl-8 pl-8"
              }`}
            >
              <div className="p-6 text-justify rounded-lg bg-white text-black">
                <h3
                  className={`text-xl font-bold tracking-tighter mb-2 ${
                    index % 2 === 0
                      ? "items-start text-left"
                      : "items-end text-right"
                  }`}
                >
                  {year.year}
                </h3>
                <p>{year.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
