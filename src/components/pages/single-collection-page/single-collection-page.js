import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useKinopoiskService from '../../../services/use-kinopoisk-server';
import ErrorMessage from '../../error-message/error-message';
import Spinner from '../../spinner/spinner';

import img from '../../../assets/img/single-movie/img-silngle.jpg'

import './single-collection-page.scss'

const SingleCollectionPage = () => {
   const { compilationId } = useParams();

   const [compilation, setCompilationList] = useState({});
   const [films, setFilms] = useState();
   const [movie, setMovie] = useState([]);

   const { getCompilation, loading, error, clearError, getCompilationFilms, getMovie } = useKinopoiskService();

   useEffect(() => {
      updateCompilation()

      updateFilms()

      // updateMovie()

      //eslint-disable-next-line
   }, [compilationId])

   const updateCompilation = () => {
      clearError();
      getCompilation(compilationId)
         .then(onCompilationLoaded)
   }

   const updateFilms = () => {
      clearError();
      getCompilationFilms(compilationId)
         .then(onFilmsLoaded)
   }

   const updateMovie = () => {
      clearError();
      getMovie(films).then(onMovieLoaded)
   }

   const onCompilationLoaded = (compilation) => {
      setCompilationList(compilation)
   }

   const onFilmsLoaded = (films) => {
      setFilms(films)
   }

   const onMovieLoaded = (movie) => {
      setMovie(movie)
   }

   const errorMessage = error ? <ErrorMessage /> : null;
   const spinner = loading ? <Spinner /> : null;
   const content = !(loading || error) ? <View compilation={compilation} /> : null;

   return (
      <>
         {errorMessage}
         {spinner}
         {content}
      </>
   )
}

const View = ({ compilation }) => {

   const { title, subtitle } = compilation;
   return (
      <section className='compilation container'>
         <ul className='breadcrumbs__list'>
            <li className='breadcrumbs__list-item'>
               <Link to="/" >Главная</Link>
            </li>
            <li className='breadcrumbs__list-item'>
               <Link to="/">Подборки фильмов</Link>
            </li>
            <li className='breadcrumbs__list-item'>
               <Link to="/">{title}</Link>
            </li>
         </ul>
         <h2 className="compilation__title">{title}</h2>
         <p className="compilation__subtitle">{subtitle}</p>
         <div className="line"></div>
         <ul className="compilation__list">
            <li className="compilation__item">
               <div className="compilation__wrapper">
                  <span className="compilation__cell">
                     1
                  </span>
                  <Link to="/" className="compilation__inner">
                     <div className="compilation__img">
                        <img src={img} alt="compilation__img" />
                     </div>
                     <div className="compilation__description">
                        <h3 className="compilation__description-title">Однажды в кино</h3>
                        <div className="compilation__rating">
                           <p className="compilation__rating-kinopoisk">7.8<span>КиноПоиск</span></p>
                           <p className="compilation__rating-imdb">7.5<span>IMDb</span></p>
                        </div>
                        <ul className="compilation__info-list">
                           <li className='compilation__info-item'>США, Индия, Франция </li>
                           <li className='compilation__info-item'>2021 </li>
                           <li className='compilation__info-item'>1 ч. 50 мин </li>
                           <li className='compilation__info-item'>+18</li>
                        </ul>
                        <p className="compilation__genres">Драма</p>
                        <p className="compilation__genres">Драма</p>
                        <p className="compilation__genres">Драма</p>
                     </div>
                  </Link>
               </div>
               <p className="compilation__about">
                  Когда магия кино проникает в сердечко 9-летнего Самая, он готов на все, лишь бы проводить с ним каждую минуту
               </p>
            </li>
            <li className="compilation__item">
               <div className="compilation__wrapper">
                  <span className="compilation__cell">
                     1
                  </span>
                  <Link to="/" className="compilation__inner">
                     <div className="compilation__img">
                        <img src={img} alt="compilation__img" />
                     </div>
                     <div className="compilation__description">
                        <h3 className="compilation__description-title">Однажды в кино</h3>
                        <div className="compilation__rating">
                           <p className="compilation__rating-kinopoisk">7.8<span>КиноПоиск</span></p>
                           <p className="compilation__rating-imdb">7.5<span>IMDb</span></p>
                        </div>
                        <ul className="compilation__info-list">
                           <li className='compilation__info-item'>США, Индия, Франция </li>
                           <li className='compilation__info-item'>2021 </li>
                           <li className='compilation__info-item'>1 ч. 50 мин </li>
                           <li className='compilation__info-item'>+18</li>
                        </ul>
                        <p className="compilation__genres">Драма</p>
                     </div>
                  </Link>
               </div>
               <p className="compilation__about">
                  Когда магия кино проникает в сердечко 9-летнего Самая, он готов на все, лишь бы проводить с ним каждую минуту
               </p>
            </li>
            <li className="compilation__item">
               <div className="compilation__wrapper">
                  <span className="compilation__cell">
                     1
                  </span>
                  <Link to="/" className="compilation__inner">
                     <div className="compilation__img">
                        <img src={img} alt="compilation__img" />
                     </div>
                     <div className="compilation__description">
                        <h3 className="compilation__description-title">Однажды в кино</h3>
                        <div className="compilation__rating">
                           <p className="compilation__rating-kinopoisk">7.8<span>КиноПоиск</span></p>
                           <p className="compilation__rating-imdb">7.5<span>IMDb</span></p>
                        </div>
                        <ul className="compilation__info-list">
                           <li className='compilation__info-item'>США, Индия, Франция </li>
                           <li className='compilation__info-item'>2021 </li>
                           <li className='compilation__info-item'>1 ч. 50 мин </li>
                           <li className='compilation__info-item'>+18</li>
                        </ul>
                        <p className="compilation__genres">Драма</p>
                     </div>
                  </Link>
               </div>
               <p className="compilation__about">
                  Когда магия кино проникает в сердечко 9-летнего Самая, он готов на все, лишь бы проводить с ним каждую минуту
               </p>
            </li>
         </ul>
      </section>
   )
}

export default SingleCollectionPage;