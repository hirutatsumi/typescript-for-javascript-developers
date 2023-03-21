export {};

let profile1: object = { name: "Ham" };
profile1 = { birthYear: 1976 };

let profile2: {
  name: string;
} = { name: "Ham" };
profile2 = { birthYear: 1976 };

//objectの型指定よりも{}の型指定の方が制約が強いため推奨される
