import { Facebook, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="bg-secondary-900 text-white py-8">
    <div className="flex justify-center space-x-4">
      <a
        href="#"
        className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-accent-600 transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="https://www.instagram.com/techpulse_officiall/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-accent-600 transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  </footer>
);

export default Footer;