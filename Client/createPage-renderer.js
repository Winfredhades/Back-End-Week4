import { navCcreateBtns } from "./app.js";

import {mainContainer} from "./renderer.js";

export const createPage = `
<div class="container mt-5">
        <div class="col">
        <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input type="text" class="form-control" id="titleText">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Content</label>
          <input type="text" class="form-control" id="contentText">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
`

navCcreateBtns.addEventListener("click", ()=>{
    mainContainer.innerHTML=createPage;
})
