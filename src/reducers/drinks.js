import { FETCH_DRINKS } from '../actions';

const ListOfDrinks = [];

const drinks = (state = ListOfDrinks, action) => {
  switch (action.type) {
    case FETCH_DRINKS:
      return action.payload;
    default:
      return state;
  }
};

export default drinks;
