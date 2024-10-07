import BlogPreview from "./components/BlogPreview";
import NavBar from "./components/navbar";
import {useState,useEffect} from "react"

const App = () => {

  //useState
  const [title,setTitle] = useState("Hello");

  const[lessons,setLessons] = useState([
    {title:"Into to React", author:"Matus", id:1,},
    {title:"Front end dev", author:"Matus", id:2,},
    {title:"Figma Tutorial", author:"Matus", id:3,},
    {title:"Flask", author:"Matus", id:4,},
    {title:"Industry Concepts", author:"Matus", id:5,},
  ]);

  const handleDelete = (id) => {
    const newLessons = lessons.filter((l) => l.id !== id)
    setLessons(newLessons)
  }

  useEffect(() => {
    console.log("refreshed")
  }, []);


  return (
    <div className="bg-slate-500">
      <NavBar />
      <div className="content">
        <h1 className="Text 5x1">{title}</h1>

        <button onClick={() => setTitle("Bonjhour")}>Change Title</button>

        {
          lessons.map((l) => (
            <BlogPreview lesson={l} key={l.id} handleDelete={handleDelete}/>
          ))
        }


      </div>
    </div>
   );
} 
 
export default App;