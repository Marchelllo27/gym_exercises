export const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, oprions) => {
  const response = await fetch(url, oprions);
  const data = await response.json();
  return data;
};
