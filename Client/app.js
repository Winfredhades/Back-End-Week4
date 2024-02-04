import { renderPosts } from "./postsPage-renderer.js";


async function getPostAsyn(){
    try{
        const response = await fetch("http://localhost/8080/posts");
        let data = await response.json(); 
        const postList = new Array(data).flat();

        // Log the postList to the console
        console.log(postList);

        // Render the posts in the specified HTML element
        renderPosts("#posts", postList);

    }
    catch(error){
        console.error(error)
    }
}