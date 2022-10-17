export type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// type MyPick<T> = ?

type TodoPreview = MyPick<Todo, "title">;
