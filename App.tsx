
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.tsx';
import Home from './components/Home.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="py-20 px-6 border-t border-white/5 bg-black/20">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
              © {new Date().getFullYear()} — Mathematics & Computational Science
            </div>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
              <a href="mailto:hello@example.com" className="hover:text-blue-400 transition-colors">Email</a>
              <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
