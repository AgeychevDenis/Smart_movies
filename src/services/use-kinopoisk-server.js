import { useHttp } from '../hooks/http.hook';

const useKinopoiskService = () => {
   const { loading, request, error, clearError, process, setProcess } = useHttp();

   const _apiKey = '817e16ef-f08e-4086-b21e-0d3737b1b32d'

   const getAllMovies = async (page = 1, type) => {
      const res = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${type}&page=${page}`, 'GET', null, {
         'X-API-KEY': _apiKey, 'Content-Type': 'application/json'
      });
      return res.films.map(_transformCharacter);
   }

   const getCollection = async (initial = 0, prev = 9) => {
      const res = await request('https://myjson.dit.upm.es/api/bins/3z9j');
      return res.collection.slice(initial, prev).map(_transformCollection)
   }

   const getCompilation = async (id) => {
      const res = await request('https://myjson.dit.upm.es/api/bins/3z9j');
      return res.collection[id]
   }

   const getMovieSlider = async () => {
      const res = await request('https://myjson.dit.upm.es/api/bins/gs2f');
      return res.data
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

   const getTrailer = async (id) => {
      const res = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`, 'GET', null, {
         'X-API-KEY': _apiKey, 'Content-Type': 'application/json'
      });
      return _transformTrailer(res)
   }

   const _transformCharacter = (res) => {
      return {
         id: res.filmId,
         imageUrl: res.posterUrl,
         rating: res.rating,
         year: res.year,
         country: res.countries[0].country,
         time: res.filmLength ? `${res.filmLength.replace(/:/, ' ч. ')} мин.` : '-',
         title: res.nameRu,
         genre: res.genres[0].genre
      }
   }

   const _transformCollection = (res) => {
      return {
         id: res.id,
         imageUrl: res.imageUrl,
         title: res.title,
         subtitle: res.subtitle,
         films: res.films
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
         age: res.ratingAgeLimits ? res.ratingAgeLimits.slice(3, 5) : '—',
         ratingImdb: res.ratingImdb || '—',
         ratingKinopoisk: res.ratingKinopoisk || '—',
         year: res.year || '—',
         description: res.description || '—',
         shortDescription: res.shortDescription || '—',
         countries: res.countries ? res.countries.map((item, i) => (i ? ', ' : '') + item.country) : '—',
         genres: res.genres ? res.genres.map((item, i) => (i ? ', ' : '') + item.genre) : '—'
      }
   }

   const _transformTrailer = (res) => {
      return {
         urls: res.items ? res.items.map(item => item.site === 'YOUTUBE' && item.url.replace(/^https:\/\/youtu.be\/|https:\/\/www.youtube.com\/watch\?v=/g, 'https://youtube.com/embed/')) : null
      }
   }

   //===Test=====================================================================================================================================================

   const getMovieID = async (id) => {
      const res = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, 'GET', null, {
         'X-API-KEY': _apiKey, 'Content-Type': 'application/json'
      });
      return _transformMovieID(res)
   }

   const getMovieSlide = async (id) => {
      const res = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, 'GET', null, {
         'X-API-KEY': _apiKey, 'Content-Type': 'application/json'
      });
      return res
   }

   const _transformMovieID = (res) => {
      return {
         id: res.kinopoiskId,
         name: res.nameRu,
         imageUrl: res.posterUrlPreview,
         age: res.ratingAgeLimits,
         ratingImdb: res.ratingImdb || '—',
         ratingKinopoisk: res.ratingKinopoisk || '—',
         year: res.year || '—',
         description: res.description || '—',
         countries: res.countries,
         time: res.filmLength,
         genres: res.genres
      }
   }

   //========================================================================================================================================================


   return {
      loading,
      error,
      process,
      setProcess,
      clearError,
      getAllMovies,
      getCollection,
      getMovie,
      getMovieByName,
      getCompilation,
      getTrailer,
      getMovieSlider,
      getMovieID, // Test
      getMovieSlide // Test
   }
}





export default useKinopoiskService;