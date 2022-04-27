import { useHttp } from '../hooks/http.hook';

const useKinopoiskService = () => {
   const { loading, request, error, clearError } = useHttp();

   const _apiKey = 'e26ee2eb-f418-44d1-abcf-ce19e4e17c2e'

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

   const getMovieByName = async (name) => {
      const res = await request(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${name}&page=1`, 'GET', null, {
         'X-API-KEY': _apiKey, 'Content-Type': 'application/json'
      });
      return res.films.map(_transformSearchMovie);
   }

   const getMovie = async (id) => {
      const res = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, 'GET', null, {
         'X-API-KEY': _apiKey, 'Content-Type': 'application/json'
      });
      return _transformMovie(res)
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

   const _transformSearchMovie = (res) => {
      return {
         id: res.filmId,
         title: res.nameRu,
         year: res.year,
      }
   }

   const _transformMovie = (res) => {
      return {
         id: res.kinopoiskId,
         name: res.nameRu,
         imageUrl: res.posterUrlPreview,
         age: res.ratingAgeLimits.slice(3, 5),
         ratingImdb: res.ratingImdb || '—',
         ratingKinopoisk: res.ratingKinopoisk,
         year: res.year,
         description: res.description,
         shortDescription: res.shortDescription || '—',
         countries: res.countries.map((item, i) => (i ? ', ' : '') + item.country),
         genres: res.genres.map((item, i) => (i ? ', ' : '') + item.genre)
      }
   }

   return { loading, error, clearError, getAllCharacters, getCollection, getMovie, getMovieByName }
}





export default useKinopoiskService;