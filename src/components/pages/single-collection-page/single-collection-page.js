import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useKinopoiskService from '../../../services/use-kinopoisk-server';
import ErrorMessage from '../../error-message/error-message';
import Spinner from '../../spinner/spinner';
import CompilationList from '../../compilation-list/compilation-list';

import './single-collection-page.scss'

const SingleCollectionPage = () => {
   const { compilationId } = useParams();

   const [compilation, setCompilationList] = useState([]);

   const { getCompilation, loading, error, clearError, getMovieID } = useKinopoiskService();


   useEffect(() => {
      updateCompilation()
      // getMovieID(1338480).then(res => console.log(JSON.stringify(res)))

   }, [compilationId])



   const updateCompilation = () => {
      clearError();
      getCompilation(compilationId)
         .then(onCompilationLoaded)
   }

   const onCompilationLoaded = (compilation) => {
      setCompilationList(compilation)
   }

   const errorMessage = error ? <ErrorMessage /> : null;
   const spinner = loading ? <Spinner /> : null;
   const content = !(loading || error) ? <View compilation={compilation} /> : null;

   return (
      <>
         {errorMessage}
         {spinner}
         {content}
      </>
   )
}

const View = ({ compilation }) => {

   const { title, subtitle, films } = compilation;
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
               <Link to="/">{title}</Link>
            </li>
         </ul>
         <h2 className="compilation__title">{title}</h2>
         <p className="compilation__subtitle">{subtitle}</p>
         <div className="line"></div>
         <CompilationList films={films} />
      </section>
   )
}

export default SingleCollectionPage;