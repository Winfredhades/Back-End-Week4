import {renderPosts} from './postsPage-renderer.js'

async function getPostAsync() {
    try {
        // Fetch posts from the server
        let response = await fetch(`http://localhost:8080/posts/`);
        
        // Parse the response as JSON
        let data = await response.json();

        // Flatten the data array (in case it's nested)
        const postList = new Array(data).flat();

        // Log the postList to the console
        console.log(postList);

        // Render the posts in the specified HTML element
        renderPosts("#main-content", postList);
    } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error fetching or rendering posts:", error);
    }
}

getPostAsync()



export const navCcreateBtns = document.querySelector('#nav-createBtn');
export const navPostsBtns = document.querySelector('#nav-postBtn');
export const navHomeBtn = document.querySelector('#nav-homeBtn');