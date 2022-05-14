import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useKinopoiskService from '../../../services/use-kinopoisk-server';
import ErrorMessage from '../../error-message/error-message';
import Skeleton from '../../skeleton/skeleton';

import PromoIcon from '../../../assets/img/icon/sort.svg';
import '../../promo/promo.scss';
import './popular-cinema-page.scss';

const PopularPinemaPage = () => {
   const [charList, setCharList] = useState(null);

   const { loading, error, getAllCharacters } = useKinopoiskService();

   useEffect(() => {

      getAllCharacters(2)
         .then(onCharListLoaded)
      //eslint-disable-next-line
   }, [])

   const onCharListLoaded = (charList) => {
      setCharList(charList);
   }

   console.log(charList);

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
      return (
         items
      )
   }

   const items = renderItems(charList);

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
            <h3 className="promo__title title">Популярное</h3>
            <div className="promo__body">
               {errorMessage}
               {skeleton}
               {content}
            </div>
         </div>
      </section >
   )
}

export default PopularPinemaPage;