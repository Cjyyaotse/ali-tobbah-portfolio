import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin as LinkedIn, Download, GraduationCap, Award, Briefcase, FileText, User, Send, Heart, Star, Zap, Sparkles, BookOpen, Target, Lightbulb, Rocket, Shield, Moon, Sun, School, Bookmark, Book, Twitter, MessageSquare, ArrowRight, Github, CheckCircle, FlaskConical, MessageSquareHeart } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/Ali Tobbah Seidu.pdf';
    link.download = 'Ali-Tobbah-Seidu-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 animate-fade-in">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-emerald-600 hover:scale-105 transition-transform duration-300 cursor-pointer dark:text-emerald-400">
                  Ali Tobbah Seidu
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Dark mode toggle button */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-emerald-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                    Home
                  </button>
                  <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-emerald-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                    About
                  </button>
                  <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-emerald-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                    Education
                  </button>
                  <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-emerald-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                    Skills
                  </button>
                  <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-emerald-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                    Experience
                  </button>
                  <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-emerald-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                    Research
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-emerald-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                    Contact
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 transition-all duration-300 hover:scale-110 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-slide-down dark:bg-gray-800 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-all duration-300 hover:scale-105 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-all duration-300 hover:scale-105 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                About
              </button>
              <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-emerald-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                Education
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-all duration-300 hover:scale-105 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-all duration-300 hover:scale-105 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-all duration-300 hover:scale-105 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                Research
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-all duration-300 hover:scale-105 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Redesigned */}
      <section id="home" className="relative pt-16 pb-24 bg-gradient-to-br from-emerald-600 to-teal-600 text-white overflow-hidden dark:from-emerald-800 dark:to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Content - Now with creative shape background */}
            <div className="relative lg:w-1/2 z-10">
              <div className="bg-emerald-700/20 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-emerald-500/20 shadow-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100">
                    Ali Tobbah Seidu
                  </span>
                </h1>

                <p className="text-xl md:text-2xl mb-6 text-emerald-100 font-medium">
                  Pharmacy Student | Aspiring Clinical Pharmacist
                </p>

                <div className="flex items-center mb-6 text-emerald-100">
                  <div className="p-2 bg-emerald-700/30 rounded-full mr-3">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg">Ejisu, Ashanti Region</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                    className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-emerald-200/30"
                  >
                    <Mail className="mr-2" size={20} />
                    Reach out
                  </a>
                  <a
                    href="#"
                    className="border-2 border-white/80 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 inline-flex items-center justify-center hover:border-white shadow-lg hover:shadow-white/20"
                    onClick={handleDownload}
                  >
                    <Download className="mr-2" size={20} />
                    Download Resume
                  </a>
                </div>

                <div className="flex gap-4">
                  <a
                    href="mailto:seidutobbah5@gmail.com"
                    className="text-white hover:text-emerald-200 transition-colors p-2 bg-emerald-700/30 rounded-full"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-teal-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-400/10 rounded-full filter blur-3xl"></div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section id="about" className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100/30 rounded-full filter blur-3xl dark:bg-emerald-900/20"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-100/30 rounded-full filter blur-3xl dark:bg-teal-900/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white relative inline-block">
              <span className="inline-flex items-center">
                <Briefcase className="w-10 h-10 mr-4 text-emerald-600 dark:text-emerald-400 animate-float" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-emerald-600 dark:from-white dark:to-emerald-400">
                  About Me
                </span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
              Get to know the person behind the qualifications
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image - Pentagon container */}
            <div className="w-full lg:w-1/2 flex justify-center relative">
              <div className="relative group">
                {/* Pentagon container with clip-path */}
                <div className="w-72 h-72 md:w-80 md:h-80 overflow-hidden border-4 border-white shadow-2xl relative z-10 transform transition-all duration-500 group-hover:scale-105 dark:border-gray-700"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
                  }}>
                  <img
                    src="/images/white-coat-2.jpg"
                    alt="Ali Tobbah Seidu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400 to-teal-400 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300 dark:from-emerald-600 dark:to-teal-600"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
                  }}></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-200/30 rounded-full animate-float dark:bg-emerald-800/30"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-teal-200/30 rounded-full animate-float-delay dark:bg-teal-800/30"></div>
              </div>
            </div>

            {/* Content - Now in a creative card layout */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 dark:bg-gray-700/80 dark:border-gray-600">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4 dark:bg-emerald-900/50">
                      <Lightbulb className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <p className="text-lg text-gray-700 flex-1 dark:text-gray-300">
                      I am a fifth-year pharmacy student at KNUST Pharmacy School with a deep commitment to healthcare and patient welfare. Aspiring to become a clinical pharmacist dedicated to preventing human suffering through evidence-based pharmaceutical care.Passionate about diagnostic medicine and improving health outcomes through comprehensive pharmaceutical knowledge and research. Seeking opportunities to contribute to healthcare advancement while developing expertise in clinical pharmacy practice.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-xl hover:shadow-lg transition-all duration-300 group dark:from-gray-800 dark:to-gray-700">
                      <div className="flex items-center mb-3">
                        <div className="bg-emerald-100 p-2 rounded-lg mr-3 dark:bg-emerald-900/50">
                          <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="font-semibold text-emerald-600 dark:text-emerald-400">Languages</h3>
                      </div>
                      <p className="text-gray-700 pl-11 dark:text-gray-300 group-hover:translate-x-1 transition-transform duration-300">
                        English (Native), Fante (Proficient)
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-xl hover:shadow-lg transition-all duration-300 group dark:from-gray-800 dark:to-gray-700">
                      <div className="flex items-center mb-3">
                        <div className="bg-emerald-100 p-2 rounded-lg mr-3 dark:bg-emerald-900/50">
                          <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="font-semibold text-emerald-600 dark:text-emerald-400">Leadership</h3>
                      </div>
                      <p className="text-gray-700 pl-11 dark:text-gray-300 group-hover:translate-x-1 transition-transform duration-300">
                        SRC Organizing Secretary, The Scientist Club Organizing Secretary
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Redesigned */}
      <section id="education" className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-50/30 to-transparent dark:from-emerald-900/10"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50/30 to-transparent dark:from-teal-900/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="inline-flex items-center">
                <BookOpen className="w-10 h-10 mr-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-emerald-600 dark:from-white dark:to-emerald-400">
                  Academic Journey
                </span>
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-emerald-600 dark:bg-emerald-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My educational path from foundational learning to specialized pharmaceutical studies
            </p>
          </div>

          <div className="space-y-10">
            {/* KNUST - Timeline Style */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-md transition-all duration-500"></div>
              <div className="relative bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-gradient-to-b from-emerald-500 to-teal-500 p-6 flex flex-col items-center justify-center text-center text-white">
                    <GraduationCap className="w-12 h-12 mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold">2018 - Present</h3>
                    <p className="text-emerald-100">Ongoing</p>
                  </div>
                  <div className="md:w-3/4 p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Doctor of Pharmacy (PharmD)</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4">Kwame Nkrumah University of Science and Technology</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">Current CWA: 70.96</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-emerald-50 dark:bg-gray-600 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                          <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Leadership</h4>
                        </div>
                        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>SRC Organizing Secretary</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>The Scientist Club Organizer</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-emerald-50 dark:bg-gray-600 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                          <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Core Curriculum</h4>
                        </div>
                        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Clinical Pharmacology</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Therapeutic Management</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-emerald-50 dark:bg-gray-600 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Rocket className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                          <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Activities</h4>
                        </div>
                        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Clinical Research</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Professional Development</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Senior High School */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-md transition-all duration-500"></div>
              <div className="relative bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-gradient-to-b from-blue-500 to-indigo-500 p-6 flex flex-col items-center justify-center text-center text-white">
                    <School className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold">2015 - 2018</h3>
                    <p className="text-blue-100">Completed</p>
                  </div>
                  <div className="md:w-3/4 p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">General Science Program</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">Otumfuo Osei Tutu II College</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 dark:bg-gray-600 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                          <h4 className="font-semibold text-blue-600 dark:text-blue-400">Achievements</h4>
                        </div>
                        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Science Club Member</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Science Competitions</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 dark:bg-gray-600 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Book className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                          <h4 className="font-semibold text-blue-600 dark:text-blue-400">Core Subjects</h4>
                        </div>
                        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Advanced Biology</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Chemistry & Physics</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Junior High School */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-md transition-all duration-500"></div>
              <div className="relative bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-gradient-to-b from-purple-500 to-pink-500 p-6 flex flex-col items-center justify-center text-center text-white">
                    <Bookmark className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold">2016 - 2017</h3>
                    <p className="text-purple-100">Completed</p>
                  </div>
                  <div className="md:w-3/4 p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Basic Education Certificate</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">Salmaniya Islamic JHS</p>

                    <div className="bg-purple-50 dark:bg-gray-600 p-4 rounded-lg max-w-md">
                      <div className="flex items-center mb-2">
                        <Star className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                        <h4 className="font-semibold text-purple-600 dark:text-purple-400">Key Activities</h4>
                      </div>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Islamic Studies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Cultural Activities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section - Redesigned */}
      <section id="skills" className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-50/30 to-transparent dark:from-emerald-900/10"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50/30 to-transparent dark:from-teal-900/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="inline-flex items-center">
                <Zap className="w-10 h-10 mr-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-emerald-600 dark:from-white dark:to-emerald-400">
                  Core Competencies
                </span>
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-emerald-600 dark:bg-emerald-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My diverse skill set bridges pharmaceutical expertise with essential professional capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pharmaceutical Expertise */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-md transition-all duration-500"></div>
              <div className="relative bg-white dark:bg-gray-700 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                    <FlaskConical className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Pharmaceutical Mastery</h3>
                  <p className="text-gray-600 dark:text-gray-400">Specialized knowledge and technical proficiencies</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Advanced Research Methodology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Precision Laboratory Techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Clinical Assessment & Diagnosis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Pharmaceutical Quality Assurance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Microscopy & Diagnostic Imaging</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Professional Leadership */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-md transition-all duration-500"></div>
              <div className="relative bg-white dark:bg-gray-700 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40 transition-colors duration-300">
                    <User className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Leadership & Collaboration</h3>
                  <p className="text-gray-600 dark:text-gray-400">Team dynamics and organizational leadership</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Strategic Organizational Leadership</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Cross-functional Team Collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Conflict Resolution & Mediation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Mentorship & Professional Development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Project Management & Coordination</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Patient & Communication */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-md transition-all duration-500"></div>
              <div className="relative bg-white dark:bg-gray-700 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/40 transition-colors duration-300">
                    <MessageSquareHeart className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Patient-Centered Care</h3>
                  <p className="text-gray-600 dark:text-gray-400">Communication and healthcare delivery skills</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Therapeutic Communication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Patient Education & Counseling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Cultural Competency in Healthcare</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Health Literacy Advocacy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Empathetic Patient Interactions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Redesigned */}
      <section id="experience" className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-50/30 to-transparent dark:from-emerald-900/10"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50/30 to-transparent dark:from-teal-900/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="inline-flex items-center">
                <Briefcase className="w-10 h-10 mr-4 text-emerald-600 dark:text-emerald-400 animate-float" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-emerald-600 dark:from-white dark:to-emerald-400">
                  Work Experience
                </span>
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-emerald-600 dark:bg-emerald-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hands-on pharmaceutical experience gained through internships and practical training
            </p>
          </div>

          <div className="space-y-10">
            {/* Erndom Pharmacy Annex */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-md transition-all duration-500"></div>
              <div className="relative bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-1 p-8 md:p-10">
                    <div className="flex items-start mb-6">
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg mr-4">
                        <Briefcase className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Intern Pharmacist</h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold mt-1">Erndom Pharmacy Annex</p>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">2021 - 2024</p>
                      </div>
                    </div>

                    <ul className="space-y-3 pl-14">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Completed comprehensive pharmacy internship gaining hands-on experience
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Gained practical experience in pharmaceutical practice and patient care
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Maintained academic responsibilities while completing internship
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:w-96 flex-shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-emerald-800/10 z-10"></div>
                    <img
                      src="/images/sds-page-5.jpg"
                      alt="Pharmacy Internship"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Abesam Chemist Limited */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-md transition-all duration-500"></div>
              <div className="relative bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-1 p-8 md:p-10">
                    <div className="flex items-start mb-6">
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg mr-4">
                        <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Student Pharmacist</h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold mt-1">Abesam Chemist Limited</p>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">Ejisu</p>
                      </div>
                    </div>

                    <ul className="space-y-3 pl-14">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Gained practical experience in community pharmacy operations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Demonstrated ability to balance professional responsibilities with education
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Developed skills in medication dispensing and patient counseling
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:w-96 flex-shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-teal-800/10 z-10"></div>
                    <img
                      src="/images/sds-page-4.jpg"
                      alt="Community Pharmacy Experience"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Redesigned */}
      <section id="projects" className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-50/30 to-transparent dark:from-emerald-900/10"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50/30 to-transparent dark:from-teal-900/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="inline-flex items-center">
                <FileText className="w-10 h-10 mr-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-emerald-600 dark:from-white dark:to-emerald-400">
                  Research & Projects
                </span>
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-emerald-600 dark:bg-emerald-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cutting-edge pharmaceutical research and innovative projects
            </p>
          </div>

          <div className="space-y-12">
            {/* Antiplasmodial Activity Project */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-md transition-all duration-500"></div>
              <div className="relative bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="p-8 md:p-10">
                  <div className="flex items-start mb-8">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg mr-4">
                      <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400 animate-bounce" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        Antiplasmodial Activity of Portulaca Oleracea in Plasmodium Berghei Infected Mice
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold mt-2">
                        KNUST Faculty of Pharmacy
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 pl-14">
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      Led research project investigating natural antimalarial therapies to address growing resistance to orthodox medicines.
                      Focused on developing safer, affordable treatment options for malaria, particularly for vulnerable populations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-14">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-600 dark:to-gray-700 p-5 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg mr-3">
                          <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Research Focus</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">Natural antimalarial therapies and drug resistance</p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-600 dark:to-gray-700 p-5 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg mr-3">
                          <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Methodology</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">Microscopy and curative antimalarial models</p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-600 dark:to-gray-700 p-5 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg mr-3">
                          <Rocket className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Impact</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">Contributed to search for breakthrough malaria treatments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SDS-PAGE Electrophoresis Project */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-md transition-all duration-500"></div>
              <div className="relative bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="p-8 md:p-10">
                  <div className="flex items-start mb-8">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg mr-4">
                      <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400 animate-bounce" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        SDS-PAGE Electrophoresis Protein Analysis
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold mt-2">
                        KNUST Faculty of Pharmacy
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 pl-14">
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      Participated in protein analysis research utilizing western blotting techniques and SDS-PAGE gel electrophoresis
                      for sample processing and analysis.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-14 mb-8">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-600 dark:to-gray-700 p-5 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg mr-3">
                          <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Research Focus</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">Protein analysis and separation techniques</p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-600 dark:to-gray-700 p-5 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg mr-3">
                          <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Technologies</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">SDS-PAGE electrophoresis, Western blotting</p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-600 dark:to-gray-700 p-5 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg mr-3">
                          <Rocket className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Skills Developed</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">Advanced laboratory techniques and protein analysis</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-14">
                    <div className="relative overflow-hidden rounded-xl group">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
                      <img
                        src="/images/sds-page-1.jpg"
                        alt="SDS-PAGE Analysis"
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 p-4 z-20">
                        <p className="text-white font-medium">SDS-PAGE Analysis</p>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl group">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
                      <img
                        src="/images/sds-page-4.jpg"
                        alt="Protein Analysis"
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 p-4 z-20">
                        <p className="text-white font-medium">Protein Analysis</p>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl group">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
                      <img
                        src="/images/sds-page-2.jpg"
                        alt="SDS-PAGE Gel"
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 p-4 z-20">
                        <p className="text-white font-medium">SDS-PAGE Gel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Redesigned */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 text-white overflow-hidden dark:from-emerald-800 dark:via-emerald-700 dark:to-teal-800">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-emerald-700/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-700/10 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-teal-400/10 blur-3xl animate-pulse-slower"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="inline-flex items-center">
                <Send className="w-10 h-10 mr-4 text-emerald-200 animate-float" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100">
                  Reach out
                </span>
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-white/80 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Hit me up and let's make the world a better place
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information - Enhanced Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-emerald-500/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
                <Sparkles className="w-8 h-8 mr-3 text-emerald-200 animate-pulse" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100">
                  Contact Details
                </span>
              </h3>
              {/* Phone */}
              <div className="group flex items-start p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="bg-emerald-700/50 p-3 rounded-lg mr-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-emerald-200" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <a
                    href="tel:+233245096290"
                    className="text-emerald-200 hover:text-white transition-colors duration-300 inline-flex items-center"
                  >
                    +233 548043349
                    <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-start p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="bg-emerald-700/50 p-3 rounded-lg mr-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-emerald-200" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Location</h4>
                  <p className="text-emerald-200">Ejisu, Ashanti Region</p>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder - You can add an actual form here later */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-teal-500/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
                <MessageSquare className="w-8 h-8 mr-3 text-teal-200 animate-pulse" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-100">
                  Send Me a Message
                </span>
              </h3>
              <p className="text-emerald-100 mb-6">
                Interested in collaborating or have questions? Feel free to reach out directly via email or phone, or check back soon when I implement my contact form.
              </p>
              <div className="flex justify-center">
                <a
                  href="mailto:seidutobbah5@gmail.com"
                  className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-emerald-200/30"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Email Me Directly
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center mt-16 space-x-6">
            <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors duration-300">
              <LinkedIn className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors duration-300">
              <Twitter className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors duration-300">
              <Github className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Name and Title */}
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold hover:text-emerald-400 transition-colors duration-300">
                <Sparkles className="inline-block w-5 h-5 mr-2 animate-pulse" />
                Ali Tobbah Seidu
              </h3>
              <p className="text-gray-400 dark:text-gray-300">Student Pharmacist</p>
            </div>

            {/* Social Icons & Dark Mode Toggle */}
            <div className="flex items-center space-x-4">
              <a
                href="mailto: seidutobbah5@gmail.com"
                aria-label="Email"
                className="text-gray-400 dark:text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 transform"
              >
                <Mail size={24} />
              </a>

              {/* Dark mode toggle button */}
              <button
                onClick={() => {
                  const html = document.documentElement;
                  const isDark = html.classList.contains('dark');
                  html.classList.toggle('dark');
                  localStorage.setItem('theme', isDark ? 'light' : 'dark');
                }}
                aria-label="Toggle dark mode"
                className="ml-2 p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="dark:hidden"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M12 5a7 7 0 100 14 7 7 0 000-14z"
                  />
                  <path
                    className="hidden dark:inline"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-300">
            <p className="hover:text-white transition-colors duration-300">
              <Heart className="inline-block w-4 h-4 mr-2 text-red-400 animate-pulse" />
              &copy; 2025 Ali Tobbah Seidu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
