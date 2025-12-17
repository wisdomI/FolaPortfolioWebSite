import React from 'react';
import { 
  BriefcaseIcon, 
  MicrophoneIcon, 
  UsersIcon, 
  ClipboardIcon,
  TargetIcon,
  HandshakeIcon,
  RocketIcon,
  CheckCircleIcon
} from '../Icons';
import Image from '../Image';

interface ServicesProps {
  setActiveSection: (section: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setActiveSection }) => {
  const handleBooking = (name: string, _price: string) => {
    // External Payment Links Map
    // Replace these placeholder URLs with your actual Paystack Payment Page URLs
    const paymentLinks: { [key: string]: string } = {
      'Single Session': 'https://paystack.com/pay/fola-single-session', // Example URL
      '3-Month Program': 'https://paystack.com/pay/fola-3-month',
      '6-Month Program': 'https://paystack.com/pay/fola-6-month',
      'Leadership Fundamentals Workshop': 'https://paystack.com/pay/fola-leadership-workshop',
      'Personal Brand Workshop': 'https://paystack.com/pay/fola-personal-brand',
      'Confidence & Communication Masterclass': 'https://paystack.com/pay/fola-confidence-class',
      'Career Acceleration Workshop': 'https://paystack.com/pay/fola-career-acceleration'
    }

    const link = paymentLinks[name];
    
    if (link) {
      // Redirect to external payment page
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      // Fallback for unmapped items (e.g. general contact)
      setActiveSection('contact');
      window.scrollTo(0, 0);
    }
  }

  return (
    <section className="pt-32 sm:pt-40 pb-16 px-4 sm:px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
      <div className="max-w-container mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6 text-center animate-fade-in px-4">My Services</h1>
        <p className="text-base sm:text-lg md:text-xl text-accent dark:text-accent-dark text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4">
          Transform your career through 1:1 coaching, inspiring speaking engagements, and powerful workshops designed for women in tech and ambitious professionals.
        </p>

        {/* Service Navigation */}
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-12 md:mb-16 flex-wrap px-4">
          <a href="#coaching" className="px-4 sm:px-6 py-2 sm:py-3 bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-light rounded-lg hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 font-semibold text-sm sm:text-base flex items-center gap-2 border border-gray-200 font-playfair">
            <BriefcaseIcon className="w-5 h-5" /> Coaching
          </a>
          <a href="#speaking" className="px-4 sm:px-6 py-2 sm:py-3 bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-light rounded-lg hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 font-semibold text-sm sm:text-base flex items-center gap-2 border border-gray-200 font-playfair">
            <MicrophoneIcon className="w-5 h-5" /> Speaking
          </a>
          <a href="#workshops" className="px-4 sm:px-6 py-2 sm:py-3 bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-light rounded-lg hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 font-semibold text-sm sm:text-base flex items-center gap-2 border border-gray-200 font-playfair">
            <UsersIcon className="w-5 h-5" /> Workshops
          </a>
        </div>

        {/* COACHING SECTION */}
        <div id="coaching" className="mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6 text-center px-4 flex items-center justify-center gap-3">
            <BriefcaseIcon className="w-8 h-8 md:w-10 md:h-10 text-secondary" /> Coaching & Mentorship
          </h2>
          <p className="text-base sm:text-lg text-accent dark:text-accent-dark text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Personalized 1:1 sessions to accelerate your growth and leadership.
          </p>

        {/* What to Expect */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary dark:text-primary-light mb-6 md:mb-8 text-center px-4">What 1:1 Coaching Looks Like</h2>
          <div className="bg-white dark:bg-surface-dark border border-primary/20 dark:border-border-gray-dark rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-4 flex items-center gap-2"><ClipboardIcon className="w-6 h-6 text-secondary" /> Discovery Session</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">We start by understanding where you are, where you want to go, and what's holding you back.</p>
                
                <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-4 flex items-center gap-2"><TargetIcon className="w-6 h-6 text-secondary" /> Personalized Strategy</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Together, we create a customized growth plan with clear milestones and actionable steps.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-4 flex items-center gap-2"><HandshakeIcon className="w-6 h-6 text-secondary" /> Ongoing Support</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Regular sessions to track progress, overcome obstacles, and celebrate wins.</p>
                
                <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-4 flex items-center gap-2"><RocketIcon className="w-6 h-6 text-secondary" /> Accountability</h3>
                <p className="text-gray-700 dark:text-gray-300">I'll keep you on track and help you push through when things get challenging.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coaching Packages */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary dark:text-primary-light mb-6 md:mb-8 text-center px-4">Coaching Packages</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">Single Session</h3>
              <p className="text-4xl font-bold text-primary dark:text-primary-light mb-4">$250</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Perfect for specific challenges or quick guidance.</p>
              <ul className="list-none mb-8 space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> 1-hour focused session</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Action plan & resources</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Email follow-up</li>
              </ul>
              <button onClick={() => handleBooking('Single Session', '$250')} className="bg-secondary dark:bg-secondary-dark text-white border-none px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-pink-700 dark:hover:bg-pink-600 hover:-translate-y-0.5 hover:shadow-lg w-full font-playfair">
                Book Now
              </button>
            </div>

            <div className="bg-white dark:bg-surface-dark border-2 border-primary dark:border-primary-dark rounded-xl p-8 relative hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary dark:bg-primary-dark text-white dark:text-primary px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">3-Month Program</h3>
              <p className="text-4xl font-bold text-primary dark:text-primary-light mb-4">$1,800</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Comprehensive transformation journey.</p>
              <ul className="list-none mb-8 space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> 12 coaching sessions</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Personalized growth plan</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Weekly check-ins</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Priority support</li>
              </ul>
              <button onClick={() => handleBooking('3-Month Program', '$1,800')} className="bg-secondary dark:bg-secondary-dark text-white border-none px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-pink-700 dark:hover:bg-pink-600 hover:-translate-y-0.5 hover:shadow-lg w-full font-playfair">
                Book Now
              </button>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">6-Month Program</h3>
              <p className="text-4xl font-bold text-primary dark:text-primary-light mb-4">$3,200</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Deep transformation with lasting impact.</p>
              <ul className="list-none mb-8 space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> 24 coaching sessions</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Comprehensive strategy</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Unlimited email support</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Quarterly reviews</li>
              </ul>
              <button onClick={() => handleBooking('6-Month Program', '$3,200')} className="bg-secondary dark:bg-secondary-dark text-white border-none px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-pink-700 dark:hover:bg-pink-600 hover:-translate-y-0.5 hover:shadow-lg w-full font-playfair">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 dark:bg-surface-dark text-white dark:text-primary-dark rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Growth?</h2>
          <p className="text-lg mb-6 opacity-90">Book your coaching session today and start your transformation journey.</p>
          <button className="bg-white dark:bg-primary text-primary dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-md font-playfair">
            Schedule Your Free Discovery Call
          </button>
        </div>
        </div>

        {/* SPEAKING SECTION */}
        <div id="speaking" className="mb-24">
          <h2 className="text-4xl font-bold text-primary dark:text-primary-light mb-6 text-center flex items-center justify-center gap-3">
            <MicrophoneIcon className="w-10 h-10 text-secondary" /> Speaking Engagements
          </h2>
          <p className="text-lg text-accent dark:text-accent-dark text-center mb-12 max-w-2xl mx-auto">
            Inspiring talks on tech, leadership, and growth — helping audiences break barriers and unlock their potential.
          </p>
          
          <div className="mb-12 rounded-2xl overflow-hidden h-64 md:h-96 shadow-xl max-w-4xl mx-auto border border-primary/10">
            <Image src="/pictures/OGM07828.jpg" alt="Fola Speaking" className="w-full h-full object-cover object-[50%_20%] hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>

        {/* Speaking Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-8 text-center">Popular Speaking Topics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-light-gray dark:bg-light-gray-dark rounded-lg p-6 text-gray-900 dark:text-white hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 border border-gray-200 dark:border-border-gray-dark">
              <h4 className="text-xl font-semibold mb-2">🚀 Don't Limit Yourself: Breaking Through Career Ceilings</h4>
              <p className="text-sm opacity-80">Strategies for women in tech to overcome barriers and accelerate growth.</p>
            </div>
            <div className="bg-light-gray dark:bg-light-gray-dark rounded-lg p-6 text-gray-900 dark:text-white hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 border border-gray-200 dark:border-border-gray-dark">
              <h4 className="text-xl font-semibold mb-2">💼 Leadership in the Digital Age</h4>
              <p className="text-sm opacity-80">How to lead effectively in tech-driven, ever-changing environments.</p>
            </div>
            <div className="bg-light-gray dark:bg-light-gray-dark rounded-lg p-6 text-gray-900 dark:text-white hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 border border-gray-200 dark:border-border-gray-dark">
              <h4 className="text-xl font-semibold mb-2">🌟 Building a Personal Brand That Opens Doors</h4>
              <p className="text-sm opacity-80">The art of positioning yourself as a leader and influencer in your industry.</p>
            </div>
            <div className="bg-light-gray dark:bg-light-gray-dark rounded-lg p-6 text-gray-900 dark:text-white hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 border border-gray-200 dark:border-border-gray-dark">
              <h4 className="text-xl font-semibold mb-2">💪 Confidence & Career Growth for Women in Tech</h4>
              <p className="text-sm opacity-80">Practical strategies to build confidence and navigate male-dominated spaces.</p>
            </div>
          </div>
        </div>

        {/* Speaking Experience */}
        <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-2xl p-12 mb-16 shadow-sm">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-8 text-center">Speaking Experience</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-primary dark:text-primary-light mb-2">25+</p>
              <p className="text-gray-600 dark:text-gray-300">Speaking Engagements</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary dark:text-primary-light mb-2">10K+</p>
              <p className="text-gray-600 dark:text-gray-300">Audience Reached</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary dark:text-primary-light mb-2">4.9/5</p>
              <p className="text-gray-600 dark:text-gray-300">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Invite Form */}
        <div className="bg-gradient-to-r from-light-gray to-white dark:from-light-gray-dark dark:to-surface-dark rounded-2xl p-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-6 text-center">Invite Me to Speak at Your Event</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="px-4 py-3 bg-white dark:bg-surface-dark border border-primary/20 dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base focus:ring-1 focus:ring-primary focus:border-primary outline-none"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-4 py-3 bg-white dark:bg-surface-dark border border-primary/20 dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base focus:ring-1 focus:ring-primary focus:border-primary outline-none"
              />
            </div>
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Event Name" 
                className="w-full px-4 py-3 bg-white dark:bg-surface-dark border border-primary/20 dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base focus:ring-1 focus:ring-primary focus:border-primary outline-none"
              />
            </div>
            <div className="mb-4">
              <textarea 
                placeholder="Tell me about your event and speaking requirements..." 
                rows={5}
                className="w-full px-4 py-3 bg-white dark:bg-surface-dark border border-primary/20 dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base focus:ring-1 focus:ring-primary focus:border-primary outline-none"
              ></textarea>
            </div>
            <button className="bg-secondary dark:bg-secondary-dark text-white border-none px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-pink-700 dark:hover:bg-pink-600 w-full shadow-md font-playfair">
              Send Speaking Inquiry
            </button>
          </form>
        </div>
        </div>

        {/* WORKSHOPS SECTION */}
        <div id="workshops" className="mb-24">
          <h2 className="text-4xl font-bold text-primary dark:text-primary-light mb-6 text-center flex items-center justify-center gap-3">
            <UsersIcon className="w-10 h-10 text-secondary" /> Workshops & Group Training
          </h2>
          <p className="text-lg text-accent dark:text-accent-dark text-center mb-12 max-w-2xl mx-auto">
            Interactive group sessions and team training programs designed to unlock collective growth.
          </p>

          <div className="mb-12 rounded-2xl overflow-hidden h-64 md:h-96 shadow-xl max-w-4xl mx-auto border border-primary/10">
            <Image src="/pictures/OGM07913.jpg" alt="Fola Workshop" className="w-full h-full object-cover object-[50%_20%] hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>

        {/* Workshop Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-8 text-center">Available Workshops</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">👥 Leadership Fundamentals for Women in Tech</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">A 4-hour intensive workshop covering leadership essentials, confidence building, and strategic thinking.</p>
              <ul className="list-none mb-6 space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Interactive exercises</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Real-world case studies</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Actionable takeaways</li>
              </ul>
              <p className="text-2xl font-bold text-primary dark:text-primary-light mb-4">$2,500 per session</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">(up to 25 participants)</p>
              <button onClick={() => handleBooking('Leadership Fundamentals Workshop', '$2,500')} className="bg-secondary dark:bg-secondary-dark text-white border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-pink-700 dark:hover:bg-pink-600 w-full shadow-md font-playfair">
                Book This Workshop
              </button>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">🎯 Building Your Personal Brand</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Half-day workshop on creating a powerful personal brand that attracts opportunities.</p>
              <ul className="list-none mb-6 space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Brand positioning strategies</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> LinkedIn optimization</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Content strategy</li>
              </ul>
              <p className="text-2xl font-bold text-primary dark:text-primary-light mb-4">$1,800 per session</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">(up to 20 participants)</p>
              <button onClick={() => handleBooking('Personal Brand Workshop', '$1,800')} className="bg-secondary dark:bg-secondary-dark text-white border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-pink-700 dark:hover:bg-pink-600 w-full shadow-md font-playfair">
                Book This Workshop
              </button>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">💪 Confidence & Communication Masterclass</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Full-day intensive on building confidence, effective communication, and executive presence.</p>
              <ul className="list-none mb-6 space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Public speaking practice</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Difficult conversations</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Executive presence</li>
              </ul>
              <p className="text-2xl font-bold text-primary dark:text-primary-light mb-4">$3,500 per session</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">(up to 30 participants)</p>
              <button onClick={() => handleBooking('Confidence & Communication Masterclass', '$3,500')} className="bg-secondary dark:bg-secondary-dark text-white border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-pink-700 dark:hover:bg-pink-600 w-full shadow-md font-playfair">
                Book This Workshop
              </button>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">🚀 Career Acceleration for Tech Professionals</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Strategic workshop on navigating career growth, promotions, and transitions in tech.</p>
              <ul className="list-none mb-6 space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Career planning frameworks</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Negotiation strategies</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Networking tactics</li>
              </ul>
              <p className="text-2xl font-bold text-primary dark:text-primary-light mb-4">$2,200 per session</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">(up to 25 participants)</p>
              <button onClick={() => handleBooking('Career Acceleration Workshop', '$2,200')} className="bg-secondary dark:bg-secondary-dark text-white border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-pink-700 dark:hover:bg-pink-600 w-full shadow-md font-playfair">
                Book This Workshop
              </button>
            </div>
          </div>
        </div>

          {/* Custom Workshops */}
          <div className="bg-gray-900 dark:bg-surface-dark text-white dark:text-primary-dark rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Workshop?</h2>
          <p className="text-lg mb-6 opacity-90">I can design a tailored workshop for your team's specific needs and goals.</p>
          <button onClick={() => setActiveSection('contact')} className="bg-white dark:bg-primary text-primary dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto shadow-md font-playfair">
            Request Custom Workshop
          </button>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Services;

