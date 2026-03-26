import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A1446] border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex flex-col items-start mb-4">
              <img
                src="/shalem_logo.png"
                alt="Shalem Logo"
                className="h-16 w-auto bg-white rounded-lg p-2 mb-2"
              />
              <h3 className="text-2xl font-bold text-white">Shalem</h3>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md">
              Connecting believers with trusted Christian mentors for guidance,
              clarity, and transformation through structured 8-week journeys.
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-white/70 mb-3 text-sm">Get in touch</p>
            <a
              href="https://wa.me/2349038452437"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-[#2E8B57] transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Shalem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
