import axios from 'axios';

export const FETCH_DRINKS = 'FETCH_DRINKS';

export function getDrinks(data) {
  return {
    type: FETCH_DRINKS,
    payload: data,
  };
}

export const loadDrinks = (dispatch, char) => {
  const letter = 'b';
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter || char}`)
    .then(response => {
      dispatch(getDrinks(response.data.drinks));
      console.log('here');
    });
};
