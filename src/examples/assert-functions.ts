import { AssertionError } from "assert";

export function assertIsNumber(it: unknown): asserts it is number {
  if (typeof it !== "number") {
    throw new AssertionError({ message: "Not a number" });
  }
}

const double = (input: any) => {
  assertIsNumber(input);

  return input * 2;
};

double(1); // Ok
double("1"); // Error "Not a number"
