export const getDeepValue = <T, U extends keyof T>(
  obj: T,
  firstKey: U,
  secondKey: keyof T[U]
) => {
  return obj[firstKey][secondKey];
};

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "12",
    d: 18,
  },
  zar: 12,
};

const value = getDeepValue(obj, "bar", "c");
