import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useKinopoiskService from '../../../services/use-kinopoisk-server';
import ErrorMessage from '../../error-message/error-message';
import Skeleton from '../../skeleton/skeleton';

import PromoIcon from '../../../assets/img/icon/sort.svg';
import '../../promo/promo.scss';
import './popular-cinema-page.scss';

const PopularPinemaPage = () => {
   const [movies, setMovies] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [fetching, setFetching] = useState(true);

   const { loading, error, getAllCharacters } = useKinopoiskService();

   useEffect(() => {
      if (fetching) {
         getAllCharacters(currentPage)
            .then(
               onMoviesListLoaded,
               setCurrentPage(prevState => prevState < 20 ? prevState + 1 : prevState = 20)
            )
            .finally(() => setFetching(false));
      }
      //eslint-disable-next-line
   }, [fetching]);

   useEffect(() => {
      document.addEventListener('scroll', scrollHandler)
      return function () {
         document.removeEventListener('scroll', scrollHandler)
      }
   }, [])

   const onMoviesListLoaded = (newMovies) => {
      setMovies([...movies, ...newMovies])
   }

   const scrollHandler = (e) => {
      if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
         setFetching(true)
      } else {
         setFetching(false)
      }
   }

   function renderItems(arr) {
      const items = arr?.map((item) => {
         return (
            <Link key={item.id} to={`/movie/${item.id}`} className="promo__card">
               <div className="promo__card-img">
                  <img src={item.imageUrl} alt="promo" />
               </div>
               <div className="promo__content">
                  <p className="promo__content-rating">{item.rating}<img src={PromoIcon} alt="sort" />
                     <span className="name-rating">кинопоиск</span>
                  </p>
                  <p className="promo__content-year">{item.year}</p>
                  <p className="promo__content-country">{item.country}</p>
                  <p className="promo__content-time"><span>{item.time}</span></p>
               </div>
               <h4 className="promo__wrapper-title">{item.title}</h4>
               <p className="promo__wrapper-subtitle">
                  {item.genre}
               </p>
            </Link>
         )
      });
      return items;
   }

   const items = renderItems(movies);

   const errorMessage = error ? <ErrorMessage /> : null;
   const skeleton = loading ?
      <div className='promo__skeleton'>
         {Array(6).fill(0).map((_, i) => <Skeleton key={i} />)}
      </div>
      : null;
   const content = !(loading || error) ? items : null;

   return (
      <section className="promo">
         <div className="promo__container container">
            <h3 className="promo__title title promo-popular__title">Популярное</h3>
            <div className="promo__body">
               {/* {errorMessage}
               {skeleton} */}
               {items}
            </div>
         </div>
      </section >
   )
}

export default PopularPinemaPage;