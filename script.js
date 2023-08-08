  document.addEventListener("DOMContentLoaded", function () {
        const searchForm = document.querySelector("aside form");
        const searchInput = document.querySelector("aside input[type='text']");
        const articles = document.querySelectorAll(".article");

        searchForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const searchTerm = searchInput.value.trim().toLowerCase();

            articles.forEach(function (article) {
                const title = article.querySelector("h2").textContent.toLowerCase();

                if (title.includes(searchTerm)) {
                    article.style.display = "block";
                } else {
                    article.style.display = "none";
                }
            });
        });
    });
    

