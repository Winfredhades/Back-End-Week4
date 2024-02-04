const createPage = `
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

export {createPage}