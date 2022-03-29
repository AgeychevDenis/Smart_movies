import './promo-card.scss';
import PromoIcon from '../../../assets/img/icon/sort.svg';

const PromoCard = ({ imageUrl, rating, year, country, time, title, subtitle }) => {
   return (
      <a href="#" className="promo__card">
         <div className="promo__card-img">
            <img src={imageUrl} alt="promo" />
         </div>
         <div className="promo__content">
            <p className="promo__content-rating">{rating}<img src={PromoIcon} alt="sort" />
               <span className="name-rating">кинопоиск</span>
            </p>
            <p className="promo__content-year">{year}</p>
            <p className="promo__content-country">{country}</p>
            <p className="promo__content-time">{time}</p>
         </div>
         <h4 className="promo__wrapper-title">{title}</h4>
         <p className="promo__wrapper-subtitle">{subtitle}</p>
      </a>
   )
}

export default PromoCard;