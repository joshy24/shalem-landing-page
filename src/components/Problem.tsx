import { CheckCircle, MessageCircle, UserPlus } from 'lucide-react';

export default function Problem() {
  const challenges = [
    'Uncertain about major life decisions',
    'Lack wise counsel from experienced believers',
    'Struggling to align your path with God\'s will',
    'Facing transitions without clear direction',
  ];

  const categories = [
    'Education or What to Study',
    'Navigating Relationships (Friendships, Family, Church, Business)',
    'Relationship with God/Faith/Spirituality',
    'Finance/Career/Business',
    'Marriage, Dating and Courtship',
    'Depression and Mental Health',
    'My Life Purpose',
    'Family Issues',
    'Habits and Addictions',
    'Sex',
    'Self Esteem and Self Worth',
    'Past Trauma and Unforgiveness',
    'Understanding Womanhood',
    'Understanding Manhood',
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F0F9F6]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
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

        <div className="border-t border-[#2E8B57]/20 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1446] mb-4">
              Mentorship Categories
            </h3>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              Whether you're navigating education, relationships, faith, finances, mental health, or personal growth, we have experienced mentors ready to guide you through every area of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#2E8B57] rounded-lg p-6 hover:shadow-md transition-shadow duration-300 hover:border-[#267347]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E8B57] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-[#0A1446] font-medium text-base">{category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-20">
        <a 
              href="https://forms.gle/75qqxQjGcgcWA51E9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E8B57] text-white px-14 py-4 rounded-lg text-base font-medium hover:bg-[#267347] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2">
              <UserPlus className="w-5 h-5" />
              Get Started
            </a>
            <a
              href="https://wa.me/2349038452437"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A1446] text-[#FFFFFF] px-8 py-4 rounded-lg text-base font-medium transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Ask Us A Question
            </a>
        </div>

      </div>
    </section>
  );
}
