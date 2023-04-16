import axios from "axios";

const fetchCategory = () => {
  const options = {
    method: "GET",
    url: "https://themealdb.p.rapidapi.com/categories.php",
    headers: {
      "X-RapidAPI-Key": "57607c4060msh8305edef8d177d9p1a088fjsnad865a1577b2",
      "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data.categories);
      return response.data.categories;
    })
    .catch(function (error) {
      console.error(error);
      throw error;
    });
};

const fetchPopular = () => {
  const options = {
    method: "GET",
    url: "https://themealdb.p.rapidapi.com/latest.php",
    headers: {
      "X-RapidAPI-Key": "57607c4060msh8305edef8d177d9p1a088fjsnad865a1577b2",
      "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data.meals);
      return response.data.meals;
    })
    .catch(function (error) {
      console.error(error);
      throw error;
    });
};

export { fetchCategory, fetchPopular };
