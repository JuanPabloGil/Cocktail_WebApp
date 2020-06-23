import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { loadDrinks } from '../actions';
import Drinks from '../components/Drinks';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const drinks = useSelector(state => state.drinks);

  const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Y', 'Z'];

  const dispatch = useDispatch();

  const handleSelectChar = e => {
    dispatch(loadDrinks(e));
  };

  return (
    <div className="App">
      <div className="container">

        <h1>Amazing drinks </h1>
        {abc.map(letter => (
          <button type="button" key={letter} onClick={() => handleSelectChar({ letter })} className=" btn btn-danger m-1">
            {' '}
            {letter}
            {' '}
          </button>
        ))}

        <br />

        <span>Filter by:</span>
        <button type="button" className=" btn btn-danger m-1">All</button>
        <button type="button" className=" btn btn-danger m-1">Ordinary Drink</button>
        <button type="button" className=" btn btn-danger m-1">Cocktail</button>
        <button type="button" className=" btn btn-danger m-1">Shot</button>
        <button type="button" className=" btn btn-danger m-1">Others</button>

        <div className="row">
          {drinks.map(drink => <Drinks key={drink.idDrink} data={drink} />)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  loadDrinks: dispatch(loadDrinks('a')),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
