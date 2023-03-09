"use client"
import axios from 'axios'
import { useEffect, useState } from 'react';


export default function HistoryCard() {
    const url = "http://localhost:5000/api/history";
    const [post, setPost] = useState(null)
    // const router = useRouter();
    

    // console.log(id)

    useEffect(() => {
        axios.get(url)
        .then(response => {
            console.log(response.data.data)
            setPost(response.data.data)
        })
    }, [])
    // console.log(post)
    
    if(!post) return null
    return(
        <div>
            {post.map(item => {
                <div>{item.name}</div>
            })}

            {/* {post[0].name} */}
        </div>
    )
    
  
}
