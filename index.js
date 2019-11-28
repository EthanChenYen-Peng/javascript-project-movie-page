const OMDB_BASE_URL = "http://www.omdbapi.com/";
const AUTOCOMPLETE_LATENCY = 1000; // In milisecond.
const fetchData = async searchTerm => {
  const response = await axios.get(OMDB_BASE_URL, {
    params: {
      apikey: "5fa0a6f7",
      s: searchTerm
    }
  });
  console.log(response);
};

const input = document.querySelector("#search-input");

const onInput = event => {
  fetchData(event.target.value);
};
input.addEventListener("input", debounce(onInput, 1000));
