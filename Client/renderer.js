import { createPage } from "./createPage-renderer.js";

export const mainContainer = document.querySelector('#main-content');

export const mainHtml = `
      <div class="container mt-5">
        <div class="col text-center">
        <h1 class="text-center">Welcome to BLoggy</h1>
        <p class="lead">This is a simple back-end website where you can create and share</p>
        <div class="d-grid gap-2 col-6 mx-auto mt-5">
          <button class="btn btn-primary btn-danger postsBtn" id="mainCreateBtn" type="button">Create</button>
          <button class="btn btn-primary postsBtn" type="button">Posts</button>
        </div>
        </div>
</div>`



document.addEventListener('DOMContentLoaded', ()=>{
    
    
    mainContainer.innerHTML = mainHtml
    const mainCreateBtn = document.querySelector("#mainCreateBtn");
    const postsBtn = document.querySelectorAll(".postsBtn")
    mainCreateBtn.addEventListener("click",()=>{
        mainContainer.innerHTML = createPage;
        const form = document.querySelector('#myForm');  // Select the form element

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const title = document.querySelector("#titleText").value;
        const content = document.querySelector("#contentText").value;

        const formData = {
            title: title,
            content: content
        };

        console.log(formData);

        fetch("http://localhost:8080/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    })
})

})