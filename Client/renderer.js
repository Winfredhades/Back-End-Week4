import { mainHtml } from "./homePage-renderer.js";
import { createPage } from "./createPage-renderer.js";
import { navbar, addBackListener } from "./navbar.js";
import { postsPage } from "./postsPage-renderer.js";

document.addEventListener('DOMContentLoaded', () => {
  const bodyTag = document.querySelector('#body');
  
  // Function to render the main page
  function renderMainPage() {
    bodyTag.innerHTML = navbar + mainHtml;
    addCreatePageListener();
    addPostPageListener();
    addBackListener(renderMainPage);
  }

  // Function to render the create page
  function renderCreatePage() {
    bodyTag.innerHTML = navbar + createPage;
    addBackListener(renderMainPage)
    addHomePageBackListener();
    addPostPageListener()
  }

  // Function to add event listener to create buttons
  function addCreatePageListener() {
    const createBtns = document.querySelectorAll('.createBtns');

    createBtns.forEach(button => {
      button.addEventListener("click", renderCreatePage);
    });
  }

  // Function to add event listener to home page back button
  function addHomePageBackListener() {
    const homeBackBtn = document.querySelector('#nav-homeBtn');
    
    homeBackBtn.addEventListener("click", renderMainPage);
  }

  // Function to render the post page
  function renderPostPage() {
    bodyTag.innerHTML = navbar + postsPage;
    addHomePageBackListener();
    addCreatePageListener()
  }

  // Function to add event listener to Posts buttons
  function addPostPageListener() {
    const postsBtns = document.querySelectorAll('.postsBtn');

    postsBtns.forEach(button => {
      button.addEventListener("click", renderPostPage);
    });
  }

  // Initial rendering of the main page
  renderMainPage();
});
