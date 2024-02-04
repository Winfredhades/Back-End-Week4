import { mainHtml } from "./homePage-renderer.js";
import { createPage } from "./createPage-renderer.js";

document.addEventListener('DOMContentLoaded', () => {
  const bodyTag = document.querySelector('#body');
  
  // Function to render the main page
  function renderMainPage() {
    bodyTag.innerHTML = mainHtml;
    addCreatePageListener();
  }

  // Function to render the create page
  function renderCreatePage() {
    bodyTag.innerHTML = createPage;
    addHomePageBackListener();
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

  // Initial rendering of the main page
  renderMainPage();
});
