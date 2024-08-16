export type CountryDTO = {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
};

export type GameItem = {
  id: number;
  country: string;
  value: string;
  selected: boolean;
  error: boolean;
  disabled: boolean;
};
