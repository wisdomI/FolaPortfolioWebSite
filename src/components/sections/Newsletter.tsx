import React from 'react';
import { 
  EnvelopeIcon,
  LightBulbIcon,
  BookOpenIcon,
  TargetIcon
} from '../Icons';
import Image from '../Image';

const Newsletter: React.FC = () => {
  return (
    <section className="pt-32 sm:pt-40 pb-16 px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
      <div className="max-w-container mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6 text-center animate-fade-in px-4">Newsletter & Articles</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Get weekly insights on growth, leadership, and tech — straight to your inbox.
        </p>

        {/* Newsletter Signup */}
        <div className="relative bg-gray-900 dark:bg-surface-dark rounded-2xl p-12 mb-16 text-center overflow-hidden shadow-lg">
          <div className="absolute inset-0 z-0">
            <Image src="/pictures/OGM07924.jpg" alt="Newsletter Background" className="w-full h-full object-cover object-center opacity-20" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-purple-900/90 dark:from-surface-dark/90 dark:to-black/90"></div>
          </div>
          <div className="relative z-10 text-white">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3"><EnvelopeIcon className="w-10 h-10" /> Unlocked Growth Newsletter</h2>
            <p className="text-lg mb-8 opacity-90">Join 2,500+ professionals who get actionable insights every Tuesday.</p>
            <div className="flex gap-2 max-w-md mx-auto mb-6">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-md text-base backdrop-blur-sm focus:bg-white/20 focus:border-white outline-none"
              />
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md font-playfair">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75">✨ Free. No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Recent Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Jan 2025</div>
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">Don't Limit Yourself: Breaking Through Career Ceilings</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Discover the 5 key strategies that helped hundreds of women in tech overcome barriers and accelerate their careers.
              </p>
              <button className="text-gray-700 dark:text-gray-300 font-semibold hover:text-primary dark:hover:text-primary-light hover:underline flex items-center gap-1 transition-colors">
                Read More <span className="text-xl">→</span>
              </button>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Dec 2024</div>
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">The Confidence Code for Women in Tech</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Practical tips for building unshakeable confidence in male-dominated spaces.
              </p>
              <button className="text-gray-700 dark:text-gray-300 font-semibold hover:text-primary dark:hover:text-primary-light hover:underline flex items-center gap-1 transition-colors">
                Read More <span className="text-xl">→</span>
              </button>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Nov 2024</div>
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">Leadership Lessons from Imposter Syndrome</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                How to turn self-doubt into your greatest leadership asset.
              </p>
              <button className="text-gray-700 dark:text-gray-300 font-semibold hover:text-primary dark:hover:text-primary-light hover:underline flex items-center gap-1 transition-colors">
                Read More <span className="text-xl">→</span>
              </button>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Oct 2024</div>
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">Personal Branding for Tech Professionals</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A step-by-step guide to building a brand that opens doors.
              </p>
              <button className="text-gray-700 dark:text-gray-300 font-semibold hover:text-primary dark:hover:text-primary-light hover:underline flex items-center gap-1 transition-colors">
                Read More <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* What You'll Get */}
        <div className="bg-light-gray dark:bg-light-gray-dark rounded-2xl p-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-8 text-center">What You'll Get in the Newsletter</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4"><LightBulbIcon className="w-12 h-12 text-secondary" /></div>
              <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-2">Weekly Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">Actionable tips on leadership, growth, and tech careers.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4"><BookOpenIcon className="w-12 h-12 text-secondary" /></div>
              <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-2">Exclusive Content</h3>
              <p className="text-gray-600 dark:text-gray-300">Resources, templates, and guides available only to subscribers.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4"><TargetIcon className="w-12 h-12 text-secondary" /></div>
              <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-2">Priority Access</h3>
              <p className="text-gray-600 dark:text-gray-300">First to know about workshops, events, and special offers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
