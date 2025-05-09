"use client"
import Head from 'next/head';
import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ChartBackground from './ChartBackground'

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Black Holdings | Strategic Investments</title>
        <meta name="description" content="Black Holdings - Empowering Growth Through Strategic Investments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center py-5 px-6 md:px-16 border-b border-gray-800">
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-tight">BLACK HOLDINGS</span>
        </div>
        
        <div className="hidden md:flex space-x-10">
          <a href="#services" className="hover:text-[#08a045] transition-colors">What We Offer</a>
          <a href="#about" className="hover:text-[#08a045] transition-colors">Blog</a>
          <a href="#about" className="hover:text-[#08a045] transition-colors">About Us</a>
          <a href="#contact" className="hover:text-[#08a045] transition-colors">Contact Us</a>
        </div>
        
        <div className="flex space-x-4 items-center">
          <a href="/login" className="hover:text-[#08a045]">Log In</a>
          <a href="/get-started" className="bg-[#08a045] hover:bg-[#08a008] text-white px-4 py-2 rounded-md transition-colors">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative">
  
      <ChartBackground />

        {/* Main Hero Content */}
        <div className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            When your portfolio
            <br />
            needs <span className="text-[#08a045]">growth</span>
            <br />
            Think Black.
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center mt-16 space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-[#08a045]" size={20} />
              <span>The Future Is Under Construction. And It’s <span className="text-[#08a045]">Classified.</span></span>
            </div>
            
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center mt-16 space-y-4 md:space-y-0 md:space-x-8">
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="/learn-more" className="flex items-center justify-center space-x-2 border border-white px-6 py-3 rounded-md hover:text-black hover:bg-white hover:bg-opacity-10 transition-colors">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </main>
      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to accelerate your growth?
    </h2>
    <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
      Join the elite portfolio of companies backed by Black Holdings
    </p>

    <form onSubmit={handleLogin} className="flex flex-col items-center space-y-4 w-full">
      <input
        id="email"
        type="email"
        placeholder="Email"
        required
        className="px-4 py-3 w-full md:w-96 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08a045]"
      />
      <input
        id="password"
        type="password"
        placeholder="Password"
        required
        className="px-4 py-3 w-full md:w-96 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08a045]"
      />
      <button
        type="submit"
        className="px-6 py-3 w-full md:w-96 bg-[#08a045] text-white rounded-md hover:bg-[#08a045] transition-colors"
      >
        Login
      </button>
    </form>
  </div>
  </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">BLACK HOLDINGS</h3>
              <p className="text-gray-400">The Holdings Company of Innovative Projects</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400">Classified</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400">Team</a></li>
                <li><a href="#" className="hover:text-purple-400">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400">News</a></li>
              </ul>
            </div>
            
          </div>
          <div className="border-t border-gray-800 mt-10 pt-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">© 2025 Black Holdings. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-400">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
function handleLogin(event) {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  // Handle login logic here
  console.log('Email:', email);
  console.log('Password:', password);
}