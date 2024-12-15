
import { Link } from './Link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" max-w-[80%] mx-auto bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ApexBart Solutions</h3>
            <p className="text-gray-400">
              Innovating AI and Multilingual Voice Technology
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/ai-automation">AI Automation</Link></li>
              <li><Link href="/services/voice-recording">Voice Recording</Link></li>
              <li><Link href="/services/translation">Translation</Link></li>
              <li><Link href="/services/content">Content Creation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com/apexbart" className="hover:text-blue-400">
                <Facebook />
              </a>
              <a href="https://instagram.com/apexbart" className="hover:text-pink-400">
                <Instagram />
              </a>
              <a href="https://twitter.com/ApexBart" className="hover:text-blue-300">
                <Twitter />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Email: contact@apexbart.xyz<br />
              Location: Phnom Penh, Cambodia
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ApexBart Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;