import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/img/single-movie/img-silngle.jpg'
import './single-collection-page.scss'

const singleCollectionPage = () => {
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
               <Link to="/">Лучшие фильмы гoда</Link>
            </li>
         </ul>
         <h2 className="compilation__title">Лучшие фильмы гoда</h2>
         <p className="compilation__subtitle">От народной комедии «Батя» до грандиозного фэнтези «Дюна»: собрали 21 лучший фильм, которые зрители Smart выбирали чаще других в уходящем году.</p>
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

export default singleCollectionPage;