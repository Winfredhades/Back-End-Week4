// client.js
export const navCcreateBtns = document.querySelector('#nav-createBtn');
export const navPostsBtns = document.querySelector('#nav-postBtn');
export const navHomeBtn = document.querySelector('#nav-homeBtn');

fetch("http://localhost:8080/posts", { method: 'GET' })
    .then(function (res) {
        // return res.json();
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    });


