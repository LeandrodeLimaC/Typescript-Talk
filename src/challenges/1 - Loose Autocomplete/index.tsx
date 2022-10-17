/*
 * Queremos que o autocomplete do Typescript nos indique os types presentes em
 * IconSize como sugestão, mas que tambem permita a entrada de qualquer outra string
 * no parametro size
 */

type IconSize = "sm" | "md" | "lg";

type LooseAutocomplete<T> = any;

type IconProps = {
  size: IconSize;
};

const Icon = (props: IconProps) => {
  return null;
};

const Comp1 = () => {
  return (
    <>
      <Icon size="md" />
      <Icon size="something" />
    </>
  );
};
