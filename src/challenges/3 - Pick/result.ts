export type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

type MyPick<T, U extends keyof T> = {
  [Prop in U]: T[Prop];
};

type TodoPreview = MyPick<Todo, "title">;

const todo: TodoPreview = {
  title: "Clean room",
};
