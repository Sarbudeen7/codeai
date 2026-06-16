import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { codeExamples } from '../data/CodeExample';

const Features = () => {


  const features = [
     {
      title:"AI Code Completion",
      description:"Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
      codeSnippet:`function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
      imagePosition:"left",
     },
    
      {
      title:"Automated Testing",
      description:"Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
      codeSnippet:`describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
      imagePosition:"right",
     },

      {
      title:"Smart Debugging",
      description:"Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
      codeSnippet:`// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
      imagePosition:"left",
     }
  ]

  return (
    <section id='feature()' className='py-16 sm:py-20 px-10 sm-px-6 lg:px-8 relative'>
      <div className='mx-w-6xl mx-auto' >
       <div className='text-center mb-12 sm:mb-16 lg:mb-20 '>
         <h2 className='text-5xl sm:4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>Your Complete Development
          <br />
          <span className='bg-gradient-to-b from-blue-400 to-cyan-100 bg-clip-text text-transparent '>Workflow</span>
         </h2>
       </div>

       <div className='space-y-16 sm:space-y-20 lg:space-y-32'>
          {features.map((features , key) =>(
             <div
              key={key}  className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${features.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}> 
                {/* code section */}
                <div className='flex-1 w-full'>
                 <div className='relative group '>
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-950 rounded-xl sm:rounded-2xl transition-all duration-500'
                  />
                  <div className='relativeb bg-gray-900/50 bg-gradient-to-br p-4 from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden  border border-white/5 flex flex-col'>
                      {/* ide interface */}
                      <div className='bg-gray-950 rounded-lg p-3 sm:p-2 font-mono text-xs sm:text-sm'>
                        <div className='flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4'>
                           <div className='flex items-center space-x-1.5'>
                              <div className='w-2.5 h-2.5 rounded-full bg-red-500'></div>
                              <div className='w-2.5 h-2.5 rounded-full bg-yellow-500'></div>
                              <div className='w-2.5 h-2.5 rounded-full bg-green-500'></div>
                           </div>
                            <span className='text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm'>
                            {features.title}
                            </span>          
                        </div>

                        <div>
                           <SyntaxHighlighter
                            language='javascript' 
                            style={nightOwl}  
                            customStyle={{
                            margin:"0",
                            background: 'transparent',
                            fontSize: "0.75rem", 
                            lineHeight: "1.5", 
                            height: "100%",
                           }}
                           wrapLines={true}
                           > 
                           {features.codeSnippet}
                            </SyntaxHighlighter>
                          </div> 
                      </div>
                  </div>
                 </div>
                </div>
                  
                  {/* text section */}
                  <div className='flex-1 w-full'>
                    <div className='max-w-lg mx-auto lg:mx-0 text-center lg:text-left'>
                      <h3 className='text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white'>{features.title}</h3>
                      <p className='text-gray-300 text-base text-xl sm:text-lg leading-relaxed '>{features.description}</p>
                    </div>
                  </div>
             </div>
          ))}
        </div> 
      </div>
    </section>
  )
}

export default Features
