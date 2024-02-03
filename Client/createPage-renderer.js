import { navCcreateBtns } from "./app.js";
import { mainContainer } from "./renderer.js";

export const createPage = `
<div class="container mt-5">
    <div class="col">
        <form id="myForm">
            <div class="mb-3">
                <label for="titleText" class="form-label">Title</label>
                <input type="text" class="form-control" id="titleText" value="">
            </div>
            <div class="mb-3">
                <label for="contentText" class="form-label">Content</label>
                <input type="text" class="form-control" id="contentText" value="">
            </div>
            <button type="submit" class="btn btn-primary" id="submitBtn">Submit</button>
        </form>
    </div>
</div>
`;

navCcreateBtns.addEventListener("click", () => {
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
    },
    );
});