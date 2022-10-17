// Lookup-types

type User = {
  id: string;
  name: string;
  email: string;
  location: {
    address: string;
    city: string;
    zip: number;
    country: string;
  };
};

// Aqui utilizamos o lookup-types para extrair um
// type Location de dentro do nosso Mapped type User
type UserLocation = User["location"];

export const checkLocation = (location: UserLocation) => {
  return null;
};
