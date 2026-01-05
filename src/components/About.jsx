export default function About() {
  const trustReasons = [
    {
      title: "Proven Track Record",
      description:
        "Over a decade of real market experience built on disciplined execution and capital-focused strategies.",
    },
    {
      title: "Risk-First Approach",
      description:
        "Every strategy prioritizes capital protection before profit, ensuring long-term sustainability.",
    },
    {
      title: "Clear & Structured Systems",
      description:
        "Clients work with rule-based frameworks that remove guesswork and emotional decision-making.",
    },
  ];

  return (
    <section
      className="bg-white px-6 md:px-20 py-24 scroll-mt-28"
      id="about"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start max-w-7xl mx-auto">
        
        {/* LEFT — ABOUT TEXT */}
        <div>
          <p className="text-emerald-600 font-medium mb-2">
            Who I Am
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            About Me{" "}
            <span className="text-slate-400 text-lg">(she/her)</span>
          </h2>

          <p className="text-slate-600 leading-7 md:leading-relaxed mb-6 text-left md:text-justify">
            Hi, I’m{" "}
            <span className="font-medium text-slate-800">
              Sophia Lawson
            </span>
            , a professional forex trader and business strategist with over
            10 years of experience in global financial markets. My work
            sits at the intersection of currency trading, risk management,
            and strategic business growth.
          </p>

          <p className="text-slate-600 leading-7 md:leading-relaxed mb-6 text-left md:text-justify">
            For me, trading isn’t about gambling or shortcuts — it’s about
            structure, probability, and disciplined execution. I help
            clients understand market behavior, protect capital, and grow
            consistently using proven forex strategies tailored to their
            goals and risk tolerance.
          </p>

          <p className="text-slate-600 leading-7 md:leading-relaxed text-left md:text-justify">
            Beyond trading, I advise entrepreneurs and investors on how to
            integrate forex into broader business and wealth strategies,
            ensuring financial decisions are aligned with long-term
            sustainability — not short-term hype.
          </p>
        </div>

        {/* RIGHT — WHY CLIENTS TRUST ME */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Why Clients Trust Me
          </h3>

          <p className="text-slate-600 mb-8">
            Built on consistency, clarity, and long-term thinking.
          </p>

          <div className="grid gap-6">
            {trustReasons.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100
                shadow-sm hover:shadow-md hover:-translate-y-1
                transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-emerald-500" />

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
