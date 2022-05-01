import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/img/single-movie/img-silngle.jpg'

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
         <div className="compilation__wrapper">
            <ul className="compilation__list">
               <li className="compilation__item">
                  <span className="compilation__cell">
                     1
                  </span>
                  <Link to="/" className='compilation__img'>
                     <img src={img} className='compilation__img' alt="compilation__img" />
                  </Link>
               </li>
            </ul>
         </div>
      </section>

   )
}

export default singleCollectionPage;