import axios from "axios";

const options = {
  method: "GET",
  url: "https://themealdb.p.rapidapi.com/list.php",
  params: { c: "list" },
  headers: {
    "X-RapidAPI-Key": "57607c4060msh8305edef8d177d9p1a088fjsnad865a1577b2",
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
  },
};

const fetchCategory = () => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default fetchCategory;
