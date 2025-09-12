import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Calendar, Award, Briefcase, GraduationCap, Code, User, Download } from 'lucide-react';
import Resume from "/Naveen_Sunkara_Resume.pdf";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-200">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Naveen Sunkara
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Experience</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gray-800">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Naveen Sunkara</span>
                </h1>
                <h2 className="text-2xl text-gray-700 font-medium">Aspiring Software Engineer & Data Analyst</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Java Full Stack Developer with hands-on experience and a strong foundation in data science and machine learning. 
                  Passionate about creating innovative solutions in dynamic environments.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="mailto:naveensunkara4000@gmail.com" 
                   className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  <Mail size={20} />
                  <span>Get In Touch</span>
              </a>
               
                <a
  href={Resume}
  download="Naveen_Sunkara_Resume.pdf"
  className="inline-flex items-center space-x-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
>
  <Download size={20} />
  <span>Download Resume</span>
</a>
              </div>

              <div className="flex space-x-6">
                <a href="mailto:naveensunkara4000@gmail.com" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://linkedin.com/in/naveen-sunkara-440378277" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/naveensunkara4000" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2x1">
                  <div className="w-full h-full rounded-full bg-white p-1">
                    <img 
                      src="/Image.jpg" 
                      alt="Naveen Sunkara - Profile" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                  <Code className="text-blue-600" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-purple-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
               <p className="text-gray-700 max-w-2xl mx-auto">
                 Aspiring Software Engineer and Data Analyst with experience in Java Full Stack,Data Science, and 
                 Machine Learning. Skilled in building scalable applications and turning data into actionable insights 
                 through real-world projects and internships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">Professional Journey</h3>
                <p className="text-black-900 leading-relaxed">
                  Recently Graduated as M.Sc. in Data Science at GITAM University while building practical experience 
                  as a Software Associate at Capgemini Technology Services. My journey combines academic excellence 
                  with hands-on industry experience.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-white to-blue-300 p-4 rounded-1g border border-blue-100">
                  <h4 className="font-semibold text-black-1000">Education</h4>
                  <p className="text-black-600">M.Sc. Data Science</p>
                  <p className="text-sm text-black-600">GITAM University</p>
                </div>
                <div className="bg-gradient-to-br from-white to-blue-300 p-4 rounded-lg border border-purple-100">
                  <h4 className="font-semibold text-black-1000">Experience</h4>
                  <p className="text-black-600">Software Associate</p>
                  <p className="text-sm text-black-600">Capgemini</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/1753535694649.jpg" 
                  alt="Graduation Day" 
                  className="w-72 h-72 object-cover rounded-2xl shadow-2xl border-4 border-green-200"
                />
                <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg p-3 shadow-1g">
                  <GraduationCap className="text-white" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="technical" className="py-20 bg-gradient-to-br from-gray-50 to-purple-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
            <p className="text-gray-700">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-blue-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="bg-blue-300 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-white-900" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'SQL'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium border border-blue-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-green-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="bg-green-300 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-white-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'Microservices', 'Hibernate', 'REST APIs', 'Git','MS Office'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium border border-green-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-purple-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="bg-purple-300 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-white-800" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Data Analysis', 'Deep Learning', 'Blockchain', 'Artificial Intelligence (AI)', 'Big Data','Web Programming','Data Mining'].map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium border border-purple-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-purple-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
            <p className="text-gray-700">My professional journey </p>
          </div>

          <div className="space-y-8">
            {/* Current Role */}
            <div className="bg-purple-100 p-9 rounded-2xl shadow-lg border border-purplr-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-semibold text-gray-800">Software Associate</h3>
                    <div className="flex items-center text-gray-700 text-sm">
                      <Calendar size={16} className="mr-1" />
                      Aug 27, 2024 – Dec 10, 2024
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700 mb-4">
                    <MapPin size={16} className="mr-1" />
                    Capgemini Technology Services India Limited, Pune, Maharashtra
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Hands-on Java Full Stack training (Spring Boot, Microservices)</li>
                    <li>• Developed backend APIs and worked in Agile sprints</li>
                    <li>• Exposure to REST API design, code reviews, and Git version control</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Internships */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-100 p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Google AI/ML Internship</h4>
                <p className="text-gray-900 mb-2">EDU Skills</p>
                <p className="text-sm text-gray-800">Gained hands-on experience in machine learning models, data analytics, and real-world AI applications, strengthening problem-solving and technical skills.</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Data Analyst Internship</h4>
                <p className="text-gray-900 mb-2">CodTech IT Solutions</p>
                <p className="text-sm text-gray-900">I worked on Exploratory Data Analysis (EDA) to identify trends and patterns in datasets and applied Predictive Modeling with Linear Regression to generate actionable insights for decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
            <p className="text-gray-700">Academic background and achievements</p>
          </div>

          <div className="space-y-6">
            {[
              { course: 'M.Sc. Data Science', institution: 'GITAM University Visakhapatnam', year: '2025', cgpa: '7.04' },
              { course: 'B.Sc.', institution: 'Aditya Degree College', year: '2022', cgpa: '7.67' },
              { course: 'Intermediate', institution: 'NRI Junior College', year: '2019', cgpa: '8.61' },
              { course: 'SSC', institution: 'Gnana Jyothi E.M School', year: '2017', cgpa: '8.50' }
            ].map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-300 w-12 h-12 rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-black-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{edu.course}</h3>
                      <p className="text-gray-700">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-blue-600">{edu.cgpa} CGPA</p>
                    <p className="text-gray-600">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
            <p className="text-gray-700">Some of my notable work and contributions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-blue-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Developer Community System</h3>
              <p className="text-gray-700 mb-4">
                Built using Java, Spring Boot, and Microservices architecture. Features user registration, 
                project management, and real-time collaboration capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring Boot', 'Microservices','SQL'].map((tech) => (
                  <span key={tech} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-purple-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant Vehicle Service Locator</h3>
              <p className="text-gray-700 mb-4">
                Developed using JavaScript, PHP, and Google Maps API. Includes predictive analytics 
                and real-time tracking for instant vehicle service location.
              </p>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'PHP','SQL', 'Google Maps API'].map((tech) => (
                  <span key={tech} className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium border border-purple-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-200">
              <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">CIFAR-10 Image Classification (CNN, TensorFlow/Keras)</h3>
              <p className="text-gray-700 mb-4">
                Built and trained a CNN model using TensorFlow/Keras on the CIFAR-10 dataset, achieving around 72% accuracy in image classification.
              </p>
               <div className="flex flex-wrap gap-2">
                {['Python', 'TensorFlow', 'Keras','NumPy','Pandas'].map((tech) => (
                  <span key={tech} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-green-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
            <p className="text-gray-700">Professional certifications and achievements</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'IBM Data Science', provider: 'IBM', color: 'blue' },
              { title: 'Google Foundations of Data', provider: 'Google', color: 'green' },
              { title: 'Agile Software Development', provider: 'University of Minnesota', color: 'purple' },
              { title: ' Google Analytics ', provider: 'Coursera', color: 'blue' },
              { title: 'Generative AI ', provider: 'Coursera', color: 'green' }
      
            ].map((cert, index) => (
              <div key={index} className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-${cert.color}-200`}>
                <div className={`bg-${cert.color}-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Award className={`text-${cert.color}-600`} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-gray-700">{cert.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-purple-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
            <p className="text-gray-700">I'm always open to discussing new opportunities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:naveensunkara4000@gmail.com" 
               className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center group border border-blue-100 hover:border-blue-200">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-700">naveensunkara4000@gmail.com</p>
            </a>

            <a href="tel:+919989950421" 
               className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center group border border-green-100 hover:border-green-200">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-700">+91-9989950421</p>
            </a>

            <a href="https://linkedin.com/in/naveen-sunkara-440378277" 
               className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center group border border-purple-100 hover:border-purple-200">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">LinkedIn</h3>
              <p className="text-gray-700">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Naveen Sunkara</h3>
            <p className="text-gray-200 mb-4">Aspiring Software Engineer | Java Full Stack Developer | Data Analyst</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:naveensunkara4000@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/naveen-sunkara-440378277" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/naveensunkara4000" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              © 2025 Naveen Sunkara. Designed with passion and purpose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;