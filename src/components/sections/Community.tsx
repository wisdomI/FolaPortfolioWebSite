import React from 'react';
import { 
  HandshakeIcon,
  UsersIcon,
  BookOpenIcon,
  SparklesIcon,
  CheckCircleIcon,
  StarIcon,
  TargetIcon,
  LinkedinIcon
} from '../Icons';
import Image from '../Image';

const Community: React.FC = () => {
  return (
    <section className="pt-32 sm:pt-40 pb-16 px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
      <div className="max-w-container mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6 text-center animate-fade-in px-4">Giving Back to the Community</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Empowering women and young girls to thrive in tech and leadership.
        </p>

        {/* Community Intro */}
        <div className="relative bg-gray-900 dark:bg-surface-dark rounded-2xl p-12 mb-16 text-center overflow-hidden shadow-lg">
          <div className="absolute inset-0 z-0">
            <Image src="/pictures/OGM07879.jpg" alt="Community Background" className="w-full h-full object-cover object-center opacity-20" loading="lazy" />
            <div className="absolute inset-0 bg-black/80 dark:bg-surface-dark/90"></div>
          </div>
          <div className="relative z-10 text-white">
            <h2 className="text-3xl font-bold mb-6">A Purpose-Driven Journey</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
              Over the years, I’ve dedicated myself to building inclusive communities, mentoring aspiring professionals, and creating opportunities that spark growth. Through volunteering, leadership, and advocacy, I’ve made intentional efforts to drive real impact.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8 text-white">
              <div>
                <div className="flex justify-center mb-4"><HandshakeIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-bold mb-2">Community Building</h3>
                <p className="text-gray-300">Built and grew a tech community of over 1,000 women.</p>
              </div>
              <div>
                <div className="flex justify-center mb-4"><UsersIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-bold mb-2">Leadership</h3>
                <p className="text-gray-300">Led teams of passionate volunteers to execute high-impact events.</p>
              </div>
              <div>
                <div className="flex justify-center mb-4"><TargetIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-bold mb-2">Impact</h3>
                <p className="text-gray-300">Secured over ₦2 Million in sponsorships for community initiatives.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-8 text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4 flex items-center gap-2"><SparklesIcon className="w-6 h-6 text-secondary" /> STEM-a-Girl Program</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Coordinated the STEM-a-Girl Program across 5+ schools, impacting over 500 students.
              </p>
              <ul className="list-none space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Inspiring young girls to explore STEM careers.</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Delivering engaging and practical sessions.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4 flex items-center gap-2"><StarIcon className="w-6 h-6 text-secondary" /> Awards & Recognition</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Recognized for consistent impact and dedication to community development.
              </p>
              <ul className="list-none space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Awarded Chapter Excellence Lead.</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Featured on She Code Africa Wall of Fame (2023 & 2024).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-8 text-center">Community Moments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
             {/* Using existing images as placeholders for community events since specific ones weren't provided as files, but contextually fitting ones */}
            <div className="h-64 rounded-xl overflow-hidden shadow-lg group relative">
              <Image src="/pictures/OGM07913.jpg" alt="Community Event" className="w-full h-full object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                <p className="text-white font-semibold">Organizing Tech Events</p>
              </div>
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg group relative">
              <Image src="/pictures/OGM07828.jpg" alt="Speaking" className="w-full h-full object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                <p className="text-white font-semibold">Speaking at Summits</p>
              </div>
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg group relative">
              <Image src="/pictures/OGM07879.jpg" alt="Mentorship" className="w-full h-full object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                <p className="text-white font-semibold">Mentoring Sessions</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 dark:bg-surface-dark text-white dark:text-primary-dark rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg mb-6 opacity-90">Be part of a community that uplifts and empowers.</p>
          <a href="https://www.linkedin.com/in/folashadeoluwaseun/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white dark:bg-primary text-primary dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-md font-playfair flex items-center justify-center gap-2 max-w-xs mx-auto">
            <LinkedinIcon className="w-5 h-5" /> Connect with Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
