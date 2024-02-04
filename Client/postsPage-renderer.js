const postsPage = `
   <!-- POSTS SECTION; -->
   <div class="container mt-5">
        <div class="col row" id="posts">
          <h1>All the posts can be seen in here</h1>
        

        <div class="card" style="width: 18rem;">

          <div class="card-body">
            <h3 class="card-title">Title</h3>
            <p class="card-text">Content</p>
          </div>
        </div>
        </div>
      </div>
      `;

const renderPosts = (pSelector, pData) => {
    // Ensure pData is an array before attempting to loop through it
    const dataArray = Array.isArray(pData) ? pData : [pData];
  
    Array.from(dataArray).forEach(postItem => {
      let newCard = `
  <div class="card" style="width: 18rem;">

      <div class="card-body">
        <h3 class="card-title">${postItem.title}</h3>
        <p class="card-text">${postItem.content}</p>
      </div>
    </div>`
      
        postsPage += card;
    });

    document.querySelector(pSelector).innerHTML += postsPage;
  };

  


export {postsPage, renderPosts}