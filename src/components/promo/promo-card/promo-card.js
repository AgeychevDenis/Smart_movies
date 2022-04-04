import { Component } from 'react';
import KinopoiskService from '../../../services/kinopoisk-server';
import MyLoader from '../../spinner/spinner';
import ErrorMessage from '../../error-message/error-message';

import PromoIcon from '../../../assets/img/icon/sort.svg';
import './promo-card.scss';

class PromoCard extends Component {
   constructor(props) {
      super(props);
      this.updateChar();
   }

   state = {
      char: {},
      loading: true,
      error: false
   }

   kinopoiskService = new KinopoiskService();

   onCharLoaded = (char) => {
      this.setState({
         char,
         loading: false
      })
   }

   onError = () => {
      this.setState({
         loading: false,
         error: true
      })
   }

   updateChar = () => {
      const id = 301
      this.kinopoiskService
         .getCharacter(id)
         .then(this.onCharLoaded)
         .catch(this.onError)
   }

   render() {
      const { char, loading, error } = this.state;
      const errorMessage = error ? <ErrorMessage /> : null;
      const spinner = loading ? <MyLoader /> : null;
      const content = !(loading || error) ? <View char={char} /> : null;

      return (
         <a className="promo__card">
            {errorMessage}
            {spinner}
            {content}
         </a>
      )
   }
}

const View = ({ char }) => {
   const { imageUrl, rating, year, country, time, title, genre } = char;

   return (
      <>
         <div className="promo__card-img">
            <img src={imageUrl} alt="promo" />
         </div>
         <div className="promo__content">
            <p className="promo__content-rating">{rating}<img src={PromoIcon} alt="sort" />
               <span className="name-rating">кинопоиск</span>
            </p>
            <p className="promo__content-year">{year}</p>
            <p className="promo__content-country">{country}</p>
            <p className="promo__content-time">{time} минут</p>
         </div>
         <h4 className="promo__wrapper-title">{title}</h4>
         <p className="promo__wrapper-subtitle">{genre}</p>
      </>
   )
}

export default PromoCard;