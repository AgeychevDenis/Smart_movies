import { Component } from 'react';
import KinopoiskService from '../../services/kinopoisk-server';
import ErrorMessage from '../error-message/error-message';
import Skeleton from '../skeleton/skeleton';

import PromoIcon from '../../assets/img/icon/sort.svg';
import './promo.scss';

class Promo extends Component {
   state = {
      charList: [],
      loading: true,
      error: false
   }

   KinopoiskService = new KinopoiskService();

   componentDidMount() {
      this.KinopoiskService.getAllCharacters()
         .then(this.onCharListLoaded)
         .catch(this.onError)
   }

   onCharListLoaded = (charList) => {
      this.setState({
         charList,
         loading: false
      })
   }

   onError = () => {
      this.setState({
         error: true,
         loading: false
      })
   }

   renderItems(arr) {
      const items = arr.map((item) => {

         return (
            <a className="promo__card" key={item.id}>
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
            </a>
         )
      });
      return (
         <div className="promo__wrapper">
            {items}
         </div>
      )
   }

   render() {
      const { charList, loading, error } = this.state;

      const items = this.renderItems(charList);

      const errorMessage = error ? <ErrorMessage /> : null;
      const spinner = loading ? <Skeleton /> : null;
      const content = !(loading || error) ? items : null;

      return (
         <section className="promo">
            <div className="promo__container container">
               <h2 className="promo__title title">Рекомендуем вам посмотреть</h2>
               <div className="promo__slider">
                  {errorMessage}
                  {spinner}
                  {content}
               </div>
            </div>
         </section>
      )
   }
}
export default Promo;