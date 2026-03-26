import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="apply" className="py-20 md:py-28 bg-[#0A1446]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Start Your Mentorship Journey
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Take the first step toward clarity, growth, and transformation. Apply
          today or reach out to learn more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://forms.gle/75qqxQjGcgcWA51E9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2E8B57] text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-[#267347] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
            Apply for Mentorship
          </a>
          <a
            href="https://wa.me/2349038452437"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0A1446] px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Ask Us A Question Now!
          </a>
        </div>
      </div>
    </section>
  );
}
