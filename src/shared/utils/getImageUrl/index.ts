import { IMAGES_URL, ImagesType } from "../../config";
import { IFilmData } from "../../interfaces";

export const getImageUrl = (
  film: IFilmData,
  typeOfImage: string
): string | undefined => {
  switch (typeOfImage) {
    case ImagesType.POSTER:
      return IMAGES_URL + film.poster_path;
    case ImagesType.BACKDROP + film.backdrop_path:
      return IMAGES_URL + film.backdrop_path;
    default:
      return undefined;
  }
};
