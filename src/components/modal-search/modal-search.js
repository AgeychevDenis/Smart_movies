import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage, Field } from 'formik';


import useKinopoiskService from '../../services/use-kinopoisk-server';
import './modal-search.scss';

const ModalSearch = ({ open, onClose }) => {
   const [movie, setMovie] = useState(null);
   const { loading, error, getMovieByName, clearError } = useKinopoiskService()

   const onMovieLoaded = (movie) => {
      setMovie(movie)
   }

   const updateMovie = (name) => {
      clearError();

      getMovieByName(name)
         .then(onMovieLoaded);
   }

   const duration = 300;

   function renderMovie(arr) {
      const items = arr.slice(0, 8).map((item, i) => {

         return (
            <div key={i} className='modal-search__inner'>
               <i className="icon-video"></i>
               <Link onClick={onClose} to={`/movie/${item.id}`} className='modal-search__success'> <span>{item.title}</span> <span>{`(${item.year})`}</span></Link>
            </div>
         )
      })
      return (
         items
      )
   }

   const errorMessage = error ? <div className='modal-search__critical-error'><ErrorMessage /></div> : null;
   const results = !movie ? null : movie.length > 0 ?
      <div className='modal-search__wrapper'>
         {renderMovie(movie)}
      </div>
      :
      <div className='modal-search__error'>Фильм не был найден. Проверьте название и повторите попытку</div>

   return (
      <CSSTransition
         in={open}
         timeout={duration}
         classNames="popup"
         mountOnEnter
         unmountOnExit
      >
         <Formik
            initialValues={{
               movieName: ''
            }}
            validationSchema={Yup.object({
               movieName: Yup.string().required('Обязательное поле!')
            })}
            onSubmit={({ movieName }) => {
               updateMovie(movieName);
            }}
         >
            <div className="popup" >
               <div className="popup__container">
                  <div className="popup__body">
                     <h1 className="popup__title">Поиск</h1>
                     <Form>
                        <Field
                           id="movieName"
                           name="movieName"
                           type="text"
                           placeholder="Фильмы"
                           className="popup__input" />
                        <button
                           type='submit'
                           className="popup__btn button__search"
                           disabled={loading}>
                           <div className="inner">Найти</div>
                        </button>
                     </Form>
                     <button onClick={onClose} className="close">&times;</button>
                  </div>
                  {results}
                  {errorMessage}
               </div>
            </div >
         </Formik>
      </CSSTransition>

   )
}

export default ModalSearch;