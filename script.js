document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector("form");
    const searchInput = document.querySelector('input[name="query"]');
    const resultsContainer = document.querySelector(".results-container");
    resultsContainer.id = "results-container"; 
    document.body.appendChild(resultsContainer);

   
    if (searchInput && localStorage.getItem("lastSearch")) {
        searchInput.value = localStorage.getItem("lastSearch");
    }

    if (searchForm) {
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const searchQuery = searchInput.value.trim();

            if (searchQuery) {
                localStorage.setItem("lastSearch", searchQuery);

                alert(`Searching for: ${searchQuery}`);
                } else {
                alert("Please enter a search term.");
            }
        });
    }
});