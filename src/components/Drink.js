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
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
  } = data.location.state.data;

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
          <h4>Ingredients</h4>
          <ul>
            <li>{strIngredient1}</li>
            <li>{strIngredient2}</li>
            {strIngredient3 === null ? '' : <li>{strIngredient3}</li>}
            {strIngredient4 === null ? '' : <li>{strIngredient4}</li>}
          </ul>
          <hr className="mt-5" />
          <h4>{strGlass}</h4>
          <p>{strInstructions}</p>
          <span className="bg-danger text-white p-1">{strAlcoholic === 'Alcoholic' ? '+18' : 'Family'}</span>
        </div>
        <Link to="/">
          {' '}
          <button className="btn btn-danger mt-4">{' < Go Home'}</button>
        </Link>
      </div>
    </div>
  );
};

export default Drink;
