import { ArrowRight, ChevronDown, Sparkles ,Play } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { codeExamples, FloatingCards } from "../data/CodeExample";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Hero = () => {
  
  const [mousePosition , setMousePosition] =useState({x:0 , y:0});
  const [activeTab , setActiveTab]  = useState("App.jsx")

  useEffect(()=> {
    function handleMouseMove(e){
      setMousePosition({x:e.clientX, y:e.clientY});
    }
    window.addEventListener("mousemove" , handleMouseMove);

    return () => window.removeEventListener("mousemove" , handleMouseMove)
  },[])

    const currentFloatingCards =  FloatingCards[activeTab];

  return (
    <section className='relative min-h-screen flex items-center justify-center pt-16 sm:px-16 lg:px-8 overflow-hidden bg-slate-950'>
      {/* Interactive Radial Spotlight Track */}
      <div 
        className='absolute inset-0 opacity-30 pointer-events-none' 
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Decorative Glow Blobs */}
      <div className='absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
 
      <div className='max-w-7xl mx-auto text-center relative w-full'>
        <div className='max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 text-center text-left gap-6 lg:text-left lg:gap-12 items-center relative'>
          
          {/* Left Block - Headings and CTA */}
          <div className='flex flex-col items-center justify-center text-center '>
            <div className='inline-flex space-x-2 items-center px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700'>
              <Sparkles className='h-4 w-4 text-blue-400'/>
              <span className='text-xs sm:text-sm text-blue-300'>Introducing CodeFlow AI</span>
            </div>

            <h1 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 animate-in slide-in-from-bottom duration-700 leading-tight lg:mr-5'>
              <span className='bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2'>Code Faster</span>
              <span className='bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2'>Build Better</span>
              <span className='bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2'>With CodeFlow AI</span>
            </h1>

            <p className='text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 leading-relaxed '>
              Accelerate your development workflow with intelligent code completion, automated testing, and smart debugging. Ship production-ready code 10x faster.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12'>
              <button className='group w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-white shadow-lg shadow-blue-500/20'>
                <span>Start Coding Free</span>
                <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300'/>
              </button>
              
              <button className='group w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-white hover:bg-white/10'>
                <Play className='w-4 h-4 text-gray-300 group-hover:text-white transition-colors' />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Right Block - IDE Window Canvas */}
          <div className='relative order-2 w-full'>
            <div className='relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10'>
              <div className='bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[350px] lg:h-[450px] border border-white/5 flex flex-col'>
                
                {/* Header Context Controls */}
                <div className='flex items-center justify-between px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm border-b border-white/10'>
                  <div className='flex items-center space-x-2 sm:space-x-3'>
                    <div className='flex items-center space-x-1.5'>
                      <div className='w-2.5 h-2.5 rounded-full bg-red-500'></div>
                      <div className='w-2.5 h-2.5 rounded-full bg-yellow-500'></div>
                      <div className='w-2.5 h-2.5 rounded-full bg-green-500'></div>
                    </div>
                    <span className='text-xs sm:text-sm text-gray-300 font-medium'>CodeFlow AI</span>
                  </div>
                  <ChevronDown className='w-3 h-3 sm:w-4 sm:h-4 text-gray-400'/>
                </div>

                {/* Code Tabs Workspace Area */}
                <div className='p-3 sm:p-4 relative flex-grow flex flex-col min-h-0'>
                  <div className='flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto no-scrollbar'>
                    {["App.jsx", "Hero.jsx", "Navbar.jsx"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab?.(tab)}
                        className={`px-3 py-1.5 text-xs sm:text-sm rounded-t-lg border-t border-x transition-all duration-200 whitespace-nowrap ${
                          activeTab === tab 
                            ? "bg-blue-500/20 text-white border-blue-500/30 font-medium" 
                            : "bg-white/5 text-gray-400 border-transparent hover:bg-white/10 hover:text-gray-200"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Highlight Render Core Wrapper */}
                  <div className='relative overflow-auto flex-grow rounded-lg border border-neutral-800 bg-[#0b1222]'>
                    <SyntaxHighlighter 
                      language='javascript' 
                      style={nightOwl}  
                      customStyle={{
                        margin: 0,
                        padding: '1rem',
                        background: 'transparent',
                        fontSize: "12px", 
                        lineHeight: "1.5", 
                        height: "100%",
                      }}
                    >
                      {codeExamples[activeTab] || `// No code example found for ${activeTab}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              {/* Float Widget Card Segment */}
              <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentFloatingCards.bgColour} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl transition-all duration-300`}> 
                <div className='flex items-center space-x-2 mb-2'>
                  <div className={`w-6 h-6 ${currentFloatingCards.iconColour} flex items-center justify-center text-sm font-bold`}>
                    {currentFloatingCards.icon}
                  </div>
                  <span className={`text-sm font-medium ${currentFloatingCards.textColor}`}>
                    {activeTab} Optimization
                  </span> 
                </div>
                <div className={`text-sm text-left ${currentFloatingCards.contentColor}`}>
                  {currentFloatingCards.content || 'Intelligent processing active.'}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

  );
}
  


export default Hero