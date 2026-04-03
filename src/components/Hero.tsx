import { MessageCircle, UserPlus } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#0A1446] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" style={{
      backgroundImage: 'url("/vecteezy_woman-praying-with-sky-backdrop-silhouette-concept_27447112.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1446]/85 via-[#0A1446]/80 to-[#1a2560]/85"></div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex flex-col items-center mb-8">
            <img
              src="/shalem_logo.png"
              alt="Shalem Logo"
              className="h-20 w-auto mb-3 bg-white rounded-lg p-2"
            />
            <h2 className="text-8xl font-bold text-white">Shalem</h2>
          </div>
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Find Clarity, Direction, and Growth <br className="hidden md:block" />
            Through Christian Mentorship
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect with trusted Christian mentors who guide you with wisdom,
            experience, and truth through a structured mentorship journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://forms.gle/75qqxQjGcgcWA51E9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E8B57] text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-[#267347] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2">
              <UserPlus className="w-5 h-5" />
              Apply for Mentorship
            </a>
            <a
              href="https://wa.me/2349038452437"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0A1446] px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto border border-white/20"
            >
              <MessageCircle className="w-5 h-5" />
              Ask Us A Question Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
