'use client'
import { useEffect, useState } from "react";

 
const Details = ({id}) => {
    const [data , setAllData]=  useState({})
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setAllData(data))
        setLoading(false)
    },[id])

    if(loading){
        return <p>loading.......</p>
    }

    return (
        <div>
            <p>{data.title}</p>
            <p>{data.body}</p>
        </div>
    );
};

export default Details;