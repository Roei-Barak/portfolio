import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ChevronRight,
  Terminal,
  Server,
  Shield,
  Cpu,
  ExternalLink
} from "lucide-react";
import React from "react";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white font-sans">
      {/* Header */}
      <header>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white animate-fade-in bg-clip-text">
              Roei Barak
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-blue-200 animate-fade-in-delay-1">
              Backend & DevOps Engineer | Embedded Systems | IT & Security Expert
            </h2>
            <div className="flex flex-wrap justify-center gap-6 text-lg animate-fade-in-delay-2">
              <a href="mailto:Roeibarak123@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 text-white glass-effect">
                <Mail size={20} /> Roeibarak123@gmail.com
              </a>
              <a href="tel:050-5854505" className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 text-white glass-effect">
                <Phone size={20} /> 050-5854505
              </a>
              <span className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-10 rounded-full text-white glass-effect">
                <MapPin size={20} /> Israel
              </span>
            </div>
            <div className="mt-8 flex justify-center gap-6 animate-fade-in-delay-3">
              <a href="https://github.com" className="p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 text-white glass-effect">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 text-white glass-effect">
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
              Professional Summary <Terminal size={24} className="text-blue-600" />
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
              {[
                {
                  icon: <Terminal className="text-blue-600 w-8 h-8" />,
                  title: "Backend & Programming",
                  items: [
                    "Python, Java, C#, C, C++",
                    "REST APIs, Multithreaded Programming",
                    "Python, PowerShell, Bash Scripting",
                  ]
                },
                {
                  icon: <Server className="text-blue-600 w-8 h-8" />,
                  title: "DevOps & Infrastructure",
                  items: [
                    "GitHub Actions, Jenkins",
                    "Virtual Machines, Docker",
                    "Active Directory, Windows & Linux"
                  ]
                },
                {
                  icon: <Shield className="text-blue-600 w-8 h-8" />,
                  title: "Networking & Security",
                  items: [
                    "HTTP, DNS, VPN Protocols",
                    "CIA Triad Implementation",
                    "Kali Linux, Wireshark"
                  ]
                },
                {
                  icon: <Cpu className="text-blue-600 w-8 h-8" />,
                  title: "Embedded Systems",
                  items: [
                    "ESP32, Arduino",
                    "Raspberry Pi",
                    "Firmware Debugging"
                  ]
                }
              ].map((category, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-xl card-hover border-t-4 border-blue-600">
                  <div className="flex items-center gap-3 mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="skill-item flex items-center gap-2 text-gray-700">
                        <ChevronRight size={16} className="text-blue-600" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Work Experience</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Firmware Debug Engineer",
                  company: "Intel (CCE CSME FW Debug Team)",
                  years: "2022 - Present",
                  icon: <Server size={18} />,
                  bullets: [
                    "Debugged and tested firmware-level issues across diverse system environments",
                    "Collaborated with cross-functional teams to diagnose system-level failures",
                    "Supported internal automation tools for testing and diagnostics"
                  ]
                },
                {
                  title: "IT Technical Support",
                  company: "Kramer Electronics",
                  years: "2020 - 2022",
                  icon: <Terminal size={18} />,
                  bullets: [
                    "Deployed Windows systems and provided support for end-user issues",
                    "Diagnosed and resolved technical incidents related to applications and hardware"
                  ]
                },
                {
                  title: "IT Help Desk",
                  company: "Ophir Optronics Solutions Ltd",
                  years: "2019 - 2020",
                  icon: <Terminal size={18} />,
                  bullets: [
                    "Managed and maintained Active Directory users and computers",
                    "Handled firewall and VPN configurations",
                    "Supported global IT infrastructure and software deployments"
                  ]
                }
              ].map((job, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-xl card-hover relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                  <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
                  <div className="text-blue-600 mb-4 flex items-center gap-2">
                    {job.icon} {job.company} | {job.years}
                  </div>
                  <ul className="space-y-3">
                    {job.bullets.map((b, idx) => (
                      <li key={idx} className="skill-item flex items-center gap-2 text-gray-700">
                        <ChevronRight size={16} className="text-blue-600" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Education</h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl card-hover">
              <h3 className="text-2xl font-semibold text-gray-800">B.Sc. in Computer Science</h3>
              <div className="text-blue-600 mb-4 flex items-center gap-2">
                <ExternalLink size={18} /> Lev Academic Center - JCT
              </div>
              <p className="text-gray-700 mb-6">Specialization in Cybersecurity</p>
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Additional Certifications</h4>
                <ul className="space-y-3">
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" /> MCSA course in collaboration with 8200 Unit (Outstanding Commanders Program)
                  </li>
                  <li className="skill-item flex items-center gap-2 text-gray-700">
                    <ChevronRight size={16} className="text-blue-600" /> Udemy Course: Learn Python & Ethical Hacking
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
                <Shield size={18} /> IDF – Paratroopers Brigade
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
              <a href="mailto:Roeibarak123@gmail.com" className="p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110">
                <Mail size={24} />
              </a>
              <a href="https://github.com" className="p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-sm text-blue-200">© 2024 Roei Barak. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
