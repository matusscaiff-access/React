import BlogPreview from "./components/BlogPreview";
import usefetch from "./hooks/useFetch"

const Home = () => {

    const {data, isPending, error} = usefetch("https://dummyjson.com/posts")

    return ( 
        <div className="bg-teal-200 px-10 pt-5">
  
          {isPending && <p>Loading...</p>}
  
          {
            data && data.posts.map((l) => (
              <BlogPreview lesson={l} key={l.id}/>
            ))
          }
  
          {error && <p>Something went wrong</p>}
  
        </div>
     );
}
 
export default Home;