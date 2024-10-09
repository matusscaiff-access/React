const BlogPreview = ({lesson, handleDelete}) => {


    return ( 
        <>
        <section>
          <h2 className="font-body">{lesson.title}</h2>
          <p className="font-body">{lesson.author}</p>
          <button className="bg-onyx text-white" onClick={() => handleDelete(lesson.id)}>Delete Lesson</button>
        </section>
        </>
     );
}
 
export default BlogPreview;