import React from 'react';
import { 
  HandshakeIcon,
  UsersIcon,
  BookOpenIcon,
  SparklesIcon,
  CheckCircleIcon,
  StarIcon
} from '../Icons';
import Image from '../Image';

const Community: React.FC = () => {
  return (
    <section className="pt-32 sm:pt-40 pb-16 px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
      <div className="max-w-container mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6 text-center animate-fade-in px-4">Join Our Community</h1>
        <p className="text-xl text-accent dark:text-accent-dark text-center mb-12 max-w-3xl mx-auto">
          A supportive space for women in tech & professionals unlocking growth — where we rise together.
        </p>

        {/* Community Intro */}
        <div className="relative bg-primary dark:bg-surface-dark rounded-2xl p-12 mb-16 text-center overflow-hidden shadow-lg">
          <div className="absolute inset-0 z-0">
            <Image src="/pictures/OGM07879.jpg" alt="Community Background" className="w-full h-full object-cover object-center opacity-20" loading="lazy" />
            <div className="absolute inset-0 bg-primary/80 dark:bg-surface-dark/90"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Why Join Our Community?</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
              You don't have to navigate your career journey alone. Our community is a safe space where ambitious women in tech and professionals connect, learn, and grow together.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8 text-white">
              <div>
                <div className="flex justify-center mb-4"><HandshakeIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-bold mb-2">Peer Support</h3>
                <p className="text-gray-300">Connect with like-minded professionals facing similar challenges.</p>
              </div>
              <div>
                <div className="flex justify-center mb-4"><UsersIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-bold mb-2">Monthly Meetups</h3>
                <p className="text-gray-300">Virtual and in-person gatherings for networking and learning.</p>
              </div>
              <div>
                <div className="flex justify-center mb-4"><BookOpenIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-bold mb-2">Exclusive Resources</h3>
                <p className="text-gray-300">Access to templates, guides, and community-only content.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-surface-dark border border-primary/20 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4 flex items-center gap-2"><SparklesIcon className="w-6 h-6 text-secondary" /> Free Community (LinkedIn)</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Follow me on LinkedIn for daily insights, discussions, and connection with our growing community of professionals.
            </p>
            <ul className="list-none mb-6 space-y-2">
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Daily leadership tips</li>
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Live Q&A sessions</li>
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Networking opportunities</li>
            </ul>
            <button className="bg-secondary dark:bg-secondary-dark text-white border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-pink-700 dark:hover:bg-pink-600 w-full shadow-md font-playfair">
              Follow on LinkedIn
            </button>
          </div>

          <div className="bg-white dark:bg-surface-dark border-2 border-primary dark:border-primary-dark rounded-xl p-8 relative shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary dark:bg-primary-dark text-white dark:text-primary px-4 py-1 rounded-full text-sm font-semibold">
              Coming Soon
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4 flex items-center gap-2"><StarIcon className="w-6 h-6 text-secondary" /> Premium Community</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join our exclusive membership for deeper connections, masterclasses, and personalized support.
            </p>
            <ul className="list-none mb-6 space-y-2">
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Monthly group coaching</li>
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Exclusive masterclasses</li>
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Private Slack community</li>
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Priority support</li>
            </ul>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-none px-8 py-3 text-base font-semibold rounded-lg cursor-not-allowed w-full">
              Join Waitlist
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary dark:bg-surface-dark text-white dark:text-primary-dark rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect & Grow?</h2>
          <p className="text-lg mb-6 opacity-90">Join our community and be part of something bigger.</p>
          <button className="bg-white dark:bg-primary text-primary dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-md font-playfair">
            Connect with Us on LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;

