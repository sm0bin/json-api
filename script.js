fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => displayData2(json))


// function displayData(data) {
//     data.forEach(element => {
//         // console.log(element.title);
//         const div = document.createElement("div");
//         document.getElementById("main").appendChild(div);
//         const h2 = document.createElement("h2");
//         h2.innerText = element.title;
//         div.appendChild(h2);

//         const p = document.createElement("p");
//         p.innerText = element.body;
//         div.appendChild(p);
//     });
// }
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