import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Iframe from 'react-iframe'

import useKinopoiskService from '../../../services/use-kinopoisk-server';

import './single-movie-page.scss';

import ErrorMessage from '../../../components/error-message/error-message';
import Spinner from '../../../components/spinner/spinner';

const setContent = (process, Component, data, trailer) => {
   switch (process) {
      case 'waiting':
         return <Spinner />;
      case 'loading':
         return <Spinner />;
      case 'confirmed':
         return <Component data={data} trailer={trailer} />;
      case 'error':
         return <ErrorMessage />;
      default:
         throw new Error('Unexpected process state');
   }
}

const SingleMoviePage = () => {
   const { movieId } = useParams();
   const [movie, setMovie] = useState({});
   const [trailer, setTrailer] = useState([])

   const { getMovie, clearError, setProcess, process, getTrailer } = useKinopoiskService();

   useEffect(() => {
      updateMovie()
      //eslint-disable-next-line
   }, [movieId])


   const updateMovie = () => {
      clearError();
      getMovie(movieId)
         .then(onMovieLoaded)
         .then(() => setProcess('confirmed'))
      getTrailer(movieId)
         .then(onTrailerLoaded)
   }

   const onMovieLoaded = (movie) => {
      setMovie(movie)
   }

   const onTrailerLoaded = (trailer) => {
      setTrailer(trailer)
   }

   return setContent(process, View, movie, trailer)
}

const View = ({ data, trailer }) => {
   const { name, imageUrl, age, ratingImdb, ratingKinopoisk, year, description, shortDescription, countries, genres } = data;
   const { urls } = trailer;

   const url = urls?.filter(url => url)[0];

   return (
      <section className='single-movie container'>
         <Helmet>
            <meta name="description" content={`${name} ${year}`} />
            <title>{`${name} ${year}`}</title>
         </Helmet>
         <div className="single-movie__wrapper">
            <div className="single-movie__img">
               <img src={imageUrl} alt={name} />
            </div>
            <div className="single-movie__info">
               <div className="single-movie__title">
                  <h2 className='single-movie__name'>{name} ({year})</h2>
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
                     <p>{age === '—' ? age : '+' + age}</p>
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
         {url ?
            <div className="single-movie__trailer">
               <Iframe url={url}
                  id="myId"
                  display="initial"
                  position="relative" />
            </div>
            : null
         }

      </section>
   )
}

export default SingleMoviePage;