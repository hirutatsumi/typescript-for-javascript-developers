export {};

type MyExclude<T> = T extends string | number ? never : T;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude<SomeTypes>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableType = string | number | null | undefined;
type NonNullableType = NonNullable<NullableType>;
