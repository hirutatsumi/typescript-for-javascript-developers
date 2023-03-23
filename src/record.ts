export {};

// Record<K, T>

type Prefectures = "Tokyo" | "Chiba" | "Tottori" | "Shiga";

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const Covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 2000 },
  Chiba: { kanji_name: "千葉", confirmed_cases: 1500 },
  Tottori: { kanji_name: "鳥取", confirmed_cases: 20 },
  Shiga: { kanji_name: "滋賀", confirmed_cases: 100 },
};
