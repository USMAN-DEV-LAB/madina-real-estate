import { useState } from 'react'

const tabs = ['Buy', 'Rent', 'Renovation']
const hashtags = ['#Houses in Garden West', '#Plots near Fowara Chowk', '#For Rent']

export default function Hero() {
  const [activeTab, setActiveTab] = useState('Buy')

  return (
    <section id="home" className="relative overflow-hidden min-h-[560px] md:min-h-[640px] flex flex-col justify-end bg-navy">
      {/* Background Image - Smooth Ken Burns Slow Zoom */}
      <img
        src="/hero-bg.png"
        alt="Al Madina Real Estate"
        className="absolute inset-0 w-full h-full object-cover object-top animate-slow-zoom origin-top"
        onError={(e) => {
          if (!e.currentTarget.src.endsWith('.jpeg')) {
            e.currentTarget.src = '/hero-bg.jpeg'
          } else if (!e.currentTarget.src.endsWith('.jpg')) {
            e.currentTarget.src = '/hero-bg.jpg'
          }
        }}
      />

      {/* Top spacing area to push the widget down and show house & logo */}
      <div className="relative pt-48 sm:pt-64 md:pt-72" />

      {/* Search widget — Transparent Glassmorphic Design */}
      <div className="relative max-w-3xl mx-auto px-4 pb-4 md:pb-6 w-full animate-fade-in-up">
        <div className="rounded-2xl shadow-2xl overflow-hidden border-2 border-white/40 hover:border-gold/60 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 ring-1 ring-black/20">
          {/* Top: tabs + city/location/find on translucent dark glass */}
          <div className="bg-navy-dark/75 backdrop-blur-lg px-5 pt-4 pb-5">
            <div className="flex gap-1.5 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 active:scale-95 ${
                    activeTab === tab
                      ? 'bg-gold text-navy-dark shadow-md scale-105'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
              <div>
                <label className="text-[10px] tracking-wide text-gold uppercase font-semibold">City</label>
                <div className="mt-1 flex items-center gap-1.5 bg-navy/60 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2.5 transition-all focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/30">
                  <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <select className="bg-transparent text-sm text-white w-full outline-none cursor-pointer">
                    <option className="text-black">Faisalabad</option>
                  </select>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="text-[10px] tracking-wide text-gold uppercase font-semibold">Location</label>
                <div className="mt-1 flex items-center gap-1.5 bg-navy/60 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2.5 transition-all focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/30">
                  <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <input
                    placeholder="Garden West, Fowara Chowk..."
                    className="bg-transparent outline-none text-sm text-white placeholder:text-gray-300 w-full"
                  />
                </div>
              </div>
              <button className="group bg-brandgreen text-white font-semibold rounded-lg px-4 py-2.5 text-sm hover:bg-brandgreen-dark transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-brandgreen/30 flex items-center justify-center gap-2 cursor-pointer">
                <svg className="w-4 h-4 transition-transform group-hover:rotate-12 duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                FIND
              </button>
            </div>
          </div>

          {/* Bottom: translucent frosted glass filter strip */}
          <div className="bg-white/80 backdrop-blur-lg px-4 sm:px-5 py-3 sm:py-4 border-t border-white/20">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 sm:divide-x sm:divide-gray-200">
              <div className="hover:bg-white/40 p-1.5 rounded-md transition-colors">
                <p className="text-[10px] tracking-wide text-gray-500 uppercase font-semibold flex items-center gap-1">
                  <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l7 6v10H3V8l7-6z" /></svg>
                  Property Type
                </p>
                <select className="mt-1 text-xs sm:text-sm text-navy font-semibold w-full outline-none bg-transparent cursor-pointer">
                  <option>Any Type</option>
                  <option>House</option>
                  <option>Plot</option>
                  <option>Apartment</option>
                  <option>Shop</option>
                </select>
              </div>
              <div className="sm:pl-4 hover:bg-white/40 p-1.5 rounded-md transition-colors">
                <p className="text-[10px] tracking-wide text-gray-500 uppercase font-semibold">Price (PKR)</p>
                <select className="mt-1 text-xs sm:text-sm text-navy font-semibold w-full outline-none bg-transparent cursor-pointer">
                  <option>Any</option>
                  <option>Under 50 Lakh</option>
                  <option>50L &ndash; 1 Crore</option>
                  <option>1 Crore+</option>
                </select>
              </div>
              <div className="sm:pl-4 hover:bg-white/40 p-1.5 rounded-md transition-colors">
                <p className="text-[10px] tracking-wide text-gray-500 uppercase font-semibold">Area (Marla)</p>
                <select className="mt-1 text-xs sm:text-sm text-navy font-semibold w-full outline-none bg-transparent cursor-pointer">
                  <option>Any</option>
                  <option>3&ndash;5 Marla</option>
                  <option>5&ndash;10 Marla</option>
                  <option>10+ Marla</option>
                </select>
              </div>
              <div className="sm:pl-4 hover:bg-white/40 p-1.5 rounded-md transition-colors">
                <p className="text-[10px] tracking-wide text-gray-500 uppercase font-semibold">Beds</p>
                <select className="mt-1 text-xs sm:text-sm text-navy font-semibold w-full outline-none bg-transparent cursor-pointer">
                  <option>All</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 bg-navy-dark/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-xs text-gray-300 shadow-md">
            <span className="text-gray-400 font-medium">Popular:</span>
            {hashtags.map((h) => (
              <a key={h} href="#properties" className="text-gold hover:text-white hover:underline transition-all duration-200">
                {h}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
