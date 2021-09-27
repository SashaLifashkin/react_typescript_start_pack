import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { API_DATA } from './ApiQuery';
import { Countries } from './components/Countries/Countries';
import './App.scss';
import { CloseContext } from './CloseContext';

export const App: React.FC = () => {
  const { loading, error, data } = useQuery(API_DATA);
  const [visible, setVisible] = useState<string[]>([]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  const handleClick = (word: string) => {
    if (visible.includes(word)) {
      setVisible(current => current.filter(item => item !== word));
    } else {
      setVisible(current => [...current, word]);
    }
  };

  const contextValue: Context = {
    visible,
    setVisible,
    handleClick,
  };

  return (
    <CloseContext.Provider value={contextValue}>
      <div className="App">
        <h1 className="App__title">
          Continents and Countries of the world
        </h1>
        <ul className="App__list">
          {data.continents.map((continent: Continent) => {
            const isOpen = visible.includes(continent.name);

            return (
              <li
                key={continent.code}
                className="App__item"
              >
                <button
                  type="button"
                  className="App__button"
                  onClick={() => handleClick(continent.name)}
                >
                  {continent.name}
                </button>
                {isOpen && (
                  <Countries
                    countries={continent.countries}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </CloseContext.Provider>
  );
};
