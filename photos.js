// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => displayData(json))


// const displayComment = () => {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//         .then(response => response.json())
//         .then(json => displayComment2(json))
// };


// function displayData(data) {
//     data.forEach(element => {
//         const article = `
//             <article class="card">
//                 <div class="ids">
//                     <h4>User ID: ${element.userId}</h4>
//                     <h4>ID: ${element.id}</h4>
//                 </div>
//                 <h2>${element.title}</h2>
//                 <hr>
//                 <p>${element.body}</p>
//             </article>
//             `;
//         document.getElementById("main").innerHTML += article;
//         displayComment();

//     });
// }

// function displayComment2(data) {
//     for (const post of data) {
//         // console.log(post);
//         if (post.postId === element.id) {
//             const comment = `
//         <div class="comment">
//             <h3 class="name">${post.name}</h3>
//             <h5 class="email">${post.email}</h5>
//             <hr>
//             <p class="body">${post.body}</p>
//         </div>`
//             const main = document.getElementById("main");
//             main.innerHTML += comment;

//         }

//     }
// }






// // const main = document.getElementById("main");
// // const img = `<img src="${album.url}" alt="album image">`;
// // main.innerHTML += img;

// const main = document.getElementById("main");

// // Fetch posts and display them
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => {
//         // Loop through each post
//         json.forEach(post => {
//             const node = document.createElement("div");
//             const article = `
//                 <article class="card">
//                     <div class="ids">
//                         <h4>User ID: ${post.userId}</h4>
//                         <h4>ID: ${post.id}</h4>
//                     </div>
//                     <h2>${post.title}</h2>
//                     <hr>
//                     <p>${post.body}</p>
//                 </article>
//             `;
//             node.appendChild(article);
//             main.innerHTML += node;

//             console.log(post.id);
//             // Fetch and display comments for this post
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//                 .then(response => response.json())
//                 .then(comments => displayComments(comments));
//         });
//     });

// // Function to display comments
// function displayComments(comments) {
//     for (const comment of comments) {
//         const commentHTML = `
//             <div class="comment">
//                 <h3 class="name">${comment.postId}</h3>
//                 <h3 class="name">${comment.name}</h3>
//                 <h5 class="email">${comment.email}</h5>
//                 <hr>
//                 <p class="body">${comment.body}</p>
//             </div>
//         `;

//         node.innerHTML += commentHTML;
//     }
// }



const main = document.getElementById("main");

// Fetch posts and display them
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        // Loop through each post
        posts.forEach(post => {
            const article = document.createElement("article"); // Create a container div
            const div = document.createElement("div"); // Create an article element
            article.className = "card";

            // Create the HTML content for the article
            article.innerHTML = `
                <div class="ids">   
                    <h4>User ID: ${post.userId}</h4>
                    <h4>ID: ${post.id}</h4>
                </div>
                <h2>${post.title}</h2>
                <hr>
                <p>${post.body}</p>
            `;

            // Append the article to the container div
            article.appendChild(div);
            main.appendChild(article); // Append the container div to the main element

            // Fetch and display comments for this post
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                .then(response => response.json())
                .then(comments => displayComments(comments, article));
        });
    });

// Function to display comments
function displayComments(comments, parentNode) {
    for (const comment of comments) {
        const commentHTML = `
            <div class="comment">
                <h3 class="name">${comment.postId}</h3>
                <h3 class="name">${comment.name}</h3>
                <h5 class="email">${comment.email}</h5>
                <hr>
                <p class="body">${comment.body}</p>
            </div>
        `;
        const commentNode = document.createElement("div"); // Create a container div for the comment
        commentNode.innerHTML = commentHTML; // Set the comment HTML
        parentNode.appendChild(commentNode); // Append the comment container to the parent node
    }
}
