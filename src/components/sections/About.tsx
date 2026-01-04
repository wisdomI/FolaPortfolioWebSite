import React from 'react';
import { 
  TargetIcon, 
  LightBulbIcon, 
  HandshakeIcon, 
  RocketIcon 
} from '../Icons';
import Image from '../Image';

const About: React.FC = () => {
  return (
    <section className="pt-32 sm:pt-40 pb-16 px-4 sm:px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
      <div className="max-w-container mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-6 md:mb-8 text-center animate-fade-in px-4">About Fola</h1>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="bg-light-gray dark:bg-light-gray-dark rounded-2xl h-64 md:h-96 flex items-center justify-center overflow-hidden shadow-xl border border-gray-200">
            <Image src="/pictures/OGM07789.jpg" alt="Fola" className="w-full h-full object-cover object-[50%_20%] hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
          <div className="flex flex-col justify-center px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6">My Story</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I started my career in tech feeling like I had to prove myself twice as hard. As a woman navigating male-dominated spaces, I learned that success isn't just about skills—it's about confidence, strategy, and having the right support.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              After years of building my career and helping others do the same, I founded my coaching practice with one mission: <strong className="text-primary dark:text-primary-light">Don't Limit Yourself.</strong>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Today, I work with ambitious women in tech and professionals worldwide, helping them unlock growth, build powerful personal brands, and step into leadership with confidence.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-light mb-6 md:mb-8 text-center px-4">My Mission & Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 text-center hover:border-primary transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <TargetIcon className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3">Empowerment</h3>
              <p className="text-gray-600 dark:text-gray-300">I believe every woman has untapped potential. My job is to help you unlock it.</p>
            </div>
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 text-center hover:border-primary transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <LightBulbIcon className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3">Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">Continuous learning and pushing beyond comfort zones is where transformation happens.</p>
            </div>
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 text-center hover:border-primary transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <HandshakeIcon className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">We rise together. Building supportive networks is essential for lasting success.</p>
            </div>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="bg-light-gray dark:bg-light-gray-dark rounded-2xl p-6 sm:p-8 md:p-12 text-center mb-16 border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6 px-4">Beyond Work</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            When I'm not coaching or speaking, you'll find me baking (therapeutic and delicious!), reading about leadership psychology, or planning my next adventure. I believe balance and joy fuel our best work.
          </p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white flex items-center justify-center gap-2">
            Let's connect and unlock your growth together! <RocketIcon className="w-6 h-6 text-secondary" />
          </p>
        </div>

        {/* Gallery Section - More Images */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-light mb-8 text-center px-4">Moments</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image src="/pictures/OGM07796.jpg" alt="Fola Moment" className="w-full h-full object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg group md:col-span-2">
              <Image src="/pictures/OGM07838.jpg" alt="Fola Moment" className="w-full h-full object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image src="/pictures/OGM07878.jpg" alt="Fola Moment" className="w-full h-full object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg group md:col-span-2">
              <Image src="/pictures/OGM07924.jpg" alt="Fola Moment" className="w-full h-full object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image src="/pictures/OGM07880.jpg" alt="Fola Moment" className="w-full h-full object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image src="/pictures/OGM07929.jpg" alt="Fola Moment" className="w-full h-full object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
