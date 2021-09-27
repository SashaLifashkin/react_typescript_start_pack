/// <reference types="react-scripts" />

interface Continent {
  code: number;
  name: string;
  countries: Country[];
}

interface Country {
  code: number;
  name: string;
  languages: Language[];
}

interface Language {
  code: number;
  name: string;
}

interface Context {
  visible: string[];
  setVisible: (text: string[]) => void;
  handleClick: (word: string) => void;
}
