import React from 'react';

import BANAR from '../assets/banner-stack.png'

const Secction1 = () => {
  return (
    <section className=" flex justify-between container mx-auto  mt-20 ">
        <div>
          <h1 className=' text-5xl font-bold mt-20 my-3'>Build Your Ideal</h1>
          <h1 className=" text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent ">
            Development Stack
          </h1>



          <p className='my-10'>Explore frontend, backend, database, and tooling options,<br />
            compare them side by side, and put together the stack that fits your <br />
            next project.</p>
          <div className=' flex gap-4 py-7'>
            <button className="px-5 py-2 font-semibold text-white rounded-lg 
  bg-gradient-to-r from-orange-500 via-pink-600 to-pink-700 
 hover:bg-pink-700 hover:scale-105 transition-all duration-300">
              Explore Technologies
            </button>

            <button className="btn btn-active">Learn More</button>
          </div>
        </div>
        <div>

          <img src={BANAR} />

        </div>


      </section>
  );
};

export default Secction1;