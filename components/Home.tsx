
import React from 'react';
import { PERSONAL_BIO } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="pt-40 pb-20 max-w-5xl mx-auto px-6 space-y-40">
      {/* Hero */}
      <section className="min-h-[50vh] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <div className="space-y-10">
          
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight leading-[0.9]">
            Logic <span className="math-font italic text-gray-500">&</span><br />
            <span className="gradient-text">Computation.</span>
          </h1>
          
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
            Exploring the intersection of abstract theory and practical systems.
          </p>
        </div>
      </section>

      {/* About (Integrated) */}
      <section className="grid md:grid-cols-12 gap-16 animate-in fade-in duration-1000 delay-500">
        <div className="md:col-span-4">
          <div className="aspect-[4/5] rounded-2xl glass overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
              <span className="text-[10px] font-bold uppercase tracking-widest">Portrait</span>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-8 math-font italic text-white">The Narrative</h2>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed font-light whitespace-pre-line">
              {PERSONAL_BIO}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
