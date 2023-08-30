// const loadData = () => {
fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(json => console.log(json))
// };
// loadData();


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => displayData2(json))


function displayData2(data) {
    data.forEach(element => {
        const article = `
            <article class="card">
                <div class="ids">   
                    <h4>User ID: ${element.userId}</h4>
                    <h4>ID: ${element.id}</h4>
                </div>
                <h2>${element.title}</h2>
                <hr>
                <p>${element.body}</p>
            </article>
            `;
        document.getElementById("main").innerHTML += article;
    });
}






// const main = document.getElementById("main");
// const img = `<img src="${album.url}" alt="album image">`;
// main.innerHTML += img;
