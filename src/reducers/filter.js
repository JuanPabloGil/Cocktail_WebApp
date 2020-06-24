import { ORDER_DRINKS_BY } from '../actions';

const ListOfDrinks = [];

const filter = (state = ListOfDrinks, action) => {
  switch (action.type) {
    case ORDER_DRINKS_BY:
      return action.payload
    default:
      return state;
  }
};

export default filter;
