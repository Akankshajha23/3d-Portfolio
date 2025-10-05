import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-700 shadow-xl py-4 px-8 text-gray-100 mx-5 rounded-xl'>
        Hi, I'm
        <span className='font-semibold mx-2 text-blue-400'>Akanksha</span>
        👋
        <br />
        A Full Stack Developer from India
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-xl p-6 shadow-2xl max-w-md backdrop-blur-sm'>
        <p className='font-medium sm:text-lg text-center text-gray-200 mb-4'>
          Worked on multiple projects <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-xl p-6 shadow-2xl max-w-md backdrop-blur-sm'>
        <p className='font-medium text-center sm:text-lg text-gray-200 mb-4'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-xl p-6 shadow-2xl max-w-md backdrop-blur-sm'>
        <p className='font-medium sm:text-lg text-center text-gray-200 mb-4'>
          Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
        </p>

        <Link to='/contact' className='flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;