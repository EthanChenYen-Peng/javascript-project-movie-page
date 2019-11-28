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
let timeoutID;

const onInput = () => {
  if (timeoutID) {
    clearInterval(timeoutID);
  }
  timeoutID = setTimeout(() => {
    const searchTerm = event.target.value;
    fetchData(searchTerm);
  }, AUTOCOMPLETE_LATENCY);
};
input.addEventListener("input", onInput);
