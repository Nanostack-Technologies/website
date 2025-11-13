import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img src="images/logo.jpg" className="w-12 h-12 rounded" alt="NanoStack" />
            <h3 className="text-2xl font-bold text-blue-500">NanoStack Technologies</h3>
          </div>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Transforming businesses through innovative web and automation
            solutions.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li 
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li 
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => scrollToSection("expertise")}
            >
              Services
            </li>
            <li 
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => scrollToSection("projects")}
            >
              Portfolio
            </li>
            <li 
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li 
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => scrollToSection("expertise")}
            >
              Web Development
            </li>
            <li 
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => scrollToSection("expertise")}
            >
              Automation
            </li>
            <li 
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => scrollToSection("expertise")}
            >
              Data Management
            </li>
            <li 
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => scrollToSection("expertise")}
            >
              Security
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>

          <ul className="space-y-4 text-gray-300">
            {/* Email */}
            <li className="flex items-center gap-3">
              <Mail className="text-cyan-400 w-5 h-5" />
              <a href="mailto:info.nanostack@gmail.com" className="hover:text-blue-400">
                info.nanostack@gmail.com
              </a>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <Phone className="text-cyan-400 w-5 h-5" />
              <a href="tel:+919979412610" className="hover:text-blue-400">
                +91 99794 12610
              </a>
            </li>

            {/* Location */}
            <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
              <MapPin className="text-cyan-400 w-5 h-5" />
              RK Iconic - B, Rajkot, Gujarat
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 my-10"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2025 NanoStack Technologies. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">

        {/* LinkedIn */}
        <FooterIcon 
            link="https://www.linkedin.com/company/nano-stack-technologies" 
            icon={<Linkedin size={18} />} 
        />

        {/* Instagram */}   
        <FooterIcon 
            link="https://www.instagram.com/nanostack_technologies" 
            icon={
            <img 
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" 
                alt="Instagram" 
                className="w-5 h-5"
            />
            } 
        />

        {/* Github */}
        <FooterIcon 
            link="https://github.com/Nanostack-Technologies/free-templates-by-NanoStack-Technologies.git" 
            icon={<Github size={18} />} 
        />

        {/* WhatsApp */}
        <FooterIcon 
            link="https://wa.me/919979412610" 
            icon={
            <img 
                src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" 
                alt="WhatsApp" 
                className="w-5 h-5"
            />
            } 
        />

        </div>
      </div>
    </footer>
  );
}

/* Small Reusable Icon Button */
function FooterIcon({ icon, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 border border-gray-800 
                 hover:border-blue-500 cursor-pointer transition-all"
    >
      {icon}
    </motion.a>
  );
}
