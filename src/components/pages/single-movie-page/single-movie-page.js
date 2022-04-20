import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ErrorMessage from '../../error-message/error-message';
import Spinner from '../../spinner/spinner';
import './single-movie-page.scss';
import useKinopoiskService from '../../../services/use-kinopoisk-server';


const SingleMoviePage = () => {
   const { movieId } = useParams();
   const [movie, setMovie] = useState({});

   const { loading, error, getMovie, clearError } = useKinopoiskService();

   useEffect(() => {
      updateMovie()
      // getMovie(1100777).then(res => console.log(res))
   }, [movieId])

   const updateMovie = () => {
      clearError();
      getMovie(movieId)
         .then(onMovieLoaded)
   }

   const onMovieLoaded = (movie) => {
      setMovie(movie)
   }

   const errorMessage = error ? <ErrorMessage /> : null;
   const spinner = loading ? <Spinner /> : null;
   const content = !(loading || error) ? <View movie={movie} /> : null;

   return (
      <>
         {errorMessage}
         {spinner}
         {content}
      </>
   )
}

const View = ({ movie }) => {
   const { name, imageUrl, age, ratingImdb, ratingKinopoisk, year, description, shortDescription, countries, genres } = movie;

   console.log(movie);

   return (
      <section className='single-movie container'>
         <div className="single-movie__wrapper">
            <div className="single-movie__img">
               <img src={imageUrl} />
            </div>
            <div className="single-movie__info">
               <div className="single-movie__title">
                  <h2 className='single-movie__name'>{name}</h2>
                  <p className="single-movie__descr">{shortDescription}</p>
                  <div className="single-movie__rating">
                     <p className="single-movie__rating-kinopoisk">{ratingKinopoisk}<span>КиноПоиск</span></p>
                     <p className="single-movie__rating-imdb">{ratingImdb} <span>IMDb</span></p>
                  </div>
               </div>
               <div className="single-movie__about-film">
                  <h3 className='single-movie__about-title'>О фильме</h3>
                  <div className="single-movie__item">
                     <p>Год производства</p>
                     <p>{year}</p>
                  </div>
                  <div className="single-movie__item">
                     <p>Страна</p>
                     <p>{countries}</p>
                  </div>
                  <div className="single-movie__item">
                     <p>Жанр</p>
                     <p>{genres}</p>
                  </div>
                  <div className="single-movie__item">
                     <p>Слоган</p>
                     <p>{shortDescription}</p>
                  </div>
                  <div className="single-movie__item">
                     <p>Возраст</p>
                     <p>{age}</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="single-movie__plot">
            <h3 className='single-movie__plot-title'>Сюжет</h3>
            <p className='single-movie__plot-text'>
               {description}
            </p>
         </div>
      </section>
   )
}

export default SingleMoviePage;