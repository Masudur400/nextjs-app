import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <nav className='mt-6 bg-emerald-400 flex justify-around items-center py-1'> 
                <p className='text-3xl font-bold text-white'>About navbar</p>
            <div className='flex gap-3 text-white'>
            <Link href={'/about/mission'}><button className='border px-3 py-1   rounded-md hover:shadow-md'>Go to Mission Page</button></Link> 
            <Link href={'/about/vision'}><button className='border px-3 py-1   rounded-md hover:shadow-md'>Go to vision Page</button></Link> 
            </div>
            <p></p>
            </nav>
            {children}
        </div>
    );
};

export default layout;