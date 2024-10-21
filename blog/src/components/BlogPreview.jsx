import { Link } from "react-router-dom";

const BlogPreview = ({lesson, handleDelete}) => {


    return ( 
        <>
        <Link to={"/blog/" + lesson.id}>
          <section className="mb-4 p-4 bg-teal-200 rounded-lg">
            <h2 className="text 2xl font-bold">{lesson.title}</h2>
            <div className="flex justify-end gap-2">
            </div>
            <p className="font-body">{lesson.author}</p>
          </section>
        </Link>
        </>
     );
}
 
export default BlogPreview;