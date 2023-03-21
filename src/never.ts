export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error("test");
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = undefined;

//呼び元に戻ってこないような関数の戻り値に対応するアノテーションはnever
//void vs never:voidはreturnされる値がないが呼び元には返ってくる場合、neverは呼び元に返ってこない
