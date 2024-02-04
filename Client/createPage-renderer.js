const createPage = `
<!-- HEADER SECTION; -->
<header>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" id="nav-homeBtn" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link postsBtn" id="nav-postBtn" href="#">Posts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link createBtns" href="#">Create</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>


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