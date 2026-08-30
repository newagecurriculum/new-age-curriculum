import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-2"
          aria-label="New Age Curriculum LLC Home"
        >
          <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center shadow-md">
            <BookOpen className="w-6 h-6" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900 hidden sm:block">
            New Age Curriculum
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            About
          </a>
          <a href="#products" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Products
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Contact
          </a>
          <a
            href="https://www.pepackets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-transform hover:scale-105 active:scale-95 shadow-md shadow-primary/20"
          >
            Visit PEPackets
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <a
            href="#about"
            className="text-lg font-medium text-slate-800 p-2 hover:bg-slate-50 rounded-md"
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a
            href="#products"
            className="text-lg font-medium text-slate-800 p-2 hover:bg-slate-50 rounded-md"
            onClick={closeMobileMenu}
          >
            Products
          </a>
          <a
            href="#contact"
            className="text-lg font-medium text-slate-800 p-2 hover:bg-slate-50 rounded-md"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
          <a
            href="https://www.pepackets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center h-12 w-full rounded-full bg-primary text-primary-foreground font-medium text-lg shadow-md"
            onClick={closeMobileMenu}
          >
            Visit PEPackets
          </a>
        </div>
      )}
    </header>
  );
}
