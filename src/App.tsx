/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BookOpen, Monitor, Star, Mail, Phone, Clock, ChevronLeft, Menu, X } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-800 font-sans selection:bg-green-200 selection:text-green-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-green-700"
          >
            أكاديمية العباقرة
          </motion.h1>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {['من نحن', 'المميزات', 'الدورات', 'تواصل معنا'].map((item, i) => (
              <motion.a 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${['about', 'features', 'courses', 'contact'][i]}`} 
                className="hover:text-green-700 transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-green-700">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-t border-green-100 py-4 px-6 flex flex-col gap-4 text-right"
          >
            {['من نحن', 'المميزات', 'الدورات', 'تواصل معنا'].map((item, i) => (
              <a 
                key={item}
                href={`#${['about', 'features', 'courses', 'contact'][i]}`} 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-green-700 transition py-2"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              تعليم القرآن الكريم عن بُعد
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
              تعلّم القرآن الكريم بسهولة واحترافية مع
              <span className="text-green-700 block mt-2"> أكاديمية العباقرة</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              نقدم تجربة تعليمية متكاملة للأطفال والطلاب بداية من عمر 10 سنوات عبر الإنترنت باستخدام Google Meet أو أي منصة تعليمية مناسبة، مع معلمين متخصصين وخطط تعليمية سهلة وممتعة.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-green-200 transition-all hover:scale-105 active:scale-95">
                ابدأ الآن
              </button>
              <button className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:scale-105 active:scale-95">
                مشاهدة التفاصيل
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-green-100 rounded-3xl -z-10 blur-2xl opacity-50"></div>
            <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-10 border border-green-50">
              <div className="space-y-6">
                {[
                  { title: "تعليم مباشر أونلاين", desc: "حصص مباشرة عبر Google Meet مع تفاعل كامل بين المعلم والطالب.", icon: <Monitor className="text-green-700" /> },
                  { title: "مناسبة للأطفال +10", desc: "برامج تعليمية مبسطة تناسب جميع المستويات والأعمار بداية من 10 سنوات.", icon: <Star className="text-green-700" /> },
                  { title: "سهولة التعلم والمتابعة", desc: "أسلوب تدريسي حديث يساعد الطلاب على الحفظ والتلاوة بطريقة سهلة وممتعة.", icon: <BookOpen className="text-green-700" /> }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-green-50/50 rounded-2xl p-6 flex gap-4 items-start"
                  >
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-green-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700">من نحن</h2>
              <div className="w-20 h-1.5 bg-green-200 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                أكاديمية العباقرة هي منصة تعليمية متخصصة في تعليم القرآن الكريم عن بُعد، تهدف إلى توفير بيئة تعليمية آمنة وسهلة تساعد الطلاب على تعلم التلاوة والحفظ والتجويد بإشراف نخبة من المعلمين المؤهلين.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-green-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">لماذا تختار أكاديمية العباقرة؟</h2>
              <p className="text-gray-600 text-lg">تعليم احترافي بطريقة سهلة ومناسبة لجميع الطلاب.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "تعليم التجويد", desc: "شرح مبسط لقواعد التجويد مع تطبيق عملي مباشر.", icon: "📖" },
                { title: "تعليم أونلاين", desc: "إمكانية حضور الدروس من أي مكان بسهولة تامة.", icon: "💻" },
                { title: "متابعة مستمرة", desc: "تقارير دورية لمتابعة مستوى الطالب وتقدمه.", icon: "⭐" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-10 shadow-xl shadow-green-900/5 hover:translate-y-[-8px] transition-all duration-300 border border-green-50"
                >
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-green-900">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">الدورات التعليمية</h2>
              <p className="text-gray-600 text-lg">برامج تعليمية تناسب جميع المستويات.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "حفظ القرآن", desc: "برنامج متدرج لحفظ القرآن الكريم بطريقة منظمة ومتابعة يومية." },
                { title: "التجويد", desc: "تعلم قواعد التجويد الصحيحة مع تطبيق عملي مباشر." },
                { title: "تحسين التلاوة", desc: "تطوير مهارات القراءة الصحيحة والنطق السليم للآيات." }
              ].map((course, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group border border-green-100 rounded-[2rem] p-10 hover:border-green-300 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 bg-white"
                >
                  <h3 className="text-3xl font-bold mb-6 text-green-900 group-hover:text-green-700 transition-colors">{course.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {course.desc}
                  </p>
                  <button className="w-full bg-green-700 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-800 transition-all flex items-center justify-center gap-2 group/btn">
                    التسجيل
                    <ChevronLeft className="w-5 h-5 transition-transform group-hover/btn:-translate-x-1" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-green-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-800 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">ابدأ رحلة تعلم القرآن اليوم</h2>
              <p className="text-xl leading-relaxed mb-10 text-green-50">
                انضم إلى أكاديمية العباقرة واستفد من تعليم احترافي عن بُعد يناسب جميع الطلاب. نحن هنا لنأخذ بيدك نحو الإتقان.
              </p>
              <button className="bg-white text-green-700 hover:bg-green-50 px-12 py-5 rounded-2xl text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl">
                سجل الآن مجاناً
              </button>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">تواصل معنا</h2>
            <p className="text-gray-600 text-xl mb-16">
              يسعدنا الرد على جميع استفساراتكم ومساعدتكم في اختيار البرنامج المناسب.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "البريد الإلكتروني", content: "info@geniusesacademy.com", icon: <Mail className="w-8 h-8 text-green-700" /> },
                { title: "واتساب", content: "+966 5X XXX XXXX", icon: <Phone className="w-8 h-8 text-green-700" /> },
                { title: "أوقات العمل", content: "يومياً من 9 صباحاً حتى 10 مساءً", icon: <Clock className="w-8 h-8 text-green-700" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-green-50/50 rounded-3xl p-8 hover:bg-green-50 transition-colors"
                >
                  <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-green-900">{item.title}</h3>
                  <p className="text-gray-600 font-medium">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg mb-4 font-bold text-gray-200">أكاديمية العباقرة</p>
          <p className="mb-6">لتحفيظ القرآن الكريم وعلوم التجويد</p>
          <div className="w-full h-px bg-gray-900 mb-8"></div>
          <p className="text-sm">© {new Date().getFullYear()} أكاديمية العباقرة - جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}

