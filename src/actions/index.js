import axios from 'axios';

export const FETCH_DRINKS = 'FETCH_DRINKS';

export function getDrinks(data) {
  return {
    type: FETCH_DRINKS,
    payload: data,
  };
}
export const ORDER_DRINKS_BY = 'ORDER_DRINKS_BY';

export function returnFilteredDrinks(data) {
  return {
    type: ORDER_DRINKS_BY,
    payload: data,
  };
}

export const loadDrinks = char => async dispatch => {
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${char.letter || 'a'}`)
    .then(response => {
      dispatch(getDrinks(response.data.drinks));
      dispatch(returnFilteredDrinks(response.data.drinks));
    });
};

export const sortDrinks = (drinks, category) => dispatch => {
  let drinksFiltered = [];
  if (category === 'All') {
    drinksFiltered = drinks;
  } else if (category === 'Other') {
    drinksFiltered = drinks.filter(drink => drink.strCategory !== 'Ordinary Drink'
      && drink.strCategory !== 'Cocktail'
      && drink.strCategory !== 'Shot');
  } else {
    drinksFiltered = drinks.filter(drink => drink.strCategory === category);
  }
  if (drinksFiltered.length === 0) {
    drinksFiltered = [{}];
  }
  dispatch(returnFilteredDrinks(drinksFiltered));
};
