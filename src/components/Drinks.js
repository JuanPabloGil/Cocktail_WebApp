import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Drinks = props => {
  const {
    data,
  } = props;

  const {
    idDrink, strDrink, strCategory, strDrinkThumb,
  } = data;

  return (
    <div className="col-md-6 col-lg-4 mt-5">
      <div className="Drink-Container">
        <img className="img-fluid" src={strDrinkThumb} alt={strDrink} />
        <Link
          to={
            {
              pathname: `/drink/${idDrink}`,
              state: { data },
            }
          }
        >
          <h3 className="Drink-Container-Title">{strDrink}</h3>
        </Link>
        <span className="Drink-Container-Category bg-danger">
          {strCategory}
        </span>
      </div>
    </div>
  );
};

Drinks.propTypes = {
  data: PropTypes.string.isRequired,
  idDrink: PropTypes.string.isRequired,
};

Drinks.propTypes = {
  data: PropTypes.shape({
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strCategory: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
};

export default Drinks;
