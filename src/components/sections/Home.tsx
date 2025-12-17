import React, { useState, useEffect } from 'react';
import { 
  BriefcaseIcon, 
  MicrophoneIcon, 
  UsersIcon, 
  StarIcon, 
  GiftIcon, 
  EnvelopeIcon 
} from '../Icons';
import Image from '../Image';

interface HomeProps {
  setActiveSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    '/pictures/OGM07858.jpg',
    '/pictures/OGM07828.jpg',
    '/pictures/OGM07913.jpg',
    '/pictures/OGM07796.jpg',
    '/pictures/OGM07929.jpg'
  ];

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section 
        className="relative h-screen min-h-[600px] w-full flex items-center justify-center bg-cover bg-[50%_25%] bg-no-repeat bg-fixed transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url('${heroImages[currentHeroIndex]}')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 mix-blend-multiply z-0 transition-all duration-1000"></div>
        
        <div className="relative z-10 max-w-container mx-auto px-8 md:px-16 text-center animate-fade-in pt-32 sm:pt-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            I Help Women in Tech & Professionals<br className="hidden sm:block" />
            <span className="block sm:inline"> </span>Unlock Growth — <span className="text-secondary font-bold">Don't Limit Yourself</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-8 md:mb-12 font-medium drop-shadow-md px-4">
            Empowering women in technology and ambitious professionals to break barriers, build confidence, and achieve extraordinary growth through coaching, mentorship, and community.
          </p>
          <div className="flex gap-4 justify-center flex-wrap px-4">
            <button 
              onClick={() => setActiveSection('services')}
              className="bg-secondary text-white border-2 border-secondary px-8 py-4 text-base font-bold rounded-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-secondary hover:border-white hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto font-playfair"
            >
              Book a Session
            </button>
            <button 
              onClick={() => setActiveSection('newsletter')}
              className="bg-transparent text-white border-2 border-white px-8 py-4 text-base font-bold rounded-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-secondary hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto font-playfair"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-8 md:px-16 bg-background dark:bg-background-dark w-full">
        <div className="max-w-container mx-auto w-full">
          {/* Intro & Photo Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24 animate-slide-up">
            <div className="bg-light-gray dark:bg-light-gray-dark rounded-2xl h-64 md:h-96 flex items-center justify-center overflow-hidden shadow-xl border border-primary/10">
              <Image src="/pictures/hs.jpg" alt="Fola" className="w-full h-full object-cover object-[50%_20%] hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-light mb-4">Hi, I'm Fola</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I'm a Brand Strategist, Leadership Coach, and advocate for women in tech. I believe you shouldn't limit yourself—there's so much more growth waiting for you.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Through 1:1 coaching, speaking engagements, and community building, I help professionals unlock their potential and achieve their biggest goals.
              </p>
              <button 
                onClick={() => setActiveSection('about')}
                className="text-primary dark:text-primary-light font-semibold hover:text-secondary dark:hover:text-secondary-dark hover:underline transition-colors duration-300"
              >
                Learn More About My Story →
              </button>
            </div>
          </div>

          {/* Freebie/Hook Section */}
          <div className="bg-gray-900 dark:bg-surface-dark text-white dark:text-primary-dark rounded-2xl p-6 sm:p-8 md:p-12 mb-16 md:mb-24 text-center animate-scale-in shadow-lg">
            <div className="flex justify-center mb-4">
              <GiftIcon className="w-12 h-12 text-secondary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4 px-4">Free Guide: Unlock Your Growth Potential</h2>
            <p className="text-base sm:text-lg mb-4 md:mb-6 opacity-90 px-4">
              Download my free ebook: "5 Steps to Break Through Your Career Ceiling"
            </p>
            <button 
              onClick={() => setActiveSection('resources')}
              className="bg-white dark:bg-primary text-primary dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto shadow-md font-playfair"
            >
              Get Your Free Guide
            </button>
          </div>

          {/* Services Overview */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary dark:text-primary-light mb-8 md:mb-12 px-4">How I Can Help You</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-6 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1 cursor-pointer group" onClick={() => setActiveSection('services')}>
                <BriefcaseIcon className="w-10 h-10 mb-4 text-primary group-hover:text-secondary transition-colors duration-300" />
                <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-2">Coaching & Mentorship</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">1:1 sessions to accelerate your growth and leadership.</p>
                <span className="text-primary dark:text-primary-light font-semibold group-hover:text-secondary transition-colors">Learn More →</span>
              </div>
              <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-6 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1 cursor-pointer group" onClick={() => setActiveSection('services')}>
                <MicrophoneIcon className="w-10 h-10 mb-4 text-primary group-hover:text-secondary transition-colors duration-300" />
                <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-2">Speaking</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Inspiring talks on tech, leadership, and growth.</p>
                <span className="text-primary dark:text-primary-light font-semibold group-hover:text-secondary transition-colors">Learn More →</span>
              </div>
              <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-6 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1 cursor-pointer group" onClick={() => setActiveSection('services')}>
                <UsersIcon className="w-10 h-10 mb-4 text-primary group-hover:text-secondary transition-colors duration-300" />
                <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-2">Workshops</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Group sessions and team training programs.</p>
                <span className="text-primary dark:text-primary-light font-semibold group-hover:text-secondary transition-colors">Learn More →</span>
              </div>
              <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-6 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1 cursor-pointer group" onClick={() => setActiveSection('community')}>
                <StarIcon className="w-10 h-10 mb-4 text-primary group-hover:text-secondary transition-colors duration-300" />
                <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-2">Community</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Join a supportive network of growth-minded professionals.</p>
                <span className="text-primary dark:text-primary-light font-semibold group-hover:text-secondary transition-colors">Learn More →</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-light-gray to-white dark:from-light-gray-dark dark:to-surface-dark rounded-2xl p-6 sm:p-8 md:p-12 text-center border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary dark:text-primary-light mb-3 md:mb-4 px-4">
              Don't Limit Yourself — Join the Unlocked Growth Newsletter
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6 px-4">
              Get weekly insights on leadership, personal growth, and breaking through barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto px-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-white dark:bg-surface-dark border border-primary/20 dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-sm sm:text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              <button className="bg-secondary dark:bg-secondary-dark text-white border-none px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-pink-700 dark:hover:bg-pink-600 whitespace-nowrap shadow-md font-playfair">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

