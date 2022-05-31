import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Spinner from '../../spinner';
import ErrorMessage from '../../error-message';
import Breadcrumbs from '../../breadcrumbs';
import Skeleton from './skeleton';

import useKinopoiskService from '../../../services/use-kinopoisk-server';

import '../../content/content.scss';

const setContent = (process, Component, newCollectionLoading) => {
   switch (process) {
      case 'waiting':
         return Array(9).fill(0).map((_, i) => <Skeleton key={i} />);
      case 'loading':
         return newCollectionLoading ? <Component /> : <Spinner />;
      case 'confirmed':
         return <Component />;
      case 'error':
         return <ErrorMessage />;
      default:
         throw new Error('Unexpected process state');
   }
}

const AllCollectionPage = () => {
   const [collection, setCollectionList] = useState([]);
   const [newCollectionLoading, setNewCollectionLoading] = useState(false);
   const [currentInitial, setCurrentInitial] = useState(0);
   const [currentPrev, setCurrentPrev] = useState(9);
   const [fetching, setFetching] = useState(true);

   const { getCollection, setProcess, process } = useKinopoiskService();

   useEffect(() => {
      if (fetching && currentInitial < 20) {
         !fetching ? setNewCollectionLoading(false) : setNewCollectionLoading(true);
         getCollection(currentInitial, currentPrev)
            .then(
               onCollectionListLoaded,
               setCurrentInitial(prevState => prevState + 9),
               setCurrentPrev(prevState => prevState + 9)
            )
            .then(() => setProcess('confirmed'))
            .finally(() => setFetching(false));
      }
      //eslint-disable-next-line
   }, [fetching]);

   useEffect(() => {
      document.addEventListener('scroll', scrollHandler)
      return function () {
         document.removeEventListener('scroll', scrollHandler)
      }
   }, [])

   const onCollectionListLoaded = (newCollection) => {
      setCollectionList([...collection, ...newCollection])
      setNewCollectionLoading(false);
   }

   const scrollHandler = (e) => {
      if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 300) {
         setFetching(true)
      }
   }

   const breadcrumbs = [
      { link: '/', title: 'Главная' },
      { link: '/', title: 'Все подборки фильмов' }
   ]

   function renderItems(arr) {
      const items = arr.map((item) => {
         return (
            <Link to={`/single_collection/${item.id}`} className='collection__item' key={item.id}>
               <div className="collection__item-img">
                  <img src={item.imageUrl} alt={item.title} />
               </div>
               <div className="collection__item-info">
                  <h4 className="collection__item-title">{item.title}</h4>
                  <div className="collection__item-subtitle">{item.subtitle}</div>
               </div>
            </Link >

         )
      });
      return items
   }

   return (
      <section className="content">
         <Helmet>
            <meta name="description" content='Все подборки фильмов' />
            <title>Все подборки фильмов</title>
         </Helmet>
         <div className="content__container container">
            <Breadcrumbs props={breadcrumbs} />
            <div className="content__wrapper">
               <h3 className="content__title title">
                  Все подборки фильмов
               </h3>
               <div className="content__inner collection">
                  {setContent(process, () => renderItems(collection), newCollectionLoading)}
               </div>
            </div>
         </div>
      </section>
   )
}

export default AllCollectionPage;