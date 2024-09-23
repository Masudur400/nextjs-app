import Link from 'next/link';
import React from 'react';

const SinglePostData = ({ data , idx}) => {
    return (
        <div className="p-3 border rounded-md flex flex-col">  
            <p><span className='font-bold flex-grow'>{idx+1} . Title : </span>{data.title}</p> 
            <p className="divider border"></p>
            <p><span className='font-bold'>Body : </span>{data.body}</p>
            <Link href={`/${data.id}`}><button className='border rounded-md px-3 py-1 hover:shadow-md'>Click Me</button></Link>
        </div> 
    );
};

export default SinglePostData;