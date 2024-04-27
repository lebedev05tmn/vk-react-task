import { IMAGES_URL, ImagesType } from "../../config";
import { IFilmData } from "../../interfaces";

export const getImageUrl = (film: IFilmData, typeOfImage: string): string => {
  switch (typeOfImage) {
    case ImagesType.POSTER:
      return IMAGES_URL + film.poster_path;
    case ImagesType.BACKDROP:
      return IMAGES_URL + film.backdrop_path;
    default:
      return "";
  }
};
