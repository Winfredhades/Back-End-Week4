export function postCarouselCreate (pTitle, pContent) {
    document.querySelector('#carousel-parent').innerHTML += `
    <div class="carousel-item">
                        <img src="./72a184aa7846cad0d5a82cf55dc3f406.jpg" class="d-block w-100" alt="Second Slide">
                        <div class="carousel-caption d-none d-md-block mb-5 text-black">
                            <h1>${pTitle}</h1>
                            <p>${pContent}</p>
                        </div>
                    </div>`
}