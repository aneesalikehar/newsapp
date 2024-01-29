let fetchData = document.getElementById('fetch');
let loadingMessage = document.querySelector('.spinners')
fetchData.addEventListener("click", function () {
    let news = document.getElementById('input').value;
    loadingMessage.style.display = "grid";
    if (news !== '') {
        fetch(`https://api.worldnewsapi.com/search-news?api-key=5b84f393311b40db939e00454624ddeb&text=${news}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                getData(data);
                loadingMessage.style.display = "none";
            })
            .catch((error) => {
                console.log(error)
            })
    }
    else {
        alert("Please enter a value")
    }

});
let cardtext = document.querySelector("card-text")

function getData(item) {
    let row = document.getElementById('cardData');
    row.innerHTML = "";
    if (item.news.length > 0) {
        item.news.map((data) => {
            row.innerHTML += `
            <div class="col-md-3">
                <div class="card">
                    <img src=${data.image || './img/placeholder.svg'} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text text-truncate">${data.text}p>
                        <a href=${data.link} class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>`;
        });
    }
    else {
        alert("NO search found")
    }

}
