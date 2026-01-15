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
  const highlights = [
    {
      text: "Built and Grew a Tech Community of over 1,000 women, fostering mentorship, collaboration, and skill development.",
      image: "/pictures/OGM07879.jpg",
      alt: "Tech Community Growth"
    },
    {
      text: "Led a Team of passionate volunteers and organizers to plan, execute, and scale community-driven programs.",
      image: "/pictures/OGM07789.jpg",
      alt: "Leadership & Team Management"
    },
    {
      text: "Secured Sponsorship Deals Worth Over ₦2 Million, enabling the execution of high-impact events and initiatives.",
      image: "/pictures/OGM07881.jpg",
      alt: "Sponsorship & Partnerships"
    },
    {
      text: "Spoke at Industry Events and hosted panel sessions, sharing insights on cloud, tech careers, leadership, and community building.",
      image: "/pictures/OGM07924.jpg",
      alt: "Public Speaking"
    },
    {
      text: "Organized and Hosted Events that brought together professionals and beginners to learn, network, and grow.",
      image: "/pictures/OGM07858.jpg",
      alt: "Event Hosting"
    },
    {
      text: "Coordinated the STEM-a-Girl Program across 5+ schools, impacting over 500 students, and inspiring young girls to explore careers in STEM through engaging and practical sessions.",
      image: "/pictures/OGM07828.jpg",
      alt: "STEM Education Outreach"
    },
    {
      text: "Awarded the Chapter Excellence Lead, recognizing my consistent impact, leadership, and dedication to community development.",
      image: "/pictures/OGM07913.jpg",
      alt: "Excellence Award"
    }
  ];

  return (
    <section className="pt-32 sm:pt-40 pb-16 px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
      <div className="max-w-container mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-8 md:mb-12 text-center animate-fade-in px-4">Giving Back To The Community</h1>
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Giving back is more than a passion. It's a purpose I live out by empowering others, especially women and young girls, to thrive in tech and leadership.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Over the years, I’ve dedicated myself to building inclusive communities, mentoring aspiring professionals, and creating opportunities that spark growth. Through volunteering, leadership, and advocacy, I’ve made intentional efforts to drive real impact.
          </p>
        </div>

        {/* Key Highlights with Images */}
        <div className="space-y-16 mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-light mb-12 text-center flex items-center justify-center gap-3">
            <StarIcon className="w-8 h-8 text-secondary" />
            Key Highlights of My Community Contributions
          </h2>
          
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 h-full flex flex-col justify-center">
                  <div className="flex items-start gap-4">
                    <CheckCircleIcon className="w-8 h-8 text-secondary shrink-0 mt-1" />
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
                  <Image 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Quote */}
        <div className="text-center mb-16 bg-gray-50 dark:bg-white/5 p-8 md:p-12 rounded-2xl">
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto italic font-playfair leading-relaxed">
            "These achievements are more than milestones—they represent lives impacted, confidence built, and opportunities unlocked. The images in this section capture the stories, smiles, and success that define my journey of giving back."
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 dark:bg-surface-dark text-white dark:text-primary-dark rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect & Grow?</h2>
          <p className="text-lg mb-6 opacity-90">Join our community and be part of something bigger.</p>
          <a 
            href="https://www.linkedin.com/in/folashadeoluwaseun/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white dark:bg-primary text-primary dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-md font-playfair"
          >
            Connect with Us on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
