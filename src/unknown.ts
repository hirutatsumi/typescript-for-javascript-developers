export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === "number") {
  let sumUnknown = numberUnknown + 10;
}

//型ガード：typeof使いながら特定の型であることを確認しながらコードを安全に実行させる仕組みのこと
