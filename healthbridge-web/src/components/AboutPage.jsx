import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              About ReachMed
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-red-600 mx-auto mb-12"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </div>
        </section>
        
        {/* Who We Are */}
        <section className="py-8 md:py-12">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6">
                ReachMed is a healthcare technology startup founded in 2025 with a simple but powerful mission: to bridge the gap between quality healthcare information and the communities that need it most. We believe that everyone deserves access to reliable medical guidance—regardless of their internet connectivity or technological resources.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Born in the heart of Texas and inspired by global healthcare challenges, we're building solutions that work where others don't—in rural areas, developing regions, and anywhere traditional telehealth services fall short.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <p className="text-xl md:text-2xl font-medium text-gray-800 italic">
                  "To make reliable healthcare guidance accessible to everyone, everywhere—even without an internet connection."
                </p>
              </div>
              <p className="text-lg text-gray-700">
                We're committed to breaking down the technological barriers that prevent billions of people from accessing basic healthcare information. By meeting people where they are—with the technology they already have—we're creating a more equitable healthcare landscape for communities worldwide.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* The Problem We're Solving */}
        <section className="py-8 md:py-12">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Problem We're Solving</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Divide in Healthcare</h3>
                  <p className="text-gray-700">
                    While telehealth has revolutionized healthcare delivery in connected communities, over 3 billion people worldwide still lack reliable internet access. For them, the digital health revolution might as well not exist.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">App-Centric Solutions Fall Short</h3>
                  <p className="text-gray-700">
                    Most digital health platforms require smartphones, data plans, and technical literacy—resources that aren't universal. When health emergencies strike in underserved areas, these high-tech solutions are inaccessible precisely when they're needed most.
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                The result is a widening healthcare gap where those with the fewest resources also have the least access to medical information and guidance. This isn't just inconvenient—it can be life-threatening when basic medical questions go unanswered.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Solution */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">SMS-First Healthcare Access</h3>
                <p className="text-gray-700 mb-4">
                  ReachMed has developed a proprietary SMS-based system that works on any mobile phone—no smartphone, app, or internet connection required. Users simply text their health questions to our service and receive medically-reviewed responses within minutes.
                </p>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-2">How It Works:</h4>
                    <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                      <li>Send a text with your health question</li>
                      <li>Our system analyzes your query</li>
                      <li>AI-assisted triage determines urgency</li>
                      <li>You receive clear, actionable guidance</li>
                      <li>Follow-up questions are encouraged</li>
                    </ol>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Works without internet</li>
                      <li>Compatible with basic phones</li>
                      <li>Available in multiple languages</li>
                      <li>Free for users in underserved areas</li>
                      <li>Medically reviewed responses</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                By leveraging existing cellular networks and basic SMS technology, we've created a solution that reaches communities where other digital health platforms simply can't operate. It's not about cutting-edge technology—it's about appropriate technology that actually works for the people who need it most.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Founder */}
        <section className="py-8 md:py-12">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Founder</h2>
              <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                <div className="md:w-1/3">
                  <img 
                    src="/andrew-vong.jpg" 
                    alt="Andrew Vong, Founder of ReachMed" 
                    className="rounded-lg shadow-md w-full max-w-xs mx-auto"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Andrew Vong</h3>
                  <p className="text-gray-600 mb-4">Founder & CEO | Computer Science Student at Texas A&M University</p>
                  <p className="text-gray-700 mb-4">
                    Andrew founded ReachMed in 2025 during his sophomore year at Texas A&M University. His inspiration came from witnessing firsthand the healthcare challenges faced by rural communities in Texas and during volunteer trips to Southeast Asia.
                  </p>
                  <p className="text-gray-700">
                    "I realized that while we're building increasingly sophisticated healthcare apps and platforms, we're leaving behind the billions of people who don't have reliable internet or smartphones. The solution wasn't to create another app—it was to meet people where they are, with technology they already have and know how to use."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* What Sets Us Apart */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Universal Accessibility</h3>
                  <p className="text-gray-700">
                    While others build for the connected world, we design for everyone. Our SMS-based system works on any mobile phone, in any location with even minimal cell service.
                  </p>
                </div>
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Human-Centered Design</h3>
                  <p className="text-gray-700">
                    We prioritize simplicity and clarity in every interaction. No technical knowledge required—if you can send a text message, you can use ReachMed.
                  </p>
                </div>
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Bridging Technologies</h3>
                  <p className="text-gray-700">
                    We combine advanced AI and medical expertise on our end with basic SMS on the user's end—creating a bridge between cutting-edge and accessible technologies.
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                Our approach isn't about replacing doctors or existing healthcare systems—it's about extending their reach to communities that have been left behind by the digital health revolution. We believe that innovation isn't always about creating the newest technology, but about applying technology in new ways to solve real human problems.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us in Making Healthcare Accessible to All</h2>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                Whether you're a healthcare provider, NGO, community leader, or potential partner, we invite you to join us in our mission to bridge the healthcare gap.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Partner With Us
                </Link>
                <Link 
                  to="/chat" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Try Our Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default AboutPage;
