import React from 'react';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto flex gap-5 mt-20'>
            <div className='w-2xl h-56 linear-bg text-white flex flex-col justify-center items-center rounded-xl'>
                <p className='text-2xl'>In-Progress</p>
                <span className='font-semibold text-6xl'>0</span>
            </div>
            <div className='bg-linear-to-l from-[#00827A] to-[#54CF68] w-2xl h-56  text-white flex flex-col justify-center items-center rounded-xl'>
                <p className='text-2xl'>Resolved</p>
                <span className='font-semibold text-6xl'>0</span>
            </div>
        </div>
    );
};

export default Banner;