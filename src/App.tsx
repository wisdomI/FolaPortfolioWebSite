import { useState, useEffect } from 'react'
import Image from './components/Image'
import { 
  BriefcaseIcon, 
  EnvelopeIcon,
  LinkedinIcon
} from './components/Icons'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Newsletter from './components/sections/Newsletter'
import Community from './components/sections/Community'
import Resources from './components/sections/Resources'
import Contact from './components/sections/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Skills' },
    { id: 'newsletter', label: 'Insights' },
    { id: 'community', label: 'Community' },
    { id: 'resources', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

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

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services setActiveSection={setActiveSection} />;
      case 'newsletter':
        return <Newsletter />;
      case 'community':
        return <Community />;
      case 'resources':
        return <Resources setActiveSection={setActiveSection} />;
      case 'contact':
        return <Contact setActiveSection={setActiveSection} />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full max-w-full bg-background dark:bg-background-dark transition-colors duration-300 font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/10 z-50 transition-all duration-300 shadow-sm">
        <div className="max-w-container mx-auto flex justify-between items-center px-8 md:px-16 w-full">
          <div className="nav-brand">
            <Image src="/logos/starrup.png" alt="logo-image" className="h-24 w-auto object-contain animate-fade-in" loading="lazy" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-3 md:gap-6 items-center flex-wrap">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveSection(item.id)} 
                className={`text-sm font-medium cursor-pointer transition-all duration-300 py-2 border-b-2 animate-slide-down capitalize font-playfair ${
                  activeSection === item.id 
                    ? 'text-primary dark:text-primary-light font-bold border-primary dark:border-primary-light'
                    : 'text-gray-600 dark:text-gray-300 border-transparent hover:text-primary dark:hover:text-primary-dark hover:border-primary/30'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-lg bg-primary/5 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-gray-700 transition-all duration-300 animate-scale-in text-primary dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
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
              className="p-2 rounded-lg bg-primary/5 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-primary/5 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-background-dark border-b border-primary/10 dark:border-white/10 shadow-lg animate-slide-down">
            <div className="flex flex-col px-8 py-4 space-y-2">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => { setActiveSection(item.id); setIsMobileMenuOpen(false); }} 
                  className={`text-left text-base font-medium cursor-pointer transition-all duration-300 py-3 px-4 rounded-lg capitalize font-playfair ${
                    activeSection === item.id 
                      ? 'bg-primary/10 dark:bg-white/10 text-primary dark:text-primary-light font-bold'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow w-full">
        {renderSection()}
      </main>

      {/* FOOTER - Updated color to black */}
      <footer className="bg-black text-white py-12 mt-auto w-full max-w-full">
        <div className="max-w-container mx-auto w-full px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image src="/logos/starrup.png" alt="FOLA" className="h-24 w-auto mb-4 object-contain brightness-0 invert" loading="lazy" />
              <p className="text-sm text-gray-300">
                Building scalable cloud infrastructure and empowering the next generation of tech professionals.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => setActiveSection('services')} className="text-gray-300 hover:text-white transition-colors">Skills</button></li>
                <li><button onClick={() => setActiveSection('newsletter')} className="text-gray-300 hover:text-white transition-colors">Insights</button></li>
                <li><button onClick={() => setActiveSection('community')} className="text-gray-300 hover:text-white transition-colors">Community</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveSection('newsletter')} className="text-gray-300 hover:text-white transition-colors">Tech Blog</button></li>
                <li><button onClick={() => setActiveSection('resources')} className="text-gray-300 hover:text-white transition-colors">Certifications</button></li>
                <li><button onClick={() => setActiveSection('community')} className="text-gray-300 hover:text-white transition-colors">Mentorship</button></li>
                <li><button onClick={() => setActiveSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <p className="text-sm text-gray-300 mb-2 flex items-center gap-2"><EnvelopeIcon className="w-4 h-4" /> hello@thestarrup.com</p>
              <a href="https://www.linkedin.com/in/folashadeoluwaseun/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 mb-2 flex items-center gap-2 hover:text-white transition-colors"><LinkedinIcon className="w-4 h-4" /> LinkedIn: /in/folashadeoluwaseun</a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Folashade. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
