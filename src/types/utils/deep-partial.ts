export type DeepPartial<T> = {
  [Key in keyof T]?: T[Key] extends Date | unknown[] ? T[Key] : DeepPartial<T[Key]>;
};
