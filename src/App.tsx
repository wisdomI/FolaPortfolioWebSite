import { useState, useEffect } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      // Check system preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])

  // Apply theme to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="min-h-screen flex flex-col w-full max-w-full bg-background dark:bg-background-dark transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-black/10 dark:border-white/10 z-50 py-4 transition-all duration-300">
        <div className="max-w-container mx-auto flex justify-between items-center px-8 md:px-16 w-full">
          <div className="nav-brand">
            <h2 className="text-2xl font-bold text-primary dark:text-primary-dark tracking-tight animate-fade-in">FOLA</h2>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-3 md:gap-6 items-center flex-wrap">
            <button 
              onClick={() => setActiveSection('home')} 
              className={`text-sm font-medium cursor-pointer transition-all duration-300 py-2 animate-slide-down ${
                activeSection === 'home' 
                  ? 'text-primary dark:text-primary-dark font-semibold'
                  : 'text-accent dark:text-accent-dark hover:text-primary dark:hover:text-primary-dark'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveSection('about')} 
              className={`text-sm font-medium cursor-pointer transition-all duration-300 py-2 animate-slide-down ${
                activeSection === 'about' 
                  ? 'text-primary dark:text-primary-dark font-semibold'
                  : 'text-accent dark:text-accent-dark hover:text-primary dark:hover:text-primary-dark'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveSection('services')} 
              className={`text-sm font-medium cursor-pointer transition-all duration-300 py-2 animate-slide-down ${
                activeSection === 'services' 
                  ? 'text-primary dark:text-primary-dark font-semibold'
                  : 'text-accent dark:text-accent-dark hover:text-primary dark:hover:text-primary-dark'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => setActiveSection('newsletter')} 
              className={`text-sm font-medium cursor-pointer transition-all duration-300 py-2 animate-slide-down ${
                activeSection === 'newsletter' 
                  ? 'text-primary dark:text-primary-dark font-semibold'
                  : 'text-accent dark:text-accent-dark hover:text-primary dark:hover:text-primary-dark'
              }`}
            >
              Newsletter
            </button>
            <button 
              onClick={() => setActiveSection('community')} 
              className={`text-sm font-medium cursor-pointer transition-all duration-300 py-2 animate-slide-down ${
                activeSection === 'community' 
                  ? 'text-primary dark:text-primary-dark font-semibold'
                  : 'text-accent dark:text-accent-dark hover:text-primary dark:hover:text-primary-dark'
              }`}
            >
              Community
            </button>
            <button 
              onClick={() => setActiveSection('resources')} 
              className={`text-sm font-medium cursor-pointer transition-all duration-300 py-2 animate-slide-down ${
                activeSection === 'resources' 
                  ? 'text-primary dark:text-primary-dark font-semibold'
                  : 'text-accent dark:text-accent-dark hover:text-primary dark:hover:text-primary-dark'
              }`}
            >
              Resources
            </button>
            <button 
              onClick={() => setActiveSection('contact')} 
              className={`text-sm font-medium cursor-pointer transition-all duration-300 py-2 animate-slide-down ${
                activeSection === 'contact' 
                  ? 'text-primary dark:text-primary-dark font-semibold'
                  : 'text-accent dark:text-accent-dark hover:text-primary dark:hover:text-primary-dark'
              }`}
            >
              Contact
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 animate-scale-in"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button & Dark Mode Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-background-dark border-b border-black/10 dark:border-white/10 shadow-lg animate-slide-down">
            <div className="flex flex-col px-8 py-4 space-y-2">
              <button 
                onClick={() => { setActiveSection('home'); setIsMobileMenuOpen(false); }} 
                className={`text-left text-base font-medium cursor-pointer transition-all duration-300 py-3 px-4 rounded-lg ${
                  activeSection === 'home' 
                    ? 'bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-dark font-semibold'
                    : 'text-accent dark:text-accent-dark hover:bg-light-gray dark:hover:bg-light-gray-dark'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => { setActiveSection('about'); setIsMobileMenuOpen(false); }} 
                className={`text-left text-base font-medium cursor-pointer transition-all duration-300 py-3 px-4 rounded-lg ${
                  activeSection === 'about' 
                    ? 'bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-dark font-semibold'
                    : 'text-accent dark:text-accent-dark hover:bg-light-gray dark:hover:bg-light-gray-dark'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => { setActiveSection('services'); setIsMobileMenuOpen(false); }} 
                className={`text-left text-base font-medium cursor-pointer transition-all duration-300 py-3 px-4 rounded-lg ${
                  activeSection === 'services' 
                    ? 'bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-dark font-semibold'
                    : 'text-accent dark:text-accent-dark hover:bg-light-gray dark:hover:bg-light-gray-dark'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => { setActiveSection('newsletter'); setIsMobileMenuOpen(false); }} 
                className={`text-left text-base font-medium cursor-pointer transition-all duration-300 py-3 px-4 rounded-lg ${
                  activeSection === 'newsletter' 
                    ? 'bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-dark font-semibold'
                    : 'text-accent dark:text-accent-dark hover:bg-light-gray dark:hover:bg-light-gray-dark'
                }`}
              >
                Newsletter
              </button>
              <button 
                onClick={() => { setActiveSection('community'); setIsMobileMenuOpen(false); }} 
                className={`text-left text-base font-medium cursor-pointer transition-all duration-300 py-3 px-4 rounded-lg ${
                  activeSection === 'community' 
                    ? 'bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-dark font-semibold'
                    : 'text-accent dark:text-accent-dark hover:bg-light-gray dark:hover:bg-light-gray-dark'
                }`}
              >
                Community
              </button>
              <button 
                onClick={() => { setActiveSection('resources'); setIsMobileMenuOpen(false); }} 
                className={`text-left text-base font-medium cursor-pointer transition-all duration-300 py-3 px-4 rounded-lg ${
                  activeSection === 'resources' 
                    ? 'bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-dark font-semibold'
                    : 'text-accent dark:text-accent-dark hover:bg-light-gray dark:hover:bg-light-gray-dark'
                }`}
              >
                Resources
              </button>
              <button 
                onClick={() => { setActiveSection('contact'); setIsMobileMenuOpen(false); }} 
                className={`text-left text-base font-medium cursor-pointer transition-all duration-300 py-3 px-4 rounded-lg ${
                  activeSection === 'contact' 
                    ? 'bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-dark font-semibold'
                    : 'text-accent dark:text-accent-dark hover:bg-light-gray dark:hover:bg-light-gray-dark'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HOME PAGE */}
      {activeSection === 'home' && (
        <section className="pt-24 pb-16 px-8 md:px-16 bg-gradient-to-br from-light-gray to-white dark:from-light-gray-dark dark:to-background-dark min-h-screen w-full max-w-full">
          <div className="max-w-container mx-auto w-full">
            {/* Hero Section */}
            <div className="py-8 md:py-16 text-center animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary dark:text-primary-dark mb-4 md:mb-6 leading-tight px-4">
                I Help Women in Tech & Professionals<br className="hidden sm:block" />
                <span className="block sm:inline"> </span>Unlock Growth — <span className="text-accent dark:text-accent-dark">Don't Limit Yourself</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                Empowering women in technology and ambitious professionals to break barriers, build confidence, and achieve extraordinary growth through coaching, mentorship, and community.
              </p>
              <div className="flex gap-3 md:gap-4 justify-center flex-wrap mb-8 md:mb-12 px-4">
                <button 
                  onClick={() => setActiveSection('services')}
                  className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto"
                >
                  Book a Session
                </button>
                <button 
                  onClick={() => setActiveSection('newsletter')}
                  className="bg-transparent text-primary dark:text-primary-dark border-2 border-primary dark:border-primary-dark px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto"
                >
                  Subscribe to Newsletter
                </button>
              </div>
            </div>

            {/* Intro & Photo Section */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16 animate-slide-up">
              <div className="bg-light-gray dark:bg-light-gray-dark rounded-2xl h-64 md:h-96 flex items-center justify-center overflow-hidden">
                <img src="/pictures/OGM07838.jpg" alt="Fola" className="w-full h-full object-cover" />
              </div>
              <div className="px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-dark mb-4">Hi, I'm Fola</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  I'm a Brand Strategist, Leadership Coach, and advocate for women in tech. I believe you shouldn't limit yourself—there's so much more growth waiting for you.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Through 1:1 coaching, speaking engagements, and community building, I help professionals unlock their potential and achieve their biggest goals.
                </p>
                <button 
                  onClick={() => setActiveSection('about')}
                  className="text-primary dark:text-primary-dark font-semibold hover:underline"
                >
                  Learn More About My Story →
                </button>
              </div>
            </div>

            {/* Freebie/Hook Section */}
            <div className="bg-primary dark:bg-surface-dark text-white dark:text-primary-dark rounded-2xl p-6 sm:p-8 md:p-12 mb-12 md:mb-16 text-center animate-scale-in">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4 px-4">🎁 Free Guide: Unlock Your Growth Potential</h2>
              <p className="text-base sm:text-lg mb-4 md:mb-6 opacity-90 px-4">
                Download my free ebook: "5 Steps to Break Through Your Career Ceiling"
              </p>
              <button 
                onClick={() => setActiveSection('resources')}
                className="bg-white dark:bg-primary text-primary dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                Get Your Free Guide
              </button>
            </div>

            {/* Services Overview */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary dark:text-primary-dark mb-8 md:mb-12 px-4">How I Can Help You</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-6 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => setActiveSection('services')}>
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-2">Coaching & Mentorship</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">1:1 sessions to accelerate your growth and leadership.</p>
                  <span className="text-primary dark:text-primary-dark font-semibold">Learn More →</span>
                </div>
                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-6 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => setActiveSection('services')}>
                  <div className="text-4xl mb-4">🎤</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-2">Speaking</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Inspiring talks on tech, leadership, and growth.</p>
                  <span className="text-primary dark:text-primary-dark font-semibold">Learn More →</span>
                </div>
                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-6 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => setActiveSection('services')}>
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-2">Workshops</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Group sessions and team training programs.</p>
                  <span className="text-primary dark:text-primary-dark font-semibold">Learn More →</span>
                </div>
                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-6 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => setActiveSection('community')}>
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-2">Community</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Join a supportive network of growth-minded professionals.</p>
                  <span className="text-primary dark:text-primary-dark font-semibold">Learn More →</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-light-gray to-white dark:from-light-gray-dark dark:to-surface-dark rounded-2xl p-6 sm:p-8 md:p-12 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary dark:text-primary-dark mb-3 md:mb-4 px-4">
                Don't Limit Yourself — Join the Unlocked Growth Newsletter
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6 px-4">
                Get weekly insights on leadership, personal growth, and breaking through barriers.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto px-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-sm sm:text-base"
                />
                <button className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ABOUT PAGE */}
      {activeSection === 'about' && (
        <section className="pt-24 pb-16 px-4 sm:px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
          <div className="max-w-container mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-6 md:mb-8 text-center animate-fade-in px-4">About Fola</h1>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
              <div className="bg-light-gray dark:bg-light-gray-dark rounded-2xl h-64 md:h-96 flex items-center justify-center overflow-hidden">
                <img src="/pictures/OGM07796.jpg" alt="Fola Story" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-dark mb-4 md:mb-6">My Story</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  I started my career in tech feeling like I had to prove myself twice as hard. As a woman navigating male-dominated spaces, I learned that success isn't just about skills—it's about confidence, strategy, and having the right support.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  After years of building my career and helping others do the same, I founded my coaching practice with one mission: <strong className="text-primary dark:text-primary-dark">Don't Limit Yourself.</strong>
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Today, I work with ambitious women in tech and professionals worldwide, helping them unlock growth, build powerful personal brands, and step into leadership with confidence.
                </p>
              </div>
            </div>

            {/* Mission & Values */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-dark mb-6 md:mb-8 text-center px-4">My Mission & Values</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-3">Empowerment</h3>
                  <p className="text-gray-600 dark:text-gray-300">I believe every woman has untapped potential. My job is to help you unlock it.</p>
                </div>
                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">💡</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-3">Growth</h3>
                  <p className="text-gray-600 dark:text-gray-300">Continuous learning and pushing beyond comfort zones is where transformation happens.</p>
                </div>
                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-3">Community</h3>
                  <p className="text-gray-600 dark:text-gray-300">We rise together. Building supportive networks is essential for lasting success.</p>
                </div>
              </div>
            </div>

            {/* Personal Touch & Gallery */}
            <div className="mb-12 md:mb-16">
              <div className="bg-light-gray dark:bg-light-gray-dark rounded-2xl p-6 sm:p-8 md:p-12 text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-dark mb-4 md:mb-6 px-4">Beyond Work</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                  When I'm not coaching or speaking, you'll find me baking (therapeutic and delicious!), reading about leadership psychology, or planning my next adventure. I believe balance and joy fuel our best work.
                </p>
                <p className="text-lg font-semibold text-primary dark:text-primary-dark">
                  Let's connect and unlock your growth together! 🚀
                </p>
              </div>
              
              {/* Photo Gallery */}
              <div className="rounded-2xl overflow-hidden">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-dark mb-6 px-4">Moments from My Journey</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <img src="/pictures/OGM07789.jpg" alt="Fola at event" className="rounded-lg h-64 w-full object-cover hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
                  <img src="/pictures/OGM07828.jpg" alt="Speaking moment" className="rounded-lg h-64 w-full object-cover hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
                  <img src="/pictures/OGM07913.jpg" alt="Leadership moment" className="rounded-lg h-64 w-full object-cover hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
                  <img src="/pictures/OGM07924.jpg" alt="Community building" className="rounded-lg h-64 w-full object-cover hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
                  <img src="/pictures/OGM07929.jpg" alt="Personal moment" className="rounded-lg h-64 w-full object-cover hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
                  <img src="/pictures/hs.jpg" alt="Fola portrait" className="rounded-lg h-64 w-full object-cover hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SERVICES PAGE (Combined: Coaching, Speaking, Workshops) */}
      {activeSection === 'services' && (
        <section className="pt-24 pb-16 px-4 sm:px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
          <div className="max-w-container mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4 md:mb-6 text-center animate-fade-in px-4">My Services</h1>
            <p className="text-base sm:text-lg md:text-xl text-accent dark:text-accent-dark text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4">
              Transform your career through 1:1 coaching, inspiring speaking engagements, and powerful workshops designed for women in tech and ambitious professionals.
            </p>

            {/* Service Navigation */}
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-12 md:mb-16 flex-wrap px-4">
              <a href="#coaching" className="px-4 sm:px-6 py-2 sm:py-3 bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-dark rounded-lg hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 font-semibold text-sm sm:text-base">
                💼 Coaching
              </a>
              <a href="#speaking" className="px-4 sm:px-6 py-2 sm:py-3 bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-dark rounded-lg hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 font-semibold text-sm sm:text-base">
                🎤 Speaking
              </a>
              <a href="#workshops" className="px-4 sm:px-6 py-2 sm:py-3 bg-light-gray dark:bg-light-gray-dark text-primary dark:text-primary-dark rounded-lg hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 font-semibold text-sm sm:text-base">
                👥 Workshops
              </a>
            </div>

            {/* COACHING SECTION */}
            <div id="coaching" className="mb-16 md:mb-24">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark mb-4 md:mb-6 text-center px-4">💼 Coaching & Mentorship</h2>
              <p className="text-base sm:text-lg text-accent dark:text-accent-dark text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
                Personalized 1:1 sessions to accelerate your growth and leadership.
              </p>

            {/* What to Expect */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary dark:text-primary-dark mb-6 md:mb-8 text-center px-4">What 1:1 Coaching Looks Like</h2>
              <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-2xl p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-4">📋 Discovery Session</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">We start by understanding where you are, where you want to go, and what's holding you back.</p>
                    
                    <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-4">🎯 Personalized Strategy</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">Together, we create a customized growth plan with clear milestones and actionable steps.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-4">💪 Ongoing Support</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">Regular sessions to track progress, overcome obstacles, and celebrate wins.</p>
                    
                    <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-4">🚀 Accountability</h3>
                    <p className="text-gray-700 dark:text-gray-300">I'll keep you on track and help you push through when things get challenging.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coaching Packages */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary dark:text-primary-dark mb-6 md:mb-8 text-center px-4">Coaching Packages</h2>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">Single Session</h3>
                  <p className="text-4xl font-bold text-primary dark:text-primary-dark mb-4">$250</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Perfect for specific challenges or quick guidance.</p>
                  <ul className="list-none mb-8">
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">1-hour focused session</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Action plan & resources</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Email follow-up</li>
                  </ul>
                  <button className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-lg w-full">
                    Book Now
                  </button>
                </div>

                <div className="bg-white dark:bg-surface-dark border-2 border-primary dark:border-primary-dark rounded-xl p-8 relative hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary dark:bg-primary-dark text-white dark:text-primary px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">3-Month Program</h3>
                  <p className="text-4xl font-bold text-primary dark:text-primary-dark mb-4">$1,800</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Comprehensive transformation journey.</p>
                  <ul className="list-none mb-8">
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">12 coaching sessions</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Personalized growth plan</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Weekly check-ins</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Priority support</li>
                  </ul>
                  <button className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-lg w-full">
                    Book Now
                  </button>
                </div>

                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">6-Month Program</h3>
                  <p className="text-4xl font-bold text-primary dark:text-primary-dark mb-4">$3,200</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Deep transformation with lasting impact.</p>
                  <ul className="list-none mb-8">
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">24 coaching sessions</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Comprehensive strategy</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Unlimited email support</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Quarterly reviews</li>
                  </ul>
                  <button className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-lg w-full">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary dark:bg-surface-dark text-white dark:text-primary-dark rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Growth?</h2>
              <p className="text-lg mb-6 opacity-90">Book your coaching session today and start your transformation journey.</p>
              <button className="bg-white dark:bg-primary text-primary dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                Schedule Your Free Discovery Call
              </button>
            </div>
            </div>

            {/* SPEAKING SECTION */}
            <div id="speaking" className="mb-24">
              <h2 className="text-4xl font-bold text-primary dark:text-primary-dark mb-6 text-center">🎤 Speaking Engagements</h2>
              <p className="text-lg text-accent dark:text-accent-dark text-center mb-12 max-w-2xl mx-auto">
                Inspiring talks on tech, leadership, and growth — helping audiences break barriers and unlock their potential.
              </p>

            {/* Speaking Topics */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-8 text-center">Popular Speaking Topics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-light-gray dark:bg-light-gray-dark rounded-lg p-6 hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">🚀 Don't Limit Yourself: Breaking Through Career Ceilings</h4>
                  <p className="text-sm opacity-80">Strategies for women in tech to overcome barriers and accelerate growth.</p>
                </div>
                <div className="bg-light-gray dark:bg-light-gray-dark rounded-lg p-6 hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">💼 Leadership in the Digital Age</h4>
                  <p className="text-sm opacity-80">How to lead effectively in tech-driven, ever-changing environments.</p>
                </div>
                <div className="bg-light-gray dark:bg-light-gray-dark rounded-lg p-6 hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">🌟 Building a Personal Brand That Opens Doors</h4>
                  <p className="text-sm opacity-80">The art of positioning yourself as a leader and influencer in your industry.</p>
                </div>
                <div className="bg-light-gray dark:bg-light-gray-dark rounded-lg p-6 hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">💪 Confidence & Career Growth for Women in Tech</h4>
                  <p className="text-sm opacity-80">Practical strategies to build confidence and navigate male-dominated spaces.</p>
                </div>
              </div>
            </div>

            {/* Speaking Experience */}
            <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-2xl p-12 mb-16">
              <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-8 text-center">Speaking Experience</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                <div>
                  <p className="text-5xl font-bold text-primary dark:text-primary-dark mb-2">25+</p>
                  <p className="text-gray-600 dark:text-gray-300">Speaking Engagements</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-primary dark:text-primary-dark mb-2">10K+</p>
                  <p className="text-gray-600 dark:text-gray-300">Audience Reached</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-primary dark:text-primary-dark mb-2">4.9/5</p>
                  <p className="text-gray-600 dark:text-gray-300">Average Rating</p>
                </div>
              </div>
              {/* Speaking Photos */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <img src="/pictures/OGM07858.jpg" alt="Speaking at event" className="rounded-lg h-48 w-full object-cover hover:shadow-lg transition-all duration-300" />
                <img src="/pictures/OGM07879.jpg" alt="Speaking engagement" className="rounded-lg h-48 w-full object-cover hover:shadow-lg transition-all duration-300" />
                <img src="/pictures/OGM07880.jpg" alt="Conference speaking" className="rounded-lg h-48 w-full object-cover hover:shadow-lg transition-all duration-300" />
                <img src="/pictures/OGM07881.jpg" alt="Public speaking" className="rounded-lg h-48 w-full object-cover hover:shadow-lg transition-all duration-300" />
              </div>
            </div>

            {/* Invite Form */}
            <div className="bg-gradient-to-r from-light-gray to-white dark:from-light-gray-dark dark:to-surface-dark rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-6 text-center">Invite Me to Speak at Your Event</h2>
              <form className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="px-4 py-3 bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="px-4 py-3 bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Event Name" 
                    className="w-full px-4 py-3 bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base"
                  />
                </div>
                <div className="mb-4">
                  <textarea 
                    placeholder="Tell me about your event and speaking requirements..." 
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base"
                  ></textarea>
                </div>
                <button className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 w-full">
                  Send Speaking Inquiry
                </button>
              </form>
            </div>
            </div>

            {/* WORKSHOPS SECTION */}
            <div id="workshops" className="mb-24">
              <h2 className="text-4xl font-bold text-primary dark:text-primary-dark mb-6 text-center">👥 Workshops & Group Training</h2>
              <p className="text-lg text-accent dark:text-accent-dark text-center mb-12 max-w-2xl mx-auto">
                Interactive group sessions and team training programs designed to unlock collective growth.
              </p>

            {/* Workshop Topics */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-8 text-center">Available Workshops</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                  <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">👥 Leadership Fundamentals for Women in Tech</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A 4-hour intensive workshop covering leadership essentials, confidence building, and strategic thinking.</p>
                  <ul className="list-none mb-6">
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Interactive exercises</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Real-world case studies</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Actionable takeaways</li>
                  </ul>
                  <p className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">$2,500 per session</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">(up to 25 participants)</p>
                  <button className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 w-full">
                    Book This Workshop
                  </button>
                </div>

                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                  <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">🎯 Building Your Personal Brand</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Half-day workshop on creating a powerful personal brand that attracts opportunities.</p>
                  <ul className="list-none mb-6">
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Brand positioning strategies</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">LinkedIn optimization</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Content strategy</li>
                  </ul>
                  <p className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">$1,800 per session</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">(up to 20 participants)</p>
                  <button className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 w-full">
                    Book This Workshop
                  </button>
                </div>

                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                  <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">💪 Confidence & Communication Masterclass</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Full-day intensive on building confidence, effective communication, and executive presence.</p>
                  <ul className="list-none mb-6">
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Public speaking practice</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Difficult conversations</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Executive presence</li>
                  </ul>
                  <p className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">$3,500 per session</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">(up to 30 participants)</p>
                  <button className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 w-full">
                    Book This Workshop
                  </button>
                </div>

                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                  <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">🚀 Career Acceleration for Tech Professionals</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Strategic workshop on navigating career growth, promotions, and transitions in tech.</p>
                  <ul className="list-none mb-6">
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Career planning frameworks</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Negotiation strategies</li>
                    <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Networking tactics</li>
                  </ul>
                  <p className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">$2,200 per session</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">(up to 25 participants)</p>
                  <button className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 w-full">
                    Book This Workshop
                  </button>
                </div>
              </div>
            </div>

            {/* Custom Workshops */}
            <div className="bg-primary dark:bg-surface-dark text-white dark:text-primary-dark rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Workshop?</h2>
              <p className="text-lg mb-6 opacity-90">I can design a tailored workshop for your team's specific needs and goals.</p>
              <button onClick={() => setActiveSection('contact')} className="bg-white dark:bg-primary text-primary dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
                Request Custom Workshop
              </button>
            </div>
            </div>

          </div>
        </section>
      )}

      {/* NEWSLETTER & ARTICLES PAGE */}
      {activeSection === 'newsletter' && (
        <section className="pt-24 pb-16 px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
          <div className="max-w-container mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4 md:mb-6 text-center animate-fade-in px-4">Newsletter & Articles</h1>
            <p className="text-xl text-accent dark:text-accent-dark text-center mb-12 max-w-3xl mx-auto">
              Get weekly insights on growth, leadership, and tech — straight to your inbox.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-primary to-gray-800 dark:from-surface-dark dark:to-light-gray-dark text-white dark:text-primary-dark rounded-2xl p-12 mb-16 text-center">
              <h2 className="text-4xl font-bold mb-4">📧 Unlocked Growth Newsletter</h2>
              <p className="text-lg mb-8 opacity-90">Join 2,500+ professionals who get actionable insights every Tuesday.</p>
              <div className="flex gap-2 max-w-md mx-auto mb-6">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-3 bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base"
                />
                <button className="bg-white dark:bg-primary text-primary dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm opacity-75">✨ Free. No spam. Unsubscribe anytime.</p>
            </div>

            {/* Recent Articles */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-8">Recent Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                  <div className="text-sm text-accent dark:text-accent-dark mb-2">Jan 2025</div>
                  <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">Don't Limit Yourself: Breaking Through Career Ceilings</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Discover the 5 key strategies that helped hundreds of women in tech overcome barriers and accelerate their careers.
                  </p>
                  <button className="text-primary dark:text-primary-dark font-semibold hover:underline">
                    Read More →
                  </button>
                </div>

                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                  <div className="text-sm text-accent dark:text-accent-dark mb-2">Dec 2024</div>
                  <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">The Confidence Code for Women in Tech</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Practical tips for building unshakeable confidence in male-dominated spaces.
                  </p>
                  <button className="text-primary dark:text-primary-dark font-semibold hover:underline">
                    Read More →
                  </button>
                </div>

                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                  <div className="text-sm text-accent dark:text-accent-dark mb-2">Nov 2024</div>
                  <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">Leadership Lessons from Imposter Syndrome</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    How to turn self-doubt into your greatest leadership asset.
                  </p>
                  <button className="text-primary dark:text-primary-dark font-semibold hover:underline">
                    Read More →
                  </button>
                </div>

                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                  <div className="text-sm text-accent dark:text-accent-dark mb-2">Oct 2024</div>
                  <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">Personal Branding for Tech Professionals</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A step-by-step guide to building a brand that opens doors.
                  </p>
                  <button className="text-primary dark:text-primary-dark font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            </div>

            {/* What You'll Get */}
            <div className="bg-light-gray dark:bg-light-gray-dark rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-8 text-center">What You'll Get in the Newsletter</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">💡</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-2">Weekly Insights</h3>
                  <p className="text-gray-600 dark:text-gray-300">Actionable tips on leadership, growth, and tech careers.</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-2">Exclusive Content</h3>
                  <p className="text-gray-600 dark:text-gray-300">Resources, templates, and guides available only to subscribers.</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-2">Priority Access</h3>
                  <p className="text-gray-600 dark:text-gray-300">First to know about workshops, events, and special offers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* COMMUNITY PAGE */}
      {activeSection === 'community' && (
        <section className="pt-24 pb-16 px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
          <div className="max-w-container mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4 md:mb-6 text-center animate-fade-in px-4">Join Our Community</h1>
            <p className="text-xl text-accent dark:text-accent-dark text-center mb-12 max-w-3xl mx-auto">
              A supportive space for women in tech & professionals unlocking growth — where we rise together.
            </p>

            {/* Community Intro */}
            <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-2xl p-12 mb-16 text-center">
              <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-6">Why Join Our Community?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                You don't have to navigate your career journey alone. Our community is a safe space where ambitious women in tech and professionals connect, learn, and grow together.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-2">Peer Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">Connect with like-minded professionals facing similar challenges.</p>
                </div>
                <div>
                  <div className="text-5xl mb-4">💬</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-2">Monthly Meetups</h3>
                  <p className="text-gray-600 dark:text-gray-300">Virtual and in-person gatherings for networking and learning.</p>
                </div>
                <div>
                  <div className="text-5xl mb-4">📖</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-2">Exclusive Resources</h3>
                  <p className="text-gray-600 dark:text-gray-300">Access to templates, guides, and community-only content.</p>
                </div>
              </div>
            </div>

            {/* Community Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">💎 Free Community (LinkedIn)</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Follow me on LinkedIn for daily insights, discussions, and connection with our growing community of professionals.
                </p>
                <ul className="list-none mb-6">
                  <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Daily leadership tips</li>
                  <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Live Q&A sessions</li>
                  <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Networking opportunities</li>
                </ul>
                <button className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 w-full">
                  Follow on LinkedIn
                </button>
              </div>

              <div className="bg-white dark:bg-surface-dark border-2 border-primary dark:border-primary-dark rounded-xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary dark:bg-primary-dark text-white dark:text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  Coming Soon
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">⭐ Premium Community</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join our exclusive membership for deeper connections, masterclasses, and personalized support.
                </p>
                <ul className="list-none mb-6">
                  <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Monthly group coaching</li>
                  <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Exclusive masterclasses</li>
                  <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Private Slack community</li>
                  <li className="py-2 text-gray-700 dark:text-gray-300 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary dark:before:text-primary-dark before:font-semibold">Priority support</li>
                </ul>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-none px-8 py-3 text-base font-semibold rounded-lg cursor-not-allowed w-full">
                  Join Waitlist
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary dark:bg-surface-dark text-white dark:text-primary-dark rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Connect & Grow?</h2>
              <p className="text-lg mb-6 opacity-90">Join our community and be part of something bigger.</p>
              <button className="bg-white dark:bg-primary text-primary dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                Connect with Us on LinkedIn
              </button>
            </div>
          </div>
        </section>
      )}

      {/* RESOURCES / FREEBIES PAGE */}
      {activeSection === 'resources' && (
        <section className="pt-24 pb-16 px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
          <div className="max-w-container mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4 md:mb-6 text-center animate-fade-in px-4">Resources & Freebies</h1>
            <p className="text-xl text-accent dark:text-accent-dark text-center mb-12 max-w-3xl mx-auto">
              Free guides, templates, and resources to help you unlock your growth potential.
            </p>

            {/* Featured Freebie */}
            <div className="bg-gradient-to-r from-primary to-gray-800 dark:from-surface-dark dark:to-light-gray-dark text-white dark:text-primary-dark rounded-2xl p-12 mb-16 text-center">
              <div className="text-6xl mb-4">📘</div>
              <h2 className="text-4xl font-bold mb-4">FREE Ebook: 5 Steps to Break Through Your Career Ceiling</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Download this comprehensive guide packed with actionable strategies to accelerate your career growth and overcome barriers.
              </p>
              <button className="bg-white dark:bg-primary text-primary dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-lg">
                Download Free Ebook
              </button>
            </div>

            {/* Other Resources */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-8">Free Resources</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-3">Personal Brand Checklist</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A step-by-step guide to building your professional brand.</p>
                  <button className="text-primary dark:text-primary-dark font-semibold hover:underline">
                    Download Free →
                  </button>
                </div>

                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-3">Leadership Skills Assessment</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Identify your strengths and areas for growth as a leader.</p>
                  <button className="text-primary dark:text-primary-dark font-semibold hover:underline">
                    Take Assessment →
                  </button>
                </div>

                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-3">Career Planning Template</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Map out your career goals with this comprehensive template.</p>
                  <button className="text-primary dark:text-primary-dark font-semibold hover:underline">
                    Download Free →
                  </button>
                </div>
              </div>
            </div>

            {/* Future Book Section */}
            <div className="bg-light-gray dark:bg-light-gray-dark rounded-2xl p-12 mb-16 text-center">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-4">My Book (Coming Soon!)</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                I'm working on a book about breaking through career barriers and unlocking your full potential. Be the first to know when it launches!
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email for updates" 
                  className="flex-1 px-4 py-3 bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base"
                />
                <button className="bg-primary dark:bg-primary-dark text-white dark:text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300">
                  Notify Me
                </button>
              </div>
            </div>

            {/* Paid Sessions Link */}
            <div className="bg-white dark:bg-surface-dark border-2 border-primary dark:border-primary-dark rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-4">Ready for 1:1 Support?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Book a coaching session for personalized guidance tailored to your goals.
              </p>
              <button 
                onClick={() => setActiveSection('services')}
                className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-8 py-4 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                View All Services
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT PAGE */}
      {activeSection === 'contact' && (
        <section className="pt-24 pb-16 px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
          <div className="max-w-container mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4 md:mb-6 text-center animate-fade-in px-4">Get In Touch</h1>
            <p className="text-xl text-accent dark:text-accent-dark text-center mb-12 max-w-3xl mx-auto">
              Have questions? Want to work together? I'd love to hear from you!
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Contact Form */}
              <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-primary dark:text-primary-dark mb-6">Send Me a Message</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name" 
                      className="w-full px-4 py-3 bg-white dark:bg-background-dark border border-border-gray dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="w-full px-4 py-3 bg-white dark:bg-background-dark border border-border-gray dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Subject</label>
                    <input 
                      type="text" 
                      placeholder="What is this about?" 
                      className="w-full px-4 py-3 bg-white dark:bg-background-dark border border-border-gray dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
                    <textarea 
                      placeholder="Tell me more..." 
                      rows={6}
                      className="w-full px-4 py-3 bg-white dark:bg-background-dark border border-border-gray dark:border-border-gray-dark text-gray-900 dark:text-white placeholder-gray-400 rounded-md text-base"
                    ></textarea>
                  </div>
                  <button className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 w-full">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <div className="bg-white dark:bg-surface-dark border border-border-gray dark:border-border-gray-dark rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-primary dark:text-primary-dark mb-6">Direct Contact</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📧</div>
                      <div>
                        <p className="font-semibold text-primary dark:text-primary-dark">Email</p>
                        <p className="text-gray-600 dark:text-gray-300">fola@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">💼</div>
                      <div>
                        <p className="font-semibold text-primary dark:text-primary-dark">LinkedIn</p>
                        <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/fola</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">🎥</div>
                      <div>
                        <p className="font-semibold text-primary dark:text-primary-dark">YouTube</p>
                        <p className="text-gray-600 dark:text-gray-300">Coming Soon!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-light-gray to-white dark:from-light-gray-dark dark:to-surface-dark rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-4">Looking for Coaching?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Book a free discovery call to see if we're a good fit to work together.
                  </p>
                  <button 
                    onClick={() => setActiveSection('services')}
                    className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200"
                  >
                    View Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER - CONSISTENTLY BLACK */}
      <footer className="bg-primary text-white py-12 mt-auto w-full max-w-full">
        <div className="max-w-container mx-auto w-full px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">FOLA</h3>
              <p className="text-sm text-gray-300">
                Empowering women in tech & professionals to unlock growth and break through barriers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => setActiveSection('services')} className="text-gray-300 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => setActiveSection('newsletter')} className="text-gray-300 hover:text-white transition-colors">Newsletter</button></li>
                <li><button onClick={() => setActiveSection('community')} className="text-gray-300 hover:text-white transition-colors">Community</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveSection('newsletter')} className="text-gray-300 hover:text-white transition-colors">Newsletter</button></li>
                <li><button onClick={() => setActiveSection('resources')} className="text-gray-300 hover:text-white transition-colors">Free Resources</button></li>
                <li><button onClick={() => setActiveSection('community')} className="text-gray-300 hover:text-white transition-colors">Community</button></li>
                <li><button onClick={() => setActiveSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <p className="text-sm text-gray-300 mb-2">📧 fola@example.com</p>
              <p className="text-sm text-gray-300 mb-2">💼 LinkedIn: /in/fola</p>
              <p className="text-sm text-gray-300">🎥 YouTube (Coming Soon)</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © 2025 FOLA — Don't Limit Yourself. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
