import react from "react";
const postpromise = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   return res.json();
   
};
const getposts = async () => {
    try { 
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();}
    catch (error) {
        throw new Error("Failed to fetch posts");
    }
}
const getposts2 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }
}
const PostPage = async () => {    
//    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//    const posts = await res.json();
    const posts = await postpromise();
   return (
       <div>
       <h2>Posts hello : {posts.length} </h2>
       
       </div>
   );  
}
export default PostPage;