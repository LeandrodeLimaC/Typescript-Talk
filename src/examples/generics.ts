export enum TaskType {
  FEATURE = "feature",
  BUG = "bug",
}

type Task<T = TaskType> = {
  name: string;
  type: T;
};

const whatever: Task = { name: "Single Sign On", type: TaskType.FEATURE };
whatever.type = TaskType.BUG; // Ok! qualquer membro do enum pode ser atribuido

type FeatureTask = Task<TaskType.FEATURE>;

const feature: FeatureTask = { name: "Single Sign On", type: TaskType.FEATURE };
feature.type = TaskType.BUG; // Erro!

const invalid: FeatureTask = { name: "Single Sign On", type: TaskType.BUG };
