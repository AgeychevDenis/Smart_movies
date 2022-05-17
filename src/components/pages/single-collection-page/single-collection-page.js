import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import setContent from '../../../utils/setContent';

import useKinopoiskService from '../../../services/use-kinopoisk-server';
import CompilationList from '../../compilation-list/compilation-list';

import './single-collection-page.scss'

const SingleCollectionPage = () => {
   const { compilationId } = useParams();

   const [compilation, setCompilationList] = useState([]);

   const { getCompilation, clearError, setProcess, process } = useKinopoiskService();

   // , getMovieID

   useEffect(() => {
      updateCompilation()
      // getMovieID(1338480).then(res => console.log(JSON.stringify(res)))

      //eslint-disable-next-line
   }, [compilationId])


   const updateCompilation = () => {
      clearError();
      getCompilation(compilationId)
         .then(onCompilationLoaded)
         .then(() => setProcess('confirmed'))
   }

   const onCompilationLoaded = (compilation) => {
      setCompilationList(compilation)
   }

   return (
      <>
         {setContent(process, View, compilation)}
      </>
   )
}

const View = ({ data }) => {

   const { title, subtitle, films } = data;
   return (
      <section className='compilation container'>
         <Helmet>
            <meta name="description" content={`${title}`} />
            <title>{`${title}`}</title>
         </Helmet>
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