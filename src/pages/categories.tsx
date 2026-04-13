import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import {
  BookOpen,
  Heart,
  Lightbulb,
  Briefcase,
  Brain,
  Target,
  Smile,
  Users,
  Zap,
  Lock,
  Sparkles,
  Shield,
  AlertCircle,
} from 'lucide-react';
import categoriesData from '../data/categories.json';

interface Category {
  id: string;
  name: string;
  order: number;
  use_cases: string[];
}

const categoryIcons: Record<number, React.ReactNode> = {
  1: <BookOpen className="w-8 h-8" />,
  2: <Heart className="w-8 h-8" />,
  3: <Lightbulb className="w-8 h-8" />,
  4: <Briefcase className="w-8 h-8" />,
  5: <Brain className="w-8 h-8" />,
  6: <Target className="w-8 h-8" />,
  7: <Smile className="w-8 h-8" />,
  8: <Users className="w-8 h-8" />,
  9: <Zap className="w-8 h-8" />,
  10: <Lock className="w-8 h-8" />,
  11: <Sparkles className="w-8 h-8" />,
  12: <Shield className="w-8 h-8" />,
  13: <AlertCircle className="w-8 h-8" />,
};

const categoryColors: Record<number, { bg: string; text: string; accent: string }> = {
  1: { bg: 'from-blue-50 to-cyan-50', text: 'text-blue-900', accent: 'text-blue-600' },
  2: { bg: 'from-rose-50 to-pink-50', text: 'text-rose-900', accent: 'text-rose-600' },
  3: { bg: 'from-purple-50 to-violet-50', text: 'text-purple-900', accent: 'text-purple-600' },
  4: { bg: 'from-emerald-50 to-teal-50', text: 'text-emerald-900', accent: 'text-emerald-600' },
  5: { bg: 'from-orange-50 to-amber-50', text: 'text-orange-900', accent: 'text-orange-600' },
  6: { bg: 'from-yellow-50 to-lime-50', text: 'text-yellow-900', accent: 'text-yellow-600' },
  7: { bg: 'from-fuchsia-50 to-rose-50', text: 'text-fuchsia-900', accent: 'text-fuchsia-600' },
  8: { bg: 'from-sky-50 to-blue-50', text: 'text-sky-900', accent: 'text-sky-600' },
  9: { bg: 'from-red-50 to-orange-50', text: 'text-red-900', accent: 'text-red-600' },
  10: { bg: 'from-indigo-50 to-blue-50', text: 'text-indigo-900', accent: 'text-indigo-600' },
  11: { bg: 'from-pink-50 to-rose-50', text: 'text-pink-900', accent: 'text-pink-600' },
  12: { bg: 'from-slate-50 to-gray-50', text: 'text-slate-900', accent: 'text-slate-600' },
  13: { bg: 'from-amber-50 to-orange-50', text: 'text-amber-900', accent: 'text-amber-600' },
};

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(categoriesData[0] || null);

  const colors = selectedCategory ? categoryColors[selectedCategory.order] : categoryColors[1];
  const icon = selectedCategory ? categoryIcons[selectedCategory.order] : categoryIcons[1];

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navigation />

      <div className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-[#0A1446]">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'url(/vecteezy_woman-praying-with-sky-backdrop-silhouette-concept_27447112.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Ways We Can Help
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Explore life categories where our mentors provide thoughtful guidance and support
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative z-20">
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-2">
                {categoriesData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                      selectedCategory?.id === category.id
                        ? 'bg-[#2E8B57] text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{category.order}</span>
                      <span className="text-sm">{category.name.split('(')[0].trim()}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              {selectedCategory && (
                <div className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200`}>
                  <div className="flex items-start gap-4 mb-8">
                    <div className={`p-4 rounded-xl bg-white shadow-md ${colors.accent}`}>
                      {icon}
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${colors.accent} bg-white/70`}>
                        Category {selectedCategory.order} of {categoriesData.length}
                      </span>
                      <h2 className={`text-3xl md:text-4xl font-bold ${colors.text}`}>
                        {selectedCategory.name}
                      </h2>
                    </div>
                  </div>

                  <div className={`mb-8 p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80`}>
                    <h3 className={`text-lg font-semibold ${colors.text} mb-4`}>
                      Scenarios We Can Help With:
                    </h3>
                    <ul className="space-y-3">
                      {selectedCategory.use_cases && selectedCategory.use_cases.length > 0 ? (
                        selectedCategory.use_cases.map((useCase, index) => (
                          <li key={index} className={`flex gap-3 ${colors.text}`}>
                            <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${colors.text}/70 ${colors.accent.replace('text-', 'bg-')}`}>
                              {index + 1}
                            </span>
                            <span className="text-sm leading-relaxed">{useCase}</span>
                          </li>
                        ))
                      ) : (
                        <p className={`text-sm ${colors.text}/70`}>No specific use cases listed for this category.</p>
                      )}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://wa.me/2347040950917"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 rounded-lg font-semibold text-center transition-all duration-200 shadow-lg hover:shadow-xl bg-[#2E8B57] text-white hover:opacity-90"
                    >
                      Get Help Now
                    </a>
                    <a
                      href="https://forms.gle/75qqxQjGcgcWA51E9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 rounded-lg font-semibold text-center transition-all duration-200 border-2 border-[#0A1446] text-[#0A1446] hover:bg-[#0A1446]/5"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
