import React, { useContext } from 'react';
import { CloseContext } from '../../CloseContext';
import './Languages.scss';

type Props = {
  languages: Language[];
};

export const Languages: React.FC<Props> = (props) => {
  const { languages } = props;
  const { setVisible } = useContext(CloseContext);

  return (
    <ul className="Languages Languages__list">
      {languages.map((language: Language) => (
        <li
          key={language.code}
          className="Languages__item"
        >
          <button
            type="button"
            className="Languages__button"
            onClick={() => {
              if (languages[languages.length - 1].code === language.code) {
                setVisible([]);
              }
            }}
          >
            {language.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
