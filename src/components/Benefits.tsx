import { Compass, Target, Sparkles, BookOpen } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Compass,
      title: 'Clear Direction',
      description: 'Gain clarity on major decisions and life transitions.',
    },
    {
      icon: Target,
      title: 'Focused Goals',
      description: 'Develop actionable plans aligned with your calling.',
    },
    {
      icon: Sparkles,
      title: 'Spiritual Growth',
      description: 'Deepen your relationship with God and His purposes.',
    },
    {
      icon: BookOpen,
      title: 'Biblical Wisdom',
      description: 'Receive counsel grounded in Scripture and truth.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F0F9F6]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1446] mb-6">
            What You Will Gain
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            This journey is designed to equip you with everything you need for
            lasting transformation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white border-2 border-[#2E8B57] rounded-xl flex items-center justify-center mx-auto mb-6 hover:shadow-lg transition-shadow duration-300">
                  <Icon className="w-8 h-8 text-[#2E8B57]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0A1446] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
