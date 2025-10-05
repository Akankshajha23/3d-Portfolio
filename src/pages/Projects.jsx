import { Link } from "react-router-dom";

import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className='w-full bg-gray-900 min-h-screen px-8 py-12 md:px-16 lg:px-24'>
      <h1 className='head-text text-gray-100 mt-15'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-gray-400 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20'>
        {projects.map((project, index) => (
          <div 
            className='group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105' 
            key={project.name}
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            <div className='flex items-start gap-4'>
              <div className='block-container w-14 h-14 flex-shrink-0'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center bg-gray-700/50 group-hover:bg-gray-700 transition-all duration-300'>
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className='w-8 h-8 object-contain'
                  />
                </div>
              </div>

              <div className='flex-1 min-w-0 m-5'>
                <h4 className='text-xl font-poppins font-semibold text-gray-100 group-hover:text-white transition-colors'>
                  {project.name}
                </h4>
              </div>
            </div>

            <p className='mt-4 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors'>
              {project.description}
            </p>

            <div className='mt-6 flex items-center gap-2 font-poppins'>
              <Link
                to={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link'
              >
                <span>Live Link</span>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain transition-transform group-hover/link:translate-x-1'
                />
              </Link>
            </div>

            {/* Animated border effect */}
            <div className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s infinite'
              }}
            ></div>
          </div>
        ))}
      </div>

      <hr className='border-gray-700' />

      <CTA/>

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
    </section>
  );
};

export default Projects;