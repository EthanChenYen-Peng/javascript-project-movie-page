const OMDB_BASE_URL = "http://www.omdbapi.com/";
const AUTOCOMPLETE_LATENCY = 1000; // In milisecond.
const fetchData = async searchTerm => {
  const response = await axios.get(OMDB_BASE_URL, {
    params: {
      apikey: "5fa0a6f7",
      s: searchTerm
    }
  });

  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};

const input = document.querySelector("#search-input");

const onInput = async event => {
  const container = document.querySelector(".container");
  const movies = await fetchData(event.target.value);

  console.log(movies);
  for (let movie of movies) {
    const div = document.createElement("div");

    div.innerHTML = `
     <img src="${movie.Poster}"/>
     <h1> ${movie.Title} </h1> 
    `;
    container.appendChild(div);
  }
};
input.addEventListener("input", debounce(onInput, 1000));
