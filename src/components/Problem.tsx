import { CheckCircle } from 'lucide-react';

export default function Problem() {
  const challenges = [
    'Uncertain about major life decisions',
    'Lack wise counsel from experienced believers',
    'Struggling to align your path with God\'s will',
    'Facing transitions without clear direction',
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1446] mb-6 leading-tight">
              You Don't Have to Figure Everything Out Alone
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Many believers find themselves at crossroads without the guidance
              they need to make God-honoring decisions.
            </p>
          </div>

          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                <p className="text-[#0A1446] text-base md:text-lg">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
