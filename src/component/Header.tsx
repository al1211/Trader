import React from 'react'

const Header = () => {
  return (
 <header className="bg-slate-900 shadow-md">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between h-16">
      
     
      <div className="text-xl font-bold text-blue-500">
        SpikiTech
      </div>

     
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-300 hover:text-blue-400 font-medium transition">
          Home
        </a>
        <a href="#" className="text-gray-300 hover:text-blue-400 font-medium transition">
          Services
        </a>
        <a href="#" className="text-gray-300 hover:text-blue-400 font-medium transition">
          Platform
        </a>
        <a href="#" className="text-gray-300 hover:text-blue-400 font-medium transition">
          Contest
        </a>
        <a href="#" className="text-gray-300 hover:text-blue-400 font-medium transition">
          Social
        </a>
      </nav>

     
      <div className="hidden md:block">
        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header
