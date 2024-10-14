import BlogPreview from "./components/BlogPreview";
import NavBar from "./components/navbar";
import {useState,useEffect} from "react"
import useFetch from "./hooks/useFetch";

const App = () => {

  const {data, isPending, error} = useFetch("https://dummyjson.com/posts")

  return (
    <div className="bg-tiffany">
      <NavBar />
      <div className="content">
        <h1 className="text-5xl font-heading">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo cum minus qui sed libero omnis doloribus quos ullam, provident quibusdam debitis numquam est.</h1>

        {isPending && <p>Loading...</p>}

        {
          data && data.posts.map((l) => (
            <BlogPreview lesson={l} key={l.id}/>
          ))
        }

        {error && <p>Something went wrong</p>}

      </div>
    </div>
   );
} 

export default App;