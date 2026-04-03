export default function Journey() {
  const phases = [
    {
      weeks: 'Weeks 1-2',
      title: 'Understanding & Clarity',
      description:
        'Explore your current season, identify core challenges, and establish clear goals.',
    },
    {
      weeks: 'Weeks 3-4',
      title: 'Spiritual Alignment',
      description:
        'Align your desires with God\'s will through prayer, Scripture, and discernment.',
    },
    {
      weeks: 'Weeks 5-6',
      title: 'Strategy & Action',
      description:
        'Develop practical steps and actionable plans rooted in wisdom and truth.',
    },
    {
      weeks: 'Weeks 7-8',
      title: 'Growth & Consolidation',
      description:
        'Solidify your progress, celebrate growth, and prepare for sustained transformation.',
    },
  ];

  return (
    <section id="journey" className="py-20 md:py-28 bg-gradient-to-b from-[#FAFAFA] to-[#F0F9F6]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1446] mb-6">
            Your 8-Week Journey
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            A thoughtfully designed path that brings transformation through
            structured, intentional mentorship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#2E8B57] rounded-xl p-8 hover:shadow-lg hover:border-[#267347] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2E8B57] rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{index + 1}</span>
                </div>
                <span className="text-sm font-semibold text-[#2E8B57] uppercase tracking-wide">
                  {phase.weeks}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#0A1446] mb-3">
                {phase.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a 
              href="https://forms.gle/75qqxQjGcgcWA51E9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E8B57] text-white px-16 py-4 rounded-lg text-base font-medium hover:bg-[#267347] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
              Get started
            </a>
        </div>

      </div>
    </section>
  );
}
