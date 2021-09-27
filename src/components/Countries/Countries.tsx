import React, { useContext } from 'react';
import { Languages } from '../Languages/Languages';
import { CloseContext } from '../../CloseContext';
import './Countries.scss';

type Props = {
  countries: Country[];
};

export const Countries: React.FC<Props> = (props) => {
  const { countries } = props;

  const { visible, handleClick } = useContext(CloseContext);

  return (
    <ul className="Countries Countries__list">
      {countries.map((country: Country) => {
        const isOpen = visible.includes(country.name);

        return (
          <li
            key={country.code}
            className="Countries__item"
          >
            <button
              type="button"
              className="Countries__button"
              onClick={() => handleClick(country.name)}
            >
              {country.name}
            </button>
            {isOpen && <Languages languages={country.languages} />}
          </li>
        );
      })}
    </ul>
  );
};
