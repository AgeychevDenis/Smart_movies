import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import setContent from '../../utils/setContent';
import Skeleton from './skeleton';

import useKinopoiskService from '../../services/use-kinopoisk-server';

import './slider.scss';
import 'swiper/swiper-bundle.css';

const Slider = () => {
   const { getMovieSlider, setProcess, process } = useKinopoiskService();

   const [movieList, setMovieList] = useState([]);

   useEffect(() => {
      getMovieSlider()
         .then(onMovieListLoaded)
         .then(() => setProcess('confirmed'))
      //eslint-disable-next-line
   }, [])

   const onMovieListLoaded = (movieList) => {
      setMovieList(movieList);
   }

   SwiperCore.use([Navigation, Autoplay]);

   function renderSlide(arr) {

      const slide = arr.map(slide => {
         return (
            <SwiperSlide key={slide.id}>
               <Link className='slider__slide' to={`/movie/${slide.id}`} >
                  <img className='slider__slide-img' src={slide.coverUrl} alt={slide.title} />
                  <div className="slider__slide-body">
                     <img className="slider__slide-title" src={slide.logoUrl} alt={slide.title} />
                     <p>{slide.discription}</p>
                  </div>
               </Link>
            </SwiperSlide>
         )
      })

      return (
         <React.Fragment>
            <Swiper
               modules={[Navigation]}
               navigation={{
                  prevEl: '.slider__buttons-prev',
                  nextEl: '.slider__buttons-next'
               }}
               loop={true}
               autoplay={{
                  delay: 5000,
                  disableOnInteraction: true
               }}
               speed={500}
               spaceBetween={10}
            >
               <div className="slider__wrapper">
                  {slide}
               </div>
            </Swiper>
            <button className="slider__buttons-prev swiper-button-prev"></button>
            <button className="slider__buttons-next swiper-button-next"></button>
         </React.Fragment>
      )
   }

   return (
      <section className="slider">
         <div className="slider__container container">
            {setContent(process, () => renderSlide(movieList), null, Skeleton)}
         </div>
      </section >
   )
}

export default Slider;