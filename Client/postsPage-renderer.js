const renderPosts = (pSelector, pData) => {
    let newCards = "";
  
    // Ensure pData is an array before attempting to loop through it
    const dataArray = Array.isArray(pData) ? pData : [pData];
  
    Array.from(dataArray).forEach(postItem => {
      const newCard = `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h3 class="card-title">${postItem.title}</h3>
            <p class="card-text">${postItem.content}</p>
          </div>
        </div>
      `;
      newCards += newCard;
    });
  
    document.querySelector(pSelector).innerHTML = newCards;
  };
  
  const postsPageBtn = document.querySelector('#nav-postBtn');
  
  postsPageBtn.addEventListener("click", () => {
    document.getElementById('main-content').innerHTML = `
      <div class="container mt-5">
        <div class="col row">
          <h1>All the posts can be seen in here</h1>
        </div>
      </div>`;
  });
  


export {renderPosts}