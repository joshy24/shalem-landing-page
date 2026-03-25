import { MessageCircle, Clock, CheckCircle } from 'lucide-react';

export default function UrgentQuestions() {
  return (
    <section className="py-20 md:py-28 bg-[#2E8B57]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Have Urgent Questions?
          </h2>
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Reach out to us on WhatsApp with any pressing questions or concerns. We'll direct your inquiry to the best mentor on our team, and you'll receive a thoughtful response within 24 hours.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Direct Message
              </h3>
              <p className="text-white/80 text-sm">
                Send your question via WhatsApp anytime
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Quick Routing
              </h3>
              <p className="text-white/80 text-sm">
                We match your question to the right mentor
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                24-Hour Response
              </h3>
              <p className="text-white/80 text-sm">
                Get guidance within 24 hours
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/2347040950917"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#2E8B57] px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Talk To Us Now!
          </a>
        </div>
      </div>
    </section>
  );
}
