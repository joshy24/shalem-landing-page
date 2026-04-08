import { UserPlus, Users, Lightbulb } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Apply',
      description: 'Share your journey and what you\'re seeking guidance on.',
    },
    {
      icon: Users,
      title: 'Get Matched',
      description: 'We connect you with a mentor suited to your season and needs.',
    },
    {
      icon: Lightbulb,
      title: 'Begin Your Journey',
      description: 'Start your 4 to 8 week mentorship with clarity and purpose.',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 md:py-28 bg-white overflow-hidden" style={{
      backgroundImage: 'url("https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-white/95"></div>
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1446] mb-6">
            How It Works
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Getting started is simple. Follow these three steps to begin your
            transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#2E8B57] rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0A1446] rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto left-0 right-0 ml-auto mr-6">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#0A1446] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
