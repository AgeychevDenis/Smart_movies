import React from 'react';
import img from '../../../assets/img/single-movie/img-silngle.jpg'
import './single-movie-page.scss';


const SingleMoviePage = () => {
   return (
      <section className='single-movie container'>
         <div className="single-movie__wrapper">
            <div className="single-movie__img">
               <img src={img} alt="single-movie" />
            </div>
            <div className="single-movie__info">
               <div className="single-movie__title">
                  <h2 className='single-movie__name'>Всё везде и сразу (2022)</h2>
                  <p className="single-movie__descr">TEverything Everywhere All at Once</p>
                  <div className="single-movie__rating">
                     <p className="single-movie__rating-kinopoisk">8.2 <span>КиноПоиск</span></p>
                     <p className="single-movie__rating-imdb">8.4 <span>IMDb</span></p>
                  </div>
               </div>
               <div className="single-movie__about-film">
                  <h3 className='single-movie__about-title'>О фильме</h3>
                  <div className="single-movie__item">
                     <p>Год производства</p>
                     <p>2022</p>
                  </div>
                  <div className="single-movie__item">
                     <p>Страна</p>
                     <p>США</p>
                  </div>
                  <div className="single-movie__item">
                     <p>Жанр</p>
                     <p>фантастика, фэнтези, боевик, комедия, приключения</p>
                  </div>
                  <div className="single-movie__item">
                     <p>Слоган</p>
                     <p>---</p>
                  </div>
                  <div className="single-movie__item">
                     <p>Возраст</p>
                     <p>18+</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="single-movie__plot">
            <h3 className='single-movie__plot-title'>Сюжет</h3>
            <p className='single-movie__plot-text'>
               Эвелин получает доступ к воспоминаниям, эмоциям и невероятным способностям других версий себя. Теперь она может прожить тысячи жизней и быть кем угодно — известной актрисой, мастером боевых искусств, оперной дивой и даже небесным божеством. Но всем мультивселенным угрожает таинственная сущность, с которой Эвелин предстоит сразиться. Как знать, возможно, заодно она разберётся и с самым страшным злом — своими налогами.
            </p>
         </div>
      </section>
   )
}

export default SingleMoviePage;