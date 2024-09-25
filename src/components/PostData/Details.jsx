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
            <p><span className="font-bold mb-2">Title : </span>{data.title}</p>
            <p><span className="font-bold">Body : </span>{data.body}</p>
        </div>
    );
};

export default Details;