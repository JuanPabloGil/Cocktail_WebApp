import React from 'react';
import { Link } from 'react-router-dom';

const Drinks = drinks => {
  const {
    idDrink, strDrink, strCategory, strDrinkThumb,
  } = drinks.data;
  return (
    <div className="col-md-6 col-lg-4 mt-5">
      <div className="Drink-Container">
        <img className="img-fluid" src={strDrinkThumb} alt={strDrink} />
        <Link
          to={
            {
              pathname: `/drink/${idDrink}`,
              state: { data: drinks.data },
            }
          }
        >
          <h3 className="Drink-Container-Title">{strDrink}</h3>
        </Link>
        <span className="Drink-Container-Category bg-danger">
          {' '}
          {strCategory}
          {' '}
&nbsp;
        </span>
      </div>
    </div>
  );
};

export default Drinks;
