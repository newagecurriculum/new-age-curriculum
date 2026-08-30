import { ArrowRight, FileText, CheckCircle2, Shield, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-slate-50 -z-20"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 -z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start gap-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 border border-slate-200 text-slate-600 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              New Age Curriculum LLC
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Empowering educators with <span className="text-primary">practical resources.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              Educational tools and curriculum resources for teachers, schools, and students. We build high-quality structured materials so you can focus on teaching.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="https://www.pepackets.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
              >
                Visit PEPackets.com
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-slate-700 font-semibold text-lg border border-slate-200 transition-colors hover:bg-slate-50 active:bg-slate-100"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-white/50 bg-white">
            <img 
              src="/images/pepackets-payhip.png" 
              alt="PEPackets Printable PDF Library with 34 or more Physical Education sport and activity units" 
              className="w-full h-full object-cover object-center"
            />
            {/* Glassmorphism accent card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Current Product</p>
                  <p className="text-slate-600 text-sm">PEPackets for Middle & High School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-inner">
               <img 
                src="/images/pepackets-dashboard.webp" 
                alt="PEPackets teacher dashboard showing organized student submissions" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col items-start gap-6">
              <h2 className="text-sm font-bold tracking-wider text-primary uppercase">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Practical resources designed to help teachers save time.
              </h3>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
              <p className="text-lg text-slate-600 leading-relaxed">
                New Age Curriculum LLC creates high-quality educational resources that give students structured, meaningful learning activities. We know teachers are busy, so our materials are designed to be ready-to-use, clear, and comprehensive.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our current main product, <strong>PEPackets</strong>, supports middle school and high school Physical Education teachers across the country with reliable digital and printable resources, sub-plans, and daily lesson content.
              </p>
              <div className="flex items-center gap-4 mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100 w-full">
                <Shield className="w-8 h-8 text-primary shrink-0" />
                <p className="text-sm text-slate-700 font-medium">Committed to providing reliable curriculum resources for districts, principals, and educators.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Our Products</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tools for modern educators.</h3>
            <p className="text-lg text-slate-600">
              We focus on building robust, complete solutions for specific educational needs.
            </p>
          </div>

          {/* PEPackets Featured Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden flex flex-col lg:flex-row max-w-5xl mx-auto">
            <div className="lg:w-2/5 relative bg-slate-100 min-h-[300px]">
              <img 
                src="/images/pepackets-library.webp" 
                alt="PEPackets digital library with Physical Education packet resources" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-primary/90 backdrop-blur text-xs font-bold uppercase tracking-wider mb-2">
                  Current Product
                </span>
                <h4 className="text-3xl font-bold">PEPackets</h4>
              </div>
            </div>
            
            <div className="lg:w-3/5 p-8 md:p-12 flex flex-col">
              <h5 className="text-xl font-bold text-slate-900 mb-4">
                Physical Education resources for middle and high school teachers.
              </h5>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                PEPackets provides comprehensive reading and writing assignments, multiple choice quizzes, short answer questions, vocabulary activities, daily PE lesson plans, and alternative game formats. Everything is structured to ensure active learning.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Digital Online Version",
                  "Printable PDF Library",
                  "Close Reading Assignments",
                  "Sub-plan Resources",
                  "ELD Vocabulary",
                  "Performance Tasks"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-500">
                  <span className="block">Digital Version: $100/yr per teacher</span>
                  <span className="block">Printable Library: $450 one-time</span>
                </div>
                <a 
                  href="https://www.pepackets.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-white font-medium transition-transform hover:scale-105 active:scale-95 shadow-md"
                >
                  Visit PEPackets
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get in touch.</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Whether you are a teacher looking for resources, or a district processing an order, we are here to help. Reach out to the appropriate contact email below.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="mailto:info@pepackets.com"
              className="flex flex-col items-center p-8 bg-slate-50 rounded-3xl border border-slate-200 transition-colors hover:border-primary hover:bg-primary/5 group"
            >
              <h3 className="font-semibold text-slate-900 mb-2">General Questions</h3>
              <p className="text-primary font-medium group-hover:underline text-lg">info@pepackets.com</p>
            </a>
            
            <a 
              href="mailto:purchaseorder@pepackets.com"
              className="flex flex-col items-center p-8 bg-slate-50 rounded-3xl border border-slate-200 transition-colors hover:border-primary hover:bg-primary/5 group"
            >
              <h3 className="font-semibold text-slate-900 mb-2">Purchase Orders for PEPackets</h3>
              <p className="text-primary font-medium group-hover:underline text-lg break-all">purchaseorder@pepackets.com</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
