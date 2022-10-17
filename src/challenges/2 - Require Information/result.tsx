type Pokemon = {
  name: string;
};

type Trainer = {
  firstName: string;
  lastName: string;
};

type GetRequiredInformation<T> = T extends Pokemon
  ? { type: string } & Pokemon
  : { city: string };

export type RequiredInformationForPokemon = GetRequiredInformation<Pokemon>;

export type RequiredInformationForTrainer = GetRequiredInformation<Trainer>;

const trainer: RequiredInformationForTrainer = {
  city: "Pallet",
};

const pokemon: RequiredInformationForPokemon = {
  type: "Poison",
  name: "Grimmer",
};
