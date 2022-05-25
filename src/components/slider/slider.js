import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import './slider.scss';
import 'swiper/swiper-bundle.css';

const Slider = () => {
   const gallery = [
      { id: 1234853, title: 'Мистер Нокаут', discription: 'Упрямый тренер и любимая девушка помогают юноше стать чемпионом. Драма о советском боксере Валерии Попенченко', coverUrl: 'https://avatars.mds.yandex.net/get-ott/2419418/2a0000017fbb370187bdd97e7b9c214801d3/orig', logoUrl: "https://avatars.mds.yandex.net/get-ott/239697/2a0000017fbb371d8375424be3a56b7022fb/orig" },
      { id: 1100777, title: 'Триггер', discription: 'Страшная трагедия вынуждает психолога-провокатора вернуться к практике. Напряженная драма с Максимом Матвеевым', coverUrl: 'https://avatars.mds.yandex.net/get-ott/374297/2a0000017e08446283517541047b63d35a54/orig', logoUrl: "https://avatars.mds.yandex.net/get-ott/236744/2a00000180bf38e7506037453dd1e1c11cc2/orig" },
      { id: 4642708, title: 'Нулевой пациент', discription: 'Врач в Элисте сталкивается с первой вспышкой ВИЧ в СССР. Сериал про людей перед лицом неизвестности', coverUrl: 'https://avatars.mds.yandex.net/get-ott/1531675/2a00000180bd38dbb078d0ef9cd5bf42b28b/orig', logoUrl: "https://avatars.mds.yandex.net/get-ott/1652588/2a00000180bd38ef2b4671712f895bd624a3/orig" }
   ]

   SwiperCore.use([Navigation, Autoplay]);

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
                  loop={true}
                  autoplay={{
                     delay: 4000,
                     disableOnInteraction: true
                  }}
                  speed={500}
               >
                  <div className="slider__wrapper">
                     {gallery.map(slide => (
                        <SwiperSlide>
                           <Link className='slider__slide' key={slide.id} to={`/movie/${slide.id}`} >
                              <img className='slider__slide-img' src={slide.coverUrl} alt={slide.title} />
                              <div className="slider__slide-body">
                                 <img className="slider__slide-title" src={slide.logoUrl} alt={slide.title} />
                                 <p>{slide.discription}</p>
                              </div>
                           </Link>
                        </SwiperSlide>
                     ))}
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