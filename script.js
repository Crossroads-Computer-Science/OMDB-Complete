

async function getMovies() {
    try {
        const searchTerm = document.getElementById("search").value
        console.log(searchTerm)
        const url = "https://www.omdbapi.com/?&apikey=8750b886&s=" + searchTerm;

        const response = await fetch(url)

        const json = await response.json();

        console.log(JSON.stringify(json));

        const movieHolder = document.getElementById("movieHolder");

        for (movie of json.Search) {
            let divContainer = document.createElement('div');
            divContainer.classList.add("card")
            let img = document.createElement('img');
            img.src = movie.Poster;
            img.width = 100;
            
            let card = document.createElement('div')
            card.classList.add('container')
            let titleHeader = document.createElement("h3");
            titleHeader.textContent = movie.Title + ": "+movie.Year

            card.appendChild(titleHeader)

            divContainer.appendChild(img);
            divContainer.appendChild(card)

            movieHolder.appendChild(divContainer)
        }


    }
    catch (error) {
        console.log(error)
    }
}