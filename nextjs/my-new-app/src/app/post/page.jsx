import react from "react";
const PagePost = async () => {
    const res = await   fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await res.json();
    return (
        <div>
            <h2>Post Page: {post.length}</h2>
            <p>This is the post page content.</p>
        </div>
    );  
};
export default PagePost;
