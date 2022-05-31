import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

import useKinopoiskService from '../../services/use-kinopoisk-server';
import ErrorMessage from '../error-message';
import Skeleton from './skeleton';
import Spinner from '../spinner';

import PromoIcon from '../../assets/img/icon/sort.svg';
import './swiper.scss'
import './promo.scss';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

const setContent = (process, Component, data) => {
   switch (process) {
      case 'waiting':
         return <Spinner />;
      case 'loading':
         return (
            <div className='promo__skeleton'>
               {Array(6).fill(0).map((_, i) => <Skeleton key={i} />)}
            </div>
         );
      case 'confirmed':
         return <Component data={data} />;
      case 'error':
         return <ErrorMessage />;
      default:
         throw new Error('Unexpected process state');
   }
}

const Promo = () => {
   const [movieList, setMovieList] = useState([]);

   const { getAllMovies, setProcess, process } = useKinopoiskService();

   useEffect(() => {

      getAllMovies(1, 'TOP_100_POPULAR_FILMS')
         .then(onMovieListLoaded)
         .then(() => setProcess('confirmed'))
      //eslint-disable-next-line
   }, [])

   const onMovieListLoaded = (movieList) => {
      setMovieList(movieList);
   }

   function renderItems(arr) {
      const items = arr.map((item) => {

         return (
            <SwiperSlide key={item.id}>
               <Link to={`/movie/${item.id}`} className="promo__card">
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
            </SwiperSlide>
         )
      });
      return (
         <React.Fragment>
            <Swiper
               modules={[Navigation]}
               className="promo__wrapper"
               spaceBetween={10}
               slidesPerView={6}
               slidesPerGroup={6}
               navigation={{
                  nextEl: '.promo__button-next',
                  prevEl: '.promo__button-prev',
               }}
               breakpoints={{
                  320: {
                     width: 130,
                     slidesPerView: 1,
                     slidesPerGroup: 1,
                     freeMode: true
                  },
                  890: {
                     width: 1280,
                     slidesPerView: 6
                  }
               }}
            >
               {items}
            </Swiper>
         </React.Fragment>
      )
   }

   return (
      <section className="promo">
         <div className="promo__container container">
            <Link to='/popular_films' className="promo__title icon-square title">Популярное</Link>
            <div className="promo__slider">
               {setContent(process, () => renderItems(movieList))}
               <button className='promo__button-next swiper-button-next'></button>
               <button className='promo__button-prev swiper-button-prev'></button>
            </div>
         </div>
      </section >
   )
}

export default Promo;