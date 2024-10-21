import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { useEffect } from "react";

const BlogDetails =() => {

    const {id} = useParams();
    const navigate = useNavigate();

    const {data, isPending, isError} = useFetch("https://dummyjson.com/posts/" + id)
   
    useEffect(() =>{
        setTimeout(() =>{
            navigate("/");  
        },5000)
    },[])

    return (
        <>
            {data && (
                <>
                <h1 className="text 5xl">{data.title}</h1>
                <p>{data.body}</p>
                </>
            )}
        </>
    )
}

export default BlogDetails;