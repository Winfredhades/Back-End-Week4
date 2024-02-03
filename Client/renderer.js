import { createPage } from "./createPage-renderer.js";

export const mainContainer = document.querySelector('#main-content');

export const mainHtml = `
      <div class="container mt-5">
        <div class="col text-center">
        <h1 class="text-center">Welcome to BLoggy</h1>
        <p class="lead">This is a simple back-end website where you can create and share</p>
        <div class="d-grid gap-2 col-6 mx-auto mt-5">
          <button class="btn btn-primary btn-danger" id="mainCreateBtn" type="button">Create</button>
          <button class="btn btn-primary postsBtn" type="button">Posts</button>
        </div>
        </div>
</div>`


document.addEventListener('DOMContentLoaded', ()=>{
    
    
    mainContainer.innerHTML = mainHtml
    const mainCreateBtn = document.querySelector("#mainCreateBtn");
    mainCreateBtn.addEventListener("click",()=>{
        mainContainer.innerHTML = createPage;
    })
    
})