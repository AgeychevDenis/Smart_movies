import { useHttp } from '../hooks/http.hook';

const useKinopoiskService = () => {
   const { loading, request, error, clearError } = useHttp();

   const _apiKey = '817e16ef-f08e-4086-b21e-0d3737b1b32d'

   const getAllCharacters = async () => {
      const res = await request('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1', 'GET', null, {
         'X-API-KEY': _apiKey, 'Content-Type': 'application/json'
      });
      return res.films.map(_transformCharacter);
   }

   const getCollection = async () => {
      const res = await request('http://myjson.dit.upm.es/api/bins/dok9');
      return res.collection.map(_transformCollection)

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

   const _transformCollection = (res) => {
      return {
         id: res.id,
         imageUrl: res.imageUrl,
         title: res.title,
         subtitle: res.subtitle
      }
   }

   return { loading, error, clearError, getAllCharacters, getCollection }
}





export default useKinopoiskService;