import { useHttp } from '../hooks/http.hook';

const useKinopoiskService = () => {
   const { loading, request, error, clearError } = useHttp();

   const getAllCharacters = async () => {
      const res = await request('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1');
      return res.films.map(_transformCharacter);
   }

   const getCharacter = async (id) => {
      const res = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`)
      return _transformCharacter(res);
   }

   const _transformCharacter = (res) => {
      return {
         id: res.filmId,
         imageUrl: res.posterUrl,
         rating: res.rating,
         year: res.year,
         country: res.countries[0].country,
         time: res.filmLength,
         title: res.nameRu,
         genre: res.genres[0].genre
      }
   }

   return { loading, error, clearError, getAllCharacters }
}





export default useKinopoiskService;