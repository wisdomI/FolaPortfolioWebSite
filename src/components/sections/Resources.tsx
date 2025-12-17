import React from 'react';
import { 
  BookOpenIcon,
  ClipboardIcon,
  BriefcaseIcon,
  ChartBarIcon
} from '../Icons';

interface ResourcesProps {
  setActiveSection: (section: string) => void;
}

const Resources: React.FC<ResourcesProps> = ({ setActiveSection }) => {
  return (
    <section className="pt-32 sm:pt-40 pb-16 px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
      <div className="max-w-container mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6 text-center animate-fade-in px-4">Resources & Freebies</h1>
        <p className="text-xl text-accent dark:text-accent-dark text-center mb-12 max-w-3xl mx-auto">
          Free guides, templates, and resources to help you unlock your growth potential.
        </p>

        {/* Featured Freebie */}
        <div className="bg-gradient-to-r from-gray-900 to-black dark:from-surface-dark dark:to-light-gray-dark text-white dark:text-primary-dark rounded-2xl p-12 mb-16 text-center shadow-lg">
          <div className="flex justify-center mb-4"><BookOpenIcon className="w-16 h-16" /></div>
          <h2 className="text-4xl font-bold mb-4">FREE Ebook: 5 Steps to Break Through Your Career Ceiling</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Download this comprehensive guide packed with actionable strategies to accelerate your career growth and overcome barriers.
          </p>
          <button className="bg-white dark:bg-primary text-primary dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-lg shadow-md font-playfair">
            Download Free Ebook
          </button>
        </div>

        {/* Other Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-8">Free Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
              <div className="flex justify-center mb-4"><ClipboardIcon className="w-10 h-10 text-secondary" /></div>
              <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3">Personal Brand Checklist</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">A step-by-step guide to building your professional brand.</p>
              <button className="text-primary dark:text-primary-light font-semibold hover:underline flex items-center justify-center gap-1 w-full">
                Download Free <span className="text-xl">→</span>
              </button>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
              <div className="flex justify-center mb-4"><BriefcaseIcon className="w-10 h-10 text-secondary" /></div>
              <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3">Leadership Skills Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Identify your strengths and areas for growth as a leader.</p>
              <button className="text-primary dark:text-primary-light font-semibold hover:underline flex items-center justify-center gap-1 w-full">
                Take Assessment <span className="text-xl">→</span>
              </button>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
              <div className="flex justify-center mb-4"><ChartBarIcon className="w-10 h-10 text-secondary" /></div>
              <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3">Career Planning Template</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Map out your career goals with this comprehensive template.</p>
              <button className="text-primary dark:text-primary-light font-semibold hover:underline flex items-center justify-center gap-1 w-full">
                Download Free <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Future Book Section */}
        <div className="bg-light-gray dark:bg-light-gray-dark rounded-2xl p-12 mb-16 text-center border border-gray-200">
          <div className="flex justify-center mb-4"><BookOpenIcon className="w-16 h-16 text-primary" /></div>
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-4">My Book (Coming Soon!)</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            I'm working on a book about breaking through career barriers and unlocking your full potential. Be the first to know when it launches!
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email for updates" 
              className="flex-1 px-4 py-3 bg-white dark:bg-surface-dark border border-primary/20 dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
            <button className="bg-secondary dark:bg-secondary-dark text-white border-none px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 dark:hover:bg-pink-600 transition-all duration-300 shadow-md font-playfair">
              Notify Me
            </button>
          </div>
        </div>

        {/* Paid Sessions Link */}
        <div className="bg-white dark:bg-surface-dark border-2 border-primary dark:border-primary-dark rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-4">Ready for 1:1 Support?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Book a coaching session for personalized guidance tailored to your goals.
          </p>
          <button 
            onClick={() => setActiveSection('services')}
            className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-8 py-4 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 shadow-md font-playfair"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;

