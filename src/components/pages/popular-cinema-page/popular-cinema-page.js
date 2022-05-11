import React from 'react'

const PopularPinemaPage = () => {
   return (
      <section className="promo">
         <div className="promo__container container">
            <h3 to='/popular_cinema' className="promo__title title">Популярное</h3>
            <div className="promo__slider">
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
            </div>
         </div>
      </section >
   )
}

export default PopularPinemaPage