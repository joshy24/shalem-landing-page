import { Shield, Calendar, Heart } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      icon: Shield,
      title: 'Vetted Mentors',
      description:
        'Connect with carefully selected Christian leaders who have proven character, wisdom, and experience.',
    },
    {
      icon: Calendar,
      title: 'Structured Journey',
      description:
        'Follow a clear 8-week path designed to bring clarity, direction, and transformation.',
    },
    {
      icon: Heart,
      title: 'Spirit-Led Guidance',
      description:
        'Receive counsel rooted in Scripture, prayer, and the leading of the Holy Spirit.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1446] mb-6">
            Mentorship That Transforms
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Experience guidance that honors God, values your journey, and brings
            lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#2E8B57]/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#2E8B57]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A1446] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
