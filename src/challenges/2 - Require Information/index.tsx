/*
 * O utility type GetRequiredInformation, deve receber um tipo
 * Pokemon ou Trainer e devolver de forma condicional,
 * um novo tipo contendo informações adicionais obrigatórias
 */

type Pokemon = {
  name: string;
};

type Trainer = {
  firstName: string;
  lastName: string;
};

type GetRequiredInformation<T> = any;

export type RequiredInformationForPokemon = GetRequiredInformation<Pokemon>;

export type RequiredInformationForTrainer = GetRequiredInformation<Trainer>;
