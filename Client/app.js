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


export async function toApi (pTitle, pContent) {
    try {
        // Send the POST request to create a new post
        const response = await fetch('http://localhost:3002/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pTitle, pContent }),
        });

        if (response.ok) {
            console.log('Post created successfully');
        } else {
            console.error('Failed to create post:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}