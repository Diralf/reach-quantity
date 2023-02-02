export type DeepPartial<T> = {
  [Key in keyof T]?: T[Key] extends Date ? T[Key] : DeepPartial<T[Key]>;
};
