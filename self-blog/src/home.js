import React, {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "First", body: "1", author: "Sharon", id: 1}, 
        { title: "Second", body: "2", author: "Rob", id: 2}, 
        { title: "Third", body: "3", author: "Sharon", id: 3}
    ]);

    const Click_counts= () => {
        const [count, setCount] = useState(0);
        // console.log(count)
        return(
            <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        )
    }
     

    const welcome_message = (name) => {
        return ( 
            console.log("Welcome " + name + " !")
         );
    }
    
    // 正向作法
    const handleDelete = (id) => {
        const index = blogs.findIndex(blog => blog.id === id);
        const deletedBlogs = [...blogs];
        // 如果 index 存在 ( index === -1 表示元素不存在)
        if (index !== -1) {
            deletedBlogs.splice(index, 1);
            // console.log("deletedBlogs")
            // console.log(deletedBlogs)
            // console.log("blogs")
            // console.log(blogs)
            setBlogs(deletedBlogs);
        }         
    }

    //反向做法
    // const handleDelete = (id) => {
    //     const deletedBlogs = blogs.filter(blog => blog.id !== id);
    //     console.log(deletedBlogs);
    //     setBlogs(deletedBlogs);
    // }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            {/* <button onClick = {click_counts()}>Click Counts</button> */}
            {/* <button onClick = {click_counts}>Click Counts</button> */}
            {/* <button onClick = {()=> welcome_message('Mr. Nobody')}>Hidden Message</button>
            <Click_counts / > */}
            {/* <BlogList blogs = {blogs} title = "All Blogs!" / > */}
            <BlogList blogs = {blogs}  title = "Rob's Blogs!" handleDelete = {handleDelete}/ >
        </div>
     );
}
 
export default Home;