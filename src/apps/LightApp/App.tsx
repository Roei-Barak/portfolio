import React from 'react';
import './index.css';

import { Github, Linkedin, Mail, Phone, MapPin, Download, Terminal, Shield, Cpu, Server, ExternalLink, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 animate-gradient"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white animate-fade-in bg-clip-text">
              Roei Barak
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-blue-200 animate-fade-in-delay-1">
              Backend & DevOps Engineer | Embedded Systems | IT & Security Expert
            </h2>
            <div className="flex flex-wrap justify-center gap-6 text-lg animate-fade-in-delay-2">
              <a href="mailto:Roeibarak123@gmail.com" 
                className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 text-white glass-effect">
                <Mail size={20} /> Roeibarak123@gmail.com
              </a>
              <a href="tel:050-5854505" 
                className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 text-white glass-effect">
                <Phone size={20} /> 050-5854505
              </a>
              <span className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-10 rounded-full text-white glass-effect">
                <MapPin size={20} /> Israel
              </span>
            </div>
            <div className="mt-8 flex justify-center gap-6 animate-fade-in-delay-3">
              <a href="https://github.com" 
                className="p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 text-white glass-effect">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" 
                className="p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 text-white glass-effect">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight size={40} className="text-white opacity-50 rotate-90" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Professional Summary */}
          <section className="bg-white rounded-2xl p-8 shadow-xl card-hover">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              Professional Summary
              <Terminal size={24} className="text-blue-600" />
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Curious and highly motivated engineer with a strong foundation in backend development, DevOps, and embedded systems. 
              Over 4 years of hands-on experience in IT and system administration, and recent experience in firmware debugging at Intel. 
              Adept in scripting, automation, and secure software practices. Passionate about backend technologies, infrastructure reliability, 
              and learning new tools and paradigms.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl card-hover border-t-4 border-blue-600">
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="text-blue-600 w-8 h-8" />
                  <h3 className="text-2xl font-semibold">Backend & Programming</h3>
                </div>
                <ul className="space-y-4">
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Python, Java, C#, C, C++
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    REST APIs, Multithreaded Programming
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Python, PowerShell, Bash Scripting
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl card-hover border-t-4 border-blue-600">
                <div className="flex items-center gap-3 mb-6">
                  <Server className="text-blue-600 w-8 h-8" />
                  <h3 className="text-2xl font-semibold">DevOps & Infrastructure</h3>
                </div>
                <ul className="space-y-4">
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    GitHub Actions, Jenkins
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Virtual Machines, Docker
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Active Directory, Windows & Linux
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl card-hover border-t-4 border-blue-600">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-blue-600 w-8 h-8" />
                  <h3 className="text-2xl font-semibold">Networking & Security</h3>
                </div>
                <ul className="space-y-4">
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    HTTP, DNS, VPN Protocols
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    CIA Triad Implementation
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Kali Linux, Wireshark
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl card-hover border-t-4 border-blue-600">
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="text-blue-600 w-8 h-8" />
                  <h3 className="text-2xl font-semibold">Embedded Systems</h3>
                </div>
                <ul className="space-y-4">
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    ESP32, Arduino
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Raspberry Pi
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Firmware Debugging
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Work Experience</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl card-hover relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                <h3 className="text-2xl font-semibold text-gray-800">Firmware Debug Engineer</h3>
                <div className="text-blue-600 mb-4 flex items-center gap-2">
                  <Server size={18} />
                  Intel (CCE CSME FW Debug Team) | 2022 - Present
                </div>
                <ul className="space-y-3">
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Debugged and tested firmware-level issues across diverse system environments
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Collaborated with cross-functional teams to diagnose system-level failures
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Supported internal automation tools for testing and diagnostics
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl card-hover relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                <h3 className="text-2xl font-semibold text-gray-800">IT Technical Support</h3>
                <div className="text-blue-600 mb-4 flex items-center gap-2">
                  <Terminal size={18} />
                  Kramer Electronics | 2020 - 2022
                </div>
                <ul className="space-y-3">
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Deployed Windows systems and provided support for end-user issues
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Diagnosed and resolved technical incidents related to applications and hardware
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl card-hover relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                <h3 className="text-2xl font-semibold text-gray-800">IT Help Desk</h3>
                <div className="text-blue-600 mb-4 flex items-center gap-2">
                  <Terminal size={18} />
                  Ophir Optronics Solutions Ltd | 2019 - 2020
                </div>
                <ul className="space-y-3">
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Managed and maintained Active Directory users and computers
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Handled firewall and VPN configurations
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Supported global IT infrastructure and software deployments
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Education</h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl card-hover">
              <h3 className="text-2xl font-semibold text-gray-800">B.Sc. in Computer Science</h3>
              <div className="text-blue-600 mb-4 flex items-center gap-2">
                <ExternalLink size={18} />
                Lev Academic Center - JCT
              </div>
              <p className="text-gray-700 mb-6">Specialization in Cybersecurity</p>
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Additional Certifications</h4>
                <ul className="space-y-3">
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    MCSA course in collaboration with 8200 Unit (Outstanding Commanders Program)
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" />
                    Udemy Course: Learn Python & Ethical Hacking
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Military Service */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Military Service</h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl card-hover">
              <h3 className="text-2xl font-semibold text-gray-800">Combat Squad Commander</h3>
              <div className="text-blue-600 mb-4 flex items-center gap-2">
                <Shield size={18} />
                IDF – Paratroopers Brigade
              </div>
              <p className="text-gray-700">Responsible for tactical operations and team leadership</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:Roeibarak123@gmail.com" 
                className="p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110">
                <Mail size={24} />
              </a>
              <a href="https://github.com" 
                className="p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" 
                className="p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-sm text-blue-200">© 2024 Roei Barak. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;