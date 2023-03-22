export {};

interface Profile {
  name: "Ham";
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "Ham", underTwenty: false };

//let profile: { [index: string]: string | number } = {};

// How to write index-signatures
// { [ index: tupeForIndex ]: typeForValue }

profile.name = "Ham";
profile.age = 40;
profile.nationality = "Japan";
