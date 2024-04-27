import { IMAGES_URL, ImagesType } from "../../config";
import { IFilmData, IDetailsData } from "../../interfaces";

// Получение ссылки на картинку

export const getImageUrl = (
  film: IFilmData | IDetailsData,
  typeOfImage: string
): string => {
  switch (typeOfImage) {
    // Если постер

    case ImagesType.POSTER:
      return IMAGES_URL + film.poster_path;

    // Если фон

    case ImagesType.BACKDROP:
      return IMAGES_URL + film.backdrop_path;

    // Иначе - пустая строка

    default:
      return "";
  }
};
