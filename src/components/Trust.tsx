import { CheckCircle2 } from 'lucide-react';

export default function Trust() {
  const trustPoints = [
    {
      title: 'Vetted Mentors',
      description:
        'Every mentor is carefully selected based on character, experience, and spiritual maturity.',
    },
    {
      title: 'Confidential Experience',
      description:
        'Your conversations are private, safe, and held in complete confidence.',
    },
    {
      title: 'Structured Sessions',
      description:
        'Clear agendas and focused discussions ensure every session is purposeful and productive.',
    },
    {
      title: 'No Manipulation',
      description:
        'We honor your autonomy and journey, offering guidance without control or pressure.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1446] mb-6">
            A Safe & Trusted Space
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            We are committed to creating an environment of trust, respect, and
            genuine care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#2E8B57]/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#2E8B57]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0A1446] mb-2">
                  {point.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
