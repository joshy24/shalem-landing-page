import { CheckCircle2, Shield, Mic } from 'lucide-react';

export default function Trust() {
  const trustPoints = [
    {
      icon: CheckCircle2,
      title: 'Vetted Mentors',
      description:
        'Every mentor is carefully selected based on character, experience, and spiritual maturity.',
    },
    {
      icon: CheckCircle2,
      title: 'Confidential Experience',
      description:
        'Your conversations are private, safe, and held in complete confidence.',
    },
    {
      icon: CheckCircle2,
      title: 'Structured Sessions',
      description:
        'Clear agendas and focused discussions ensure every session is purposeful and productive.',
    },
    {
      icon: CheckCircle2,
      title: 'No Manipulation',
      description:
        'We honor your autonomy and journey, offering guidance without control or pressure.',
    },
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: 'Complete Anonymity',
      description:
        'People can remain anonymous while sending in their applications or questions.',
    },
    {
      icon: Mic,
      title: 'No Recording Policy',
      description:
        'Mentees won\'t be recorded in any circumstance. We don\'t record sessions.',
    },
  ];

  return (
    <section id="trust" className="py-20 md:py-28 bg-gradient-to-b from-[#F0F9F6] to-white">
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="flex gap-4 bg-white rounded-lg p-6 border border-[#E5E7EB] hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#2E8B57]/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#2E8B57]" />
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
            );
          })}
        </div>

        <div className="border-t border-[#2E8B57]/20 pt-12">
          <h3 className="text-2xl font-bold text-[#0A1446] mb-8 text-center">
            Your Privacy & Security
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4 bg-gradient-to-br from-[#F0F9F6] to-white rounded-lg p-8 border-2 border-[#2E8B57]/30">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#2E8B57] rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A1446] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
