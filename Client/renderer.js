// import { postCarouselCreate } from "./app.js";

// const myForms = document.querySelectorAll('.myForm');

// myForms.forEach(form=>form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("Working");
//     const title = document.querySelector('#titleText').value
//     const content = document.querySelector( '#contentText' ).value;
//     postCarouselCreate(title, content)
//     console.log(title,content);

    
//     fetch('http://localhost:3002/posts',{
//         method: 'post',
//         body: FormData(form)
//     }).then(function (response){
//         return response.text
//     }).then(function (text){
//         console.log(text)
//     }).catch(error=>console.error(error))
    
// }))


import { postCarouselCreate } from "./app.js";

const myForms = document.querySelectorAll('.myForm');

myForms.forEach(form => form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const titleInput = form.querySelector('#titleText');
    const contentInput = form.querySelector('#contentText');

    const title = titleInput.value;
    const content = contentInput.value;

    // Update the inputs
    titleInput.value = '';
    contentInput.value = '';

    // Create the carousel item
    postCarouselCreate(title, content);

    try {
        // Send the POST request to create a new post
        const response = await fetch('http://localhost:3002/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        });

        if (response.ok) {
            console.log('Post created successfully');
        } else {
            console.error('Failed to create post:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}));
