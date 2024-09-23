"use client";
import { useEffect, useState } from "react";
import SinglePostData from "./SinglePostData";

 
const PostData = () => {

    const [allData , setAllData]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7 p-2">
             {
                allData.length?
                allData?.slice(0,30)?.map((data, idx) => <SinglePostData key={data?.id} data={data} idx={idx}></SinglePostData>)
                :'data not available'
             }
        </div>
    );
};

export default PostData;