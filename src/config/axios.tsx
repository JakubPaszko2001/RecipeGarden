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
      // console.log(response.data.categories);
      return response.data.categories;
    })
    .catch(function (error) {
      // console.error(error);
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
      // console.log(response.data.meals);
      return response.data.meals;
    })
    .catch(function (error) {
      // console.error(error);
      throw error;
    });
};

const fetchSpecificCategory = (category: string | undefined) => {
  const options = {
    method: "GET",
    url: "https://themealdb.p.rapidapi.com/filter.php",
    params: { c: category },
    headers: {
      "X-RapidAPI-Key": "57607c4060msh8305edef8d177d9p1a088fjsnad865a1577b2",
      "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      // console.log(response.data.meals);
      return response.data.meals;
    })
    .catch(function (error) {
      // console.error(error);
    });
};
const fetchDish = (dishId: string | undefined) => {
  const options = {
    method: "GET",
    url: "https://themealdb.p.rapidapi.com/lookup.php",
    params: { i: dishId },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "57607c4060msh8305edef8d177d9p1a088fjsnad865a1577b2",
      "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      // console.log(response.data.meals);
      return response.data.meals;
    })
    .catch(function (error) {
      // console.error(error);
    });
};

const fetchByIngredient = (ingredient: string | undefined) => {
  const options = {
    method: "GET",
    url: "https://themealdb.p.rapidapi.com/filter.php",
    params: {
      i: ingredient,
    },
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
      // console.error(error);
    });
};

const fetchByDishName = (dishName: string | undefined) => {
  const options = {
    method: "GET",
    url: "https://themealdb.p.rapidapi.com/search.php",
    params: dishName,
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
      // console.error(error);
    });
};

export {
  fetchCategory,
  fetchPopular,
  fetchSpecificCategory,
  fetchDish,
  fetchByIngredient,
  fetchByDishName,
};
