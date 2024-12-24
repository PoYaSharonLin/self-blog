const BlogList = (props) => {
    const blogs = props.blogs
    const title = props.title
    const handleDelete = props.handleDelete
    // console.log(props)
    // console.log(props.blogs)
    return ( 
        <div className="bloglist">
                {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick = {()=> handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
            
        </div>
     );
}
 
export default BlogList;