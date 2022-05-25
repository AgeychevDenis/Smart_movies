import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import useKinopoiskService from '../../services/use-kinopoisk-server';

import img from '../../assets/img/slider/slide_3.jpg';

import './slider.scss';
import 'swiper/swiper-bundle.css';

const Slider = () => {
   const [movieList, setMovieList] = useState([]);

   const { getMovieSlide } = useKinopoiskService();

   const gallery = [
      { id: 1234853, title: 'Мистер Нокаут' }
   ]

   useEffect(() => {

      getMovieSlide(1234853)
         .then(onMovieListLoaded)
      //eslint-disable-next-line
   }, [])

   const onMovieListLoaded = (movieList) => {
      setMovieList(movieList);
   }

   console.log(movieList);

   SwiperCore.use(Navigation);

   return (
      <section className="slider">
         <div className="slider__container container">
            <React.Fragment>
               <Swiper
                  modules={[Navigation]}
                  navigation={{
                     prevEl: '.slider__buttons-prev',
                     nextEl: '.slider__buttons-next'
                  }}
               >
                  <div className="slider__wrapper">
                     <SwiperSlide>
                        <Link className='slider__slide' to='/movie/1234853' >
                           <img src={movieList.coverUrl} alt="Мистер Нокаут" />
                           <div className="slider__slide-body">
                              <h3>Мистер Нокаут</h3>
                              <p>Упрямый тренер и любимая девушка помогают юноше стать чемпионом. Драма о советском боксере Валерии Попенченко</p>
                           </div>
                        </Link>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Link className='slider__slide' to='/'>
                           <img src={img} alt="" />
                           <div className="slider__slide-body">
                              <h3>Мистер Нокаут</h3>
                              <p>Упрямый тренер и любимая девушка помогают юноше стать чемпионом. Драма о советском боксере Валерии Попенченко</p>
                           </div>
                        </Link>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Link className='slider__slide' to='/'>
                           <img src={img} alt="" />
                        </Link>
                     </SwiperSlide>
                  </div>
               </Swiper>
               <button className="slider__buttons-prev swiper-button-prev"></button>
               <button className="slider__buttons-next swiper-button-next"></button>
            </React.Fragment>
         </div>
      </section >
   )
}

export default Slider;