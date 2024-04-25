export const parseRating = (rating: number): number =>
  Number(rating.toString().slice(0, 4));
