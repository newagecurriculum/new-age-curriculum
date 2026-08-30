import { BookOpen } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary text-white rounded-md flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              New Age Curriculum LLC
            </span>
          </a>
          <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
            Educational tools and curriculum resources for teachers and schools. Creator of PEPackets.com.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition-colors">Products</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:info@pepackets.com" className="hover:text-white transition-colors break-all">
                info@pepackets.com
              </a>
            </li>
            <li>
              <a href="mailto:purchaseorder@pepackets.com" className="hover:text-white transition-colors break-all">
                purchaseorder@pepackets.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {currentYear} New Age Curriculum LLC. All rights reserved.</p>
        <p>Creator of <a href="https://www.pepackets.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">PEPackets.com</a></p>
      </div>
    </footer>
  );
}
