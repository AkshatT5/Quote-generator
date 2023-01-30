const container = document.getElementById("container");
const quote = document.getElementById("quote");
const qbutton = document.getElementById("qbutton");

qbutton.addEventListener("click", function() {
    fetch("https://api.quotable.io/random")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            quote.innerText = data.content + " - " + data.author;
        });
});
