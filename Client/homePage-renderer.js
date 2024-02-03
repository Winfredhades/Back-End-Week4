import { navHomeBtn } from "./app.js";
import { mainContainer } from "./renderer.js";
import { mainHtml } from "./renderer.js";
import { createPage } from "./createPage-renderer.js";

navHomeBtn.addEventListener("click", ()=> {
    mainContainer.innerHTML = mainHtml;
    mainCreateBtn.addEventListener("click",()=>{
        mainContainer.innerHTML = createPage;
    })
})