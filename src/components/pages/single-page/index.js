import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../../spinner';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../breadcrumbs';

import useKinopoiskService from '../../../services/use-kinopoisk-server';
import ErrorMessage from '../../error-message';
import Skeleton from '../../promo/skeleton';

import PromoIcon from '../../../assets/img/icon/sort.svg';
import '../../promo/promo.scss';
import './single-page.scss';

const setContent = (process, Component, newMoviesLoading) => {
   switch (process) {
      case 'waiting':
         return Array(10).fill(0).map((_, i) => <Skeleton style={{ 'marginTop': '0' }} key={i} />);
      case 'loading':
         return newMoviesLoading ? <Component /> : <Spinner />;
      case 'confirmed':
         return <Component />;
      case 'error':
         return <ErrorMessage />;
      default:
         throw new Error('Unexpected process state');
   }
}

const SinglePage = ({ typeMovie, titlePage }) => {
   const [movies, setMovies] = useState([]);
   const [newMoviesLoading, setNewMoviesLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [fetching, setFetching] = useState(true);

   const { getAllMovies, setProcess, process } = useKinopoiskService();

   useEffect(() => {
      if (fetching && currentPage < 20) {
         !fetching ? setNewMoviesLoading(false) : setNewMoviesLoading(true);
         getAllMovies(currentPage, typeMovie)
            .then(
               onMoviesListLoaded,
               setCurrentPage(prevState => prevState + 1)
            )
            .then(() => setProcess('confirmed'))
            .finally(() => setFetching(false));
      }
      //eslint-disable-next-line
   }, [fetching]);

   useEffect(() => {
      document.addEventListener('scroll', scrollHandler)
      return function () {
         document.removeEventListener('scroll', scrollHandler)
      }
   }, []);

   const onMoviesListLoaded = (newMovies) => {
      setMovies([...movies, ...newMovies])
      setNewMoviesLoading(false);
   }

   const scrollHandler = (e) => {
      if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 300) {
         setFetching(true)
      } else {
         setFetching(false)
      }
   }

   const breadcrumbs = [
      { link: '/', title: 'Главная' },
      { link: '/', title: titlePage }
   ]

   function renderItems(arr) {
      const items = arr.map((item) => {
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

   return (
      <section className="promo">
         <Helmet>
            <meta name="description" content={titlePage} />
            <title>{titlePage}</title>
         </Helmet>
         <div className="promo__container container">
            <Breadcrumbs props={breadcrumbs} />
            <h3 className="promo__title title promo-popular__title">{titlePage}</h3>
            <div className="promo__body">
               {/* <Skeleton style={{ 'marginTop': '0' }} /> */}
               {setContent(process, () => renderItems(movies), newMoviesLoading)}
            </div>
         </div>
      </section >
   )
}

export default SinglePage;