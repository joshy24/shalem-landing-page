import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2347040950917"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
