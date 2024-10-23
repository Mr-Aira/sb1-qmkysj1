export type ZodiacSign = {
  name: string;
  symbol: string;
  date: string;
  element: string;
  traits: string[];
  description: string;
  compatibility: string[];
  luckyNumbers: number[];
  color: string;
};

export type UserBirthday = {
  day: number;
  month: number;
  year: number;
};