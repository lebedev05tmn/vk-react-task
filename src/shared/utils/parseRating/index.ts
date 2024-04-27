export const parseRating = (rating: number, fixed: number): number =>
  parseFloat(rating.toFixed(fixed));
