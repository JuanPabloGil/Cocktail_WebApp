import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { loadDrinks } from '../actions';
import Drinks from '../components/Drinks';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const drinks = useSelector(state => state.drinks);
  const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const dispatch = useDispatch();

  const handleSelectChar = () => {

  };

  return (
    <div className="App">
      <div className="container">

        <h1>Amazing drinks </h1>
        {abc.map(letter => (
          <button type="button" key={letter} onClick={handleSelectChar} className=" btn btn-danger m-1">
            {' '}
            {letter}
            {' '}
          </button>
        )) }

        <br />

        <span>Filter by:</span>
        <button className=" btn btn-danger m-1">All</button>
        <button className=" btn btn-danger m-1">Ordinary Drink</button>
        <button className=" btn btn-danger m-1">Cocktail</button>
        <button className=" btn btn-danger m-1">Shot</button>
        <button className=" btn btn-danger m-1">Others</button>

        <div className="row">
          {drinks.map(drink => <Drinks key={drink.idDrink} data={drink} />)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  loadDrinks: dispatch(loadDrinks),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
