import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin as LinkedIn, Download, GraduationCap, Award, Briefcase, FileText, User, Send, Heart, Star, Zap, Sparkles, BookOpen, Target, Lightbulb, Rocket, Shield, Moon, Sun } from 'lucide-react';

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
                  <Sparkles className="inline-block w-5 h-5 mr-2 animate-pulse text-yellow-500 dark:text-yellow-300" />
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
                  <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-emerald-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                    Experience
                  </button>
                  <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-emerald-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                    Research
                  </button>
                  <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-emerald-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                    Skills
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
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-all duration-300 hover:scale-105 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-all duration-300 hover:scale-105 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                Research
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-all duration-300 hover:scale-105 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-all duration-300 hover:scale-105 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-700">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white overflow-hidden dark:from-emerald-800 dark:to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Ali Tobbah Seidu
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-emerald-100">
                Pharmacy Student | Aspiring Clinical Pharmacist
              </p>
              <div className="flex items-center mb-6">
                <MapPin className="mr-2" size={20} />
                <span className="text-lg">Ejisu, Ashanti Region</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
                >
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </a>
                <a
                  href="#"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-flex items-center justify-center"
                  onClick={handleDownload}
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href="mailto:seidutobbah5@gmail.com"
                  className="text-white hover:text-emerald-200 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="/images/white-coat-1.jpg"
                  alt="Ali Tobbah Seidu"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300 dark:text-white dark:hover:text-emerald-400">
              <User className="inline-block w-8 h-8 mr-3 text-emerald-600 animate-pulse dark:text-emerald-400" />
              About Me
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto animate-expand dark:bg-emerald-400"></div>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-8 lg:mb-0 animate-slide-in-left">
              <div className="w-64 h-64 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto shadow-lg overflow-hidden hover:scale-110 transition-transform duration-500 animate-float-gentle dark:from-emerald-900 dark:to-teal-900">
                <img
                  src="/images/white-coat-2.jpg"
                  alt="Ali Tobbah Seidu"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="animate-slide-in-right">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed dark:text-gray-300">
                <Lightbulb className="inline-block w-5 h-5 mr-2 text-yellow-500 animate-pulse dark:text-yellow-300" />
                I am a dedicated fifth-year pharmacy student at KNUST Pharmacy School with a deep commitment to healthcare and patient welfare.
                Aspiring to become a clinical pharmacist dedicated to preventing human suffering through evidence-based pharmaceutical care.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed dark:text-gray-300">
                <Target className="inline-block w-5 h-5 mr-2 text-blue-500 animate-spin-slow dark:text-blue-400" />
                Passionate about diagnostic medicine and improving health outcomes through comprehensive pharmaceutical knowledge and research.
                Seeking opportunities to contribute to healthcare advancement while developing expertise in clinical pharmacy practice.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300 hover:scale-105 transform dark:bg-gray-700 dark:hover:bg-emerald-900">
                  <h3 className="font-semibold text-emerald-600 mb-2 dark:text-emerald-400">
                    <BookOpen className="inline-block w-4 h-4 mr-2" />
                    Languages
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">English (Native), Fante (Proficient)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300 hover:scale-105 transform dark:bg-gray-700 dark:hover:bg-emerald-900">
                  <h3 className="font-semibold text-emerald-600 mb-2 dark:text-emerald-400">
                    <Shield className="inline-block w-4 h-4 mr-2" />
                    Leadership
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">SRC Organizing Secretary, The Scientist Club Organizing Secretary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              <Briefcase className="inline-block w-8 h-8 mr-3 text-emerald-600 animate-bounce" />
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto animate-expand"></div>
          </div>
          <div className="space-y-8">
            {/* Erndom Pharmacy Annex */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 transform animate-slide-in-left">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <Briefcase className="text-emerald-600 mr-3 animate-pulse" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Intern Pharmacist</h3>
                      <p className="text-emerald-600 font-semibold">Erndom Pharmacy Annex</p>
                      <p className="text-gray-600">2021 - 2024</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Completed comprehensive pharmacy internship gaining hands-on experience</li>
                    <li>• Gained practical experience in pharmaceutical practice and patient care</li>
                    <li>• Maintained academic responsibilities while completing internship</li>
                  </ul>
                </div>
                <div className="lg:w-64 mt-6 lg:mt-0">
                  <div className="w-full h-40 rounded-lg overflow-hidden shadow-md hover:scale-110 transition-transform duration-300">
                    <img
                      src="/images/sds-page-5.jpg"
                      alt="Pharmacy Internship"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Abesam Chemist Limited */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 transform animate-slide-in-right">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="text-emerald-600 mr-3 animate-bounce" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Student Pharmacist</h3>
                      <p className="text-emerald-600 font-semibold">Abesam Chemist Limited</p>
                      <p className="text-gray-600">Ejisu</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Gained practical experience in community pharmacy operations</li>
                    <li>• Demonstrated ability to balance professional responsibilities with education</li>
                    <li>• Developed skills in medication dispensing and patient counseling</li>
                  </ul>
                </div>
                <div className="lg:w-64 mt-6 lg:mt-0">
                  <div className="w-full h-40 rounded-lg overflow-hidden shadow-md hover:scale-110 transition-transform duration-300">
                    <img
                      src="/images/sds-page-4.jpg"
                      alt="Community Pharmacy Experience"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              <FileText className="inline-block w-8 h-8 mr-3 text-emerald-600 animate-pulse" />
              Research & Projects
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto animate-expand"></div>
          </div>

          {/* Antiplasmodial Activity Project */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 transform animate-slide-in-up mb-8">
            <div className="flex items-center mb-6">
              <FileText className="text-emerald-600 mr-3 animate-bounce" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">
                Antiplasmodial Activity of Portulaca Oleracea in Plasmodium Berghei Infected Mice
              </h3>
            </div>
            <div className="mb-6">
              <p className="text-emerald-600 font-semibold mb-2">KNUST Faculty of Pharmacy</p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Led research project investigating natural antimalarial therapies to address growing resistance to orthodox medicines.
                Focused on developing safer, affordable treatment options for malaria, particularly for vulnerable populations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300 hover:scale-105 transform">
                <h4 className="font-semibold text-emerald-600 mb-2">
                  <Target className="inline-block w-4 h-4 mr-2" />
                  Research Focus
                </h4>
                <p className="text-gray-700 text-sm">Natural antimalarial therapies and drug resistance</p>
              </div>
              <div className="bg-white p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300 hover:scale-105 transform">
                <h4 className="font-semibold text-emerald-600 mb-2">
                  <Lightbulb className="inline-block w-4 h-4 mr-2" />
                  Methodology
                </h4>
                <p className="text-gray-700 text-sm">Microscopy and curative antimalarial models</p>
              </div>
              <div className="bg-white p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300 hover:scale-105 transform">
                <h4 className="font-semibold text-emerald-600 mb-2">
                  <Rocket className="inline-block w-4 h-4 mr-2" />
                  Impact
                </h4>
                <p className="text-gray-700 text-sm">Contributed to search for breakthrough malaria treatments</p>
              </div>
            </div>
          </div>

          {/* SDS-PAGE Electrophoresis Project */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 transform animate-slide-in-up">
            <div className="flex items-center mb-6">
              <FileText className="text-emerald-600 mr-3 animate-bounce" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">
                SDS-PAGE Electrophoresis Protein Analysis
              </h3>
            </div>
            <div className="mb-6">
              <p className="text-emerald-600 font-semibold mb-2">KNUST Faculty of Pharmacy</p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Participated in protein analysis research utilizing western blotting techniques and SDS-PAGE gel electrophoresis
                for sample processing and analysis.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300 hover:scale-105 transform">
                <h4 className="font-semibold text-emerald-600 mb-2">
                  <Target className="inline-block w-4 h-4 mr-2" />
                  Research Focus
                </h4>
                <p className="text-gray-700 text-sm">Protein analysis and separation techniques</p>
              </div>
              <div className="bg-white p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300 hover:scale-105 transform">
                <h4 className="font-semibold text-emerald-600 mb-2">
                  <Lightbulb className="inline-block w-4 h-4 mr-2" />
                  Technologies
                </h4>
                <p className="text-gray-700 text-sm">SDS-PAGE electrophoresis, Western blotting</p>
              </div>
              <div className="bg-white p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300 hover:scale-105 transform">
                <h4 className="font-semibold text-emerald-600 mb-2">
                  <Rocket className="inline-block w-4 h-4 mr-2" />
                  Skills Developed
                </h4>
                <p className="text-gray-700 text-sm">Advanced laboratory techniques and protein analysis</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <img src="/images/sds-page-1.jpg" alt="SDS-PAGE Analysis" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
              <img src="/images/sds-page-4.jpg" alt="Protein Analysis" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
              <img src="/images/sds-page-2.jpg" alt="SDS-PAGE Gel" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              <Zap className="inline-block w-8 h-8 mr-3 text-emerald-600 animate-pulse" />
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto animate-expand"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical & Professional */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 transform animate-slide-in-up">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors duration-300 animate-bounce-gentle">
                  <Briefcase className="text-blue-600 animate-pulse" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Technical & Professional</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Research Methodology</li>
                <li>• Quality Assurance</li>
                <li>• Data Analysis</li>
                <li>• Microscopy</li>
                <li>• Laboratory Techniques</li>
                <li>• Clinical Assessment</li>
              </ul>
            </div>

            {/* Interpersonal & Leadership */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 transform animate-slide-in-right">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-teal-200 transition-colors duration-300 animate-bounce-gentle">
                  <User className="text-teal-600 animate-pulse" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interpersonal & Leadership</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Teamwork and Collaboration</li>
                <li>• Patient Communication</li>
                <li>• Effective Communication</li>
                <li>• Leadership</li>
                <li>• Problem-solving</li>
                <li>• Organizational Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              <BookOpen className="inline-block w-8 h-8 mr-3 text-emerald-600 animate-pulse" />
              Education
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto animate-expand"></div>
          </div>
          <div className="space-y-8">
            {/* KNUST */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 transform animate-slide-in-left">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-emerald-600 mr-3 animate-bounce" size={28} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Doctor of Pharmacy (PharmD)</h3>
                  <p className="text-emerald-600 font-semibold">Kwame Nkrumah University of Science and Technology</p>
                  <p className="text-gray-600">Current CWA: 70.96</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300 hover:scale-105 transform">
                  <h4 className="font-semibold text-emerald-600 mb-2">
                    <Shield className="inline-block w-4 h-4 mr-2" />
                    Leadership Roles
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• SRC Organizing Secretary</li>
                    <li>• The Scientist Club Organizing Secretary</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300 hover:scale-105 transform">
                  <h4 className="font-semibold text-emerald-600 mb-2">
                    <Target className="inline-block w-4 h-4 mr-2" />
                    Coursework
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Pharmacology</li>
                    <li>• Anatomy</li>
                    <li>• Biochemistry</li>
                    <li>• Pathology</li>
                    <li>• Microbiology</li>
                    <li>• Clinical Therapeutics</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300 hover:scale-105 transform">
                  <h4 className="font-semibold text-emerald-600 mb-2">
                    <Rocket className="inline-block w-4 h-4 mr-2" />
                    Activities
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Research Projects</li>
                    <li>• Clinical Rotations</li>
                    <li>• Professional Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden dark:from-emerald-800 dark:to-teal-800">
        {/* Floating Contact Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <Mail className="w-6 h-6 text-emerald-200 opacity-30" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float-delayed">
            <Phone className="w-8 h-8 text-teal-200 opacity-25" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce-slow">
            <MapPin className="w-7 h-7 text-blue-200 opacity-30" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Send className="inline-block w-8 h-8 mr-3 animate-pulse" />
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-white mx-auto animate-expand"></div>
            <p className="text-xl text-emerald-100 mt-4 animate-fade-in-up-delayed">
              Let's connect and discuss opportunities in pharmaceutical care and research
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">
                <Sparkles className="inline-block w-6 h-6 mr-2 animate-pulse" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center hover:scale-105 transition-transform duration-300">
                  <Mail className="mr-4 animate-pulse" size={24} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:seidutobbah5@gmail.com" className="text-emerald-200 hover:text-white transition-all duration-300 hover:scale-110">
                      seidutobbah5@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center hover:scale-105 transition-transform duration-300">
                  <Phone className="mr-4 animate-bounce" size={24} />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+233245096290" className="text-emerald-200 hover:text-white transition-all duration-300 hover:scale-110">
                      +233 548043349
                    </a>
                  </div>
                </div>
                <div className="flex items-center hover:scale-105 transition-transform duration-300">
                  <MapPin className="mr-4 animate-pulse" size={24} />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-emerald-200">Ejisu, Ashanti Region</p>
                  </div>
                </div>
              </div>
            </div>
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
