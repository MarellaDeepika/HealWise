
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Healwise</h3>
            <p className="text-gray-300 mb-4">
              Making quality healthcare accessible to everyone, everywhere.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Patients</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white transition-colors">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link to="/specialities" className="text-gray-300 hover:text-white transition-colors">
                  Specialties
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-white transition-colors">
                  Health Articles
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Doctors</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Join as a Doctor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Healwise for Clinics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Partner with Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-300">
                <Mail size={16} /> support@healwise.com
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Phone size={16} /> +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Healwise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
