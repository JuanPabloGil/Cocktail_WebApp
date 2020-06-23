import React from 'react';
import { Link } from 'react-router-dom';

const Drink = data => {
  const {
    idDrink,
    strDrink,
    strCategory,
    strDrinkThumb,
    strInstructions,
    strAlcoholic,
    strGlass,
  } = data.location.state.data;

  const ingredients = [];
  const measures = [];

  for (let i = 1; i < 16; i += 1) {
    if (data.location.state.data[`strIngredient${i}`] !== null) {
      ingredients.push(data.location.state.data[`strIngredient${i}`]);
      measures.push(data.location.state.data[`strMeasure${i}`]); // add
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
                  ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
                }
              </ul>
            </div>
            <div className="col-sm-6">
              <h4>Measures</h4>
              <ul>
                {
                  measures.map(mesure => <li key={mesure}>{mesure}</li>)
                }
              </ul>
            </div>
          </div>

          <hr className="mt-4" />
          <h4>{strGlass}</h4>
          <p>{strInstructions}</p>
          <span className="bg-danger text-white p-1">{strAlcoholic === 'Alcoholic' ? '+18' : 'Family'}</span>
        </div>
        <Link to="/">
          {' '}
          <button type="button" className="btn btn-danger mt-4">{' < Go Home'}</button>
        </Link>
      </div>
    </div>
  );
};

export default Drink;
