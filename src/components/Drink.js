import React from 'react';
import PropTypes from 'prop-types';

const Drink = props => {
  const {
    location,
  } = props;

  const {
    state,
  } = location;

  const {
    data,
  } = state;

  const {
    idDrink,
    strDrink,
    strCategory,
    strDrinkThumb,
    strInstructions,
    strAlcoholic,
    strGlass,
  } = data;

  const ingredients = [];
  const measures = [];

  for (let i = 1; i < 16; i += 1) {
    if (data[`strIngredient${i}`] !== null) {
      ingredients.push(data[`strIngredient${i}`]);
      measures.push(data[`strMeasure${i}`]);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6">
          <img className="img-fluid rounded" src={strDrinkThumb} alt={strDrink} />
        </div>
        <div className="col-sm-6">
          <span className="badge badge-secondary">{idDrink}</span>
          <h1>{strDrink}</h1>
          <span className="bg-danger text-white p-2 rounded ">{strCategory}</span>
          <hr className="mt-5" />
          <div className="row">
            <div className="col-sm-6">
              <h4>Ingredients</h4>
              <ul>
                {
                  ingredients.map((ingredient, index) => <li key={`${index + ingredient}`}>{ingredient}</li>)
                }
              </ul>
            </div>
            <div className="col-sm-6">
              <h4>Measures</h4>
              <ul>
                {
                  measures.map((mesure, index) => <li key={`${index + mesure}`}>{mesure}</li>)
                }
              </ul>
            </div>
          </div>

          <hr className="mt-4" />
          <h4>{strGlass}</h4>
          <p>{strInstructions}</p>
          <span className="bg-danger text-white p-1">{strAlcoholic === 'Alcoholic' ? '+18' : 'Family'}</span>
        </div>

        <a href="/">
          <button type="button" className="btn btn-danger mt-4">{' < Go Home'}</button>
        </a>

      </div>
    </div>
  );
};

Drink.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.shape({
        idDrink: PropTypes.string,
        strDrink: PropTypes.string,
        strCategory: PropTypes.string,
        strDrinkThumb: PropTypes.string,
        strInstructions: PropTypes.string,
        strAlcoholic: PropTypes.string,
        strGlass: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Drink;
