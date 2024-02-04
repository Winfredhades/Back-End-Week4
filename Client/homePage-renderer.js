const mainHtml = `
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

  <!-- MAIN SECTION; -->
  <main id="main-content"></main>
  <div class="container mt-5">
    <div class="col text-center">
      <h1 class="text-center">Welcome to BLoggy</h1>
      <p class="lead">This is a simple back-end website where you can create and share</p>
      <div class="d-grid gap-2 col-6 mx-auto mt-5">
        <button class="btn btn-primary btn-danger postsBtn createBtns" type="button">Create</button>
        <button class="btn btn-primary postsBtn" type="button">Posts</button>
      </div>
    </div>
  </div>`;

  
  export {mainHtml}