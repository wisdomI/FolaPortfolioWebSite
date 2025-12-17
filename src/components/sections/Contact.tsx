import React from 'react';
import { 
  EnvelopeIcon,
  BriefcaseIcon
} from '../Icons';

interface ContactProps {
  setActiveSection: (section: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setActiveSection }) => {
  return (
    <section className="pt-32 sm:pt-40 pb-16 px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
      <div className="max-w-container mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6 text-center animate-fade-in px-4">Get In Touch</h1>
        <p className="text-xl text-accent dark:text-accent-dark text-center mb-12 max-w-3xl mx-auto">
          Have questions? Want to work together? I'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary dark:text-primary-light mb-6">Send Me a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full px-4 py-3 bg-white dark:bg-background-dark border border-gray-200 dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="w-full px-4 py-3 bg-white dark:bg-background-dark border border-gray-200 dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  placeholder="What is this about?" 
                  className="w-full px-4 py-3 bg-white dark:bg-background-dark border border-gray-200 dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
                <textarea 
                  placeholder="Tell me more..." 
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-background-dark border border-gray-200 dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                ></textarea>
              </div>
              <button className="bg-secondary dark:bg-secondary-dark text-white border-none px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-pink-700 dark:hover:bg-pink-600 w-full shadow-md font-playfair">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-2xl p-8 mb-8 shadow-sm">
              <h2 className="text-2xl font-bold text-primary dark:text-primary-light mb-6">Direct Contact</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl"><EnvelopeIcon className="w-8 h-8 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-primary dark:text-primary-light">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">hello@folacoaching.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl"><BriefcaseIcon className="w-8 h-8 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-primary dark:text-primary-light">LinkedIn</p>
                    <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/folashade</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-light-gray to-white dark:from-light-gray-dark dark:to-surface-dark rounded-2xl p-8 text-center border border-gray-200">
              <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-4">Looking for Coaching?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Book a free discovery call to see if we're a good fit to work together.
              </p>
              <button 
                onClick={() => setActiveSection('services')}
                className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 shadow-md font-playfair"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

