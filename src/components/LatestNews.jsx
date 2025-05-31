import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3 rounded-2xl'>
            <p className='text-base-100 bg-secondary px-3 py-2 rounded-xl'>Latest</p>
            <Marquee>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, maiores!</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;