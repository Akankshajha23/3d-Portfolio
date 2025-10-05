import React, { useEffect, useRef, useState } from 'react'
import { skills, experiences } from '../constants'
import CTA from '../components/CTA';

const About = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observers = timelineRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className='w-full bg-gray-900 min-h-screen px-8 py-12 md:px-16 lg:px-24'>
      <h1 className='head-text text-gray-100 mt-15'>Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Akanksha</span></h1>

      <div className='mt-5 flex flex-col gap-3 text-gray-400'>
        <p>Full Stack Developer based in Delhi, India, specializing in technical 
        education through hands-on learning and building projects. </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-gray-100'>My Skills</h3>

        <div className='mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6'>
          {skills.map((skill, index) => (
            <div 
              key={skill.name || index} 
              className='group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer'
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              {/* Glow effect on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300'></div>
              
              {/* Icon container */}
              <div className='relative flex flex-col items-center justify-center gap-3'>
                <div className='w-16 h-16 flex items-center justify-center bg-gray-700/50 rounded-xl group-hover:bg-gray-700 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110'
                  />
                </div>
                
                {/* Skill name */}
                <p className='text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-center'>
                  {skill.name}
                </p>
              </div>

              {/* Animated border on hover */}
              <div className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s infinite'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>

      <div className='py-16'>
        <h3 className='subhead-text text-gray-100'> Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-gray-400'>
          <p>I've worked with all sorts of companies, leveling up my skills and teaming up with smart people, Here's the rundown: </p>
        </div>
        
        <div className='mt-12'>
          {/* Timeline container */}
          <div className='relative'>
            {/* Vertical line */}
            <div className='absolute left-16 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 -translate-x-1/2'></div>
            
            {/* Timeline items */}
            <div className='space-y-8'>
              {experiences.map((experience, index) => (
                <div 
                  key={index} 
                  ref={(el) => (timelineRefs.current[index] = el)}
                  className='relative'
                  style={{
                    opacity: visibleItems.includes(index) ? 1 : 0,
                    transform: visibleItems.includes(index) 
                      ? 'translateY(0)' 
                      : 'translateY(50px)',
                    transition: `all 0.6s ease-out ${index * 0.2}s`
                  }}
                >
                  {/* Timeline dot with icon */}
                  <div 
                    className='absolute top-1/2 left-30 md:left-[53%] w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-10 shadow-lg'
                    style={{ 
                      backgroundColor: experience.iconBg,
                      transform: visibleItems.includes(index)
                        ? 'scale(1) translateX(-50%) translateY(-50%)'
                        : 'scale(0) translateX(-50%) translateY(-50%)',
                      transition: `transform 0.5s ease-out ${index * 0.2 + 0.3}s`
                    }}
                  >
                    <img 
                      src={experience.icon} 
                      alt={experience.company_name}
                      className='w-10 h-10 object-contain'
                      style={{
                        opacity: visibleItems.includes(index) ? 1 : 0,
                        transition: `opacity 0.4s ease-out ${index * 0.2 + 0.5}s`
                      }}
                    />
                  </div>
                  
                  {/* Content card - alternating sides on desktop */}
                  <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                    <div className='bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:shadow-xl hover:border-gray-600 transition-all'>
                      <div className='mb-2'>
                        <h3 className='text-xl font-bold text-gray-100'>{experience.title}</h3>
                        <p className='text-base font-semibold text-gray-300 mt-1'>{experience.company_name}</p>
                        <p className='text-sm text-gray-400 mt-1'>{experience.date}</p>
                      </div>
                      
                      <ul className='mt-4 space-y-2'>
                        {experience.points.map((point, idx) => (
                          <li 
                            key={idx} 
                            className='flex items-start text-gray-300 text-sm'
                            style={{
                              opacity: visibleItems.includes(index) ? 1 : 0,
                              transform: visibleItems.includes(index)
                                ? 'translateX(0)'
                                : 'translateX(-20px)',
                              transition: `all 0.4s ease-out ${index * 0.2 + 0.6 + idx * 0.1}s`
                            }}
                          >
                            <span className='text-blue-400 mr-2 mt-1 flex-shrink-0'>▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className='border-gray-700'/>
      <CTA/>
    </section>
  )
}

export default About