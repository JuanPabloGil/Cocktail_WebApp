import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { loadDrinks, sortDrinks } from '../actions';
import Drinks from '../components/Drinks';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const drinks = useSelector(state => state.drinks);
  const filters = useSelector(state => state.filter);

  const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Y', 'Z'];

  const dispatch = useDispatch();

  const handleSelectChar = e => {
    dispatch(loadDrinks(e));
  };

  const handleFilter = (e, category) => {
    dispatch(sortDrinks(e, category));
  };

  const displayDrinks = () => {
    let render;
    if (filters.length === 0) {
      render = drinks.map(drink => <Drinks key={drink.idDrink} data={drink} />);
    } else {
      render = filters.map(filter => <Drinks key={filter.idDrink} data={filter} />);
    }
    return render;
  };

  return (
    <div className="App">
      <div className="container">

        <h1 className="text-center">Find an Amazing drink </h1>

        <hr />

        {
          abc.map(letter => (
            <button type="button" key={letter} onClick={() => handleSelectChar({ letter })} className=" btn btn-danger m-1">
              {letter}
            </button>
          ))
        }

        <br />
        <hr />

        <span>Filter by:</span>
        <button type="button" onClick={() => handleFilter(drinks, 'All')} className=" btn btn-danger m-1">All</button>
        <button type="button" onClick={() => handleFilter(drinks, 'Ordinary Drink')} className=" btn btn-danger m-1">Ordinary Drink</button>
        <button type="button" onClick={() => handleFilter(drinks, 'Cocktail')} className=" btn btn-danger m-1">Cocktail</button>
        <button type="button" onClick={() => handleFilter(drinks, 'Shot')} className=" btn btn-danger m-1">Shot</button>
        <button type="button" onClick={() => handleFilter(drinks, 'Other')} className=" btn btn-danger m-1">Others</button>

        <div className="row">
          {displayDrinks()}
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
