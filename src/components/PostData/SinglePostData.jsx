import React from 'react';

const SinglePostData = ({ data }) => {
    return (
        <div className="p-3 border rounded-md flex flex-col"> 
            <p><span className='font-bold flex-grow'>Title : </span>{data.title}</p> 
            <p className="divider border"></p>
            <p><span className='font-bold'>Body : </span>{data.body}</p>
        </div> 
    );
};

export default SinglePostData;