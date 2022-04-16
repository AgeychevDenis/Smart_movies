import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import KinopoiskService from '../../services/kinopoisk-server';
import ErrorMessage from '../error-message/error-message';
import Skeleton from '../skeleton/skeleton';

import PromoIcon from '../../assets/img/icon/sort.svg';
import './swiper.scss'
import './promo.scss';

const Promo = () => {
   const [charList, setCharList] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
      const kinopoiskService = new KinopoiskService();

      kinopoiskService.getAllCharacters()
         .then(onCharListLoaded)
         .catch(onError)
   }, [])

   const onCharListLoaded = (charList) => {
      setCharList(charList);
      setLoading(false);
   }

   const onError = () => {
      setError(true);
      setLoading(false);
   }

   function renderItems(arr) {
      const items = arr.map((item) => {

         return (
            <SwiperSlide className="promo__card" key={item.id}>
               <div className="promo__card-img">
                  <img src={item.imageUrl} alt="promo" />
               </div>
               <div className="promo__content">
                  <p className="promo__content-rating">{item.rating}<img src={PromoIcon} alt="sort" />
                     <span className="name-rating">кинопоиск</span>
                  </p>
                  <p className="promo__content-year">{item.year}</p>
                  <p className="promo__content-country">{item.country}</p>
                  <p className="promo__content-time">{item.time} минут</p>
               </div>
               <h4 className="promo__wrapper-title">{item.title}</h4>
               <p className="promo__wrapper-subtitle">
                  {item.genre}
               </p>
            </SwiperSlide>
         )
      });
      return (
         <div className="promo__wrapper">
            {items}
         </div>
      )
   }

   const items = renderItems(charList);

   const errorMessage = error ? <ErrorMessage /> : null;
   const skeleton = loading ? Array(6).fill(0).map((_, i) => <Skeleton key={i} />) : null;
   const content = !(loading || error) ? items : null;

   return (
      <section className="promo">
         <div className="promo__container container">
            <h2 className="promo__title title">Рекомендуем вам посмотреть</h2>
            <div className="promo__slider">
               <Swiper
                  spaceBetween={16}
                  slidesPerView={6}
                  navigation
                  breakpoints={{
                     320: {
                        width: 200,
                        slidesPerView: 1,
                     },
                     1320: {
                        width: 1280,
                        slidesPerView: 6
                     }
                  }}
               >
                  {errorMessage}
                  {skeleton}
                  {content}
               </Swiper>
            </div>
         </div>
      </section >
   )
}

export default Promo;