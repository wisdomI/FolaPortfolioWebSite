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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6 text-center animate-fade-in px-4">Tech Community & Mentorship</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Building connections and supporting the next generation of cloud professionals.
        </p>

        {/* Community Intro */}
        <div className="relative bg-gray-900 dark:bg-surface-dark rounded-2xl p-12 mb-16 text-center overflow-hidden shadow-lg">
          <div className="absolute inset-0 z-0">
            <Image src="/pictures/OGM07879.jpg" alt="Community Background" className="w-full h-full object-cover object-center opacity-20" loading="lazy" />
            <div className="absolute inset-0 bg-black/80 dark:bg-surface-dark/90"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Empowering Tech Professionals</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
              I am passionate about giving back to the community through mentorship, knowledge sharing, and collaboration. Whether you're just starting in tech or looking to advance your DevOps career, let's connect.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8 text-white">
              <div>
                <div className="flex justify-center mb-4"><HandshakeIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-bold mb-2">Mentorship</h3>
                <p className="text-gray-300">Guiding aspiring engineers on their cloud and DevOps learning paths.</p>
              </div>
              <div>
                <div className="flex justify-center mb-4"><UsersIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-bold mb-2">Networking</h3>
                <p className="text-gray-300">Connecting with like-minded professionals to share ideas and opportunities.</p>
              </div>
              <div>
                <div className="flex justify-center mb-4"><BookOpenIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-bold mb-2">Knowledge Sharing</h3>
                <p className="text-gray-300">Speaking at events and creating content to demystify cloud technologies.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4 flex items-center gap-2"><SparklesIcon className="w-6 h-6 text-secondary" /> Connect on LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Follow me on LinkedIn for updates on my projects, certifications, and insights into the world of Cloud Engineering.
            </p>
            <ul className="list-none mb-6 space-y-2">
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Industry insights</li>
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Career advice</li>
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Tech discussions</li>
            </ul>
            <a href="https://www.linkedin.com/in/folashadeoluwaseun/" target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary dark:bg-secondary-dark text-center text-white border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-pink-700 dark:hover:bg-pink-600 w-full shadow-md font-playfair">
              Follow on LinkedIn
            </a>
          </div>

          <div className="bg-white dark:bg-surface-dark border-2 border-primary dark:border-primary-dark rounded-xl p-8 relative shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary dark:bg-primary-dark text-white dark:text-primary px-4 py-1 rounded-full text-sm font-semibold">
              Coming Soon
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4 flex items-center gap-2"><StarIcon className="w-6 h-6 text-secondary" /> Technical Workshops</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Stay tuned for upcoming workshops and hands-on sessions focused on practical DevOps skills.
            </p>
            <ul className="list-none mb-6 space-y-2">
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Hands-on labs</li>
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Real-world scenarios</li>
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Tool-specific training</li>
              <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Q&A sessions</li>
            </ul>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-none px-8 py-3 text-base font-semibold rounded-lg cursor-not-allowed w-full">
              Join Waitlist
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 dark:bg-surface-dark text-white dark:text-primary-dark rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Let's Grow Together</h2>
          <p className="text-lg mb-6 opacity-90">Join the network of professionals driving innovation.</p>
          <a href="https://www.linkedin.com/in/folashadeoluwaseun/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white dark:bg-primary text-primary dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-md font-playfair">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
