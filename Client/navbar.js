export const navbar = `
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
`
export function addBackListener(callback) {
  const homeBackBtn = document.querySelector('#nav-homeBtn');
  homeBackBtn.addEventListener("click", callback);
}