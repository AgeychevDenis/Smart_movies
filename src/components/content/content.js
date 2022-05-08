import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../error-message/error-message';
import Spinner from '../spinner/spinner';

import useKinopoiskService from '../../services/use-kinopoisk-server';

import './content.scss';

const Content = () => {
   const [collection, setCollectionList] = useState([]);

   const { loading, error, getCollection } = useKinopoiskService();

   useEffect(() => {

      getCollection()
         .then(onCollectionListLoaded)
      //eslint-disable-next-line
   }, [])

   const onCollectionListLoaded = (collection) => {
      setCollectionList(collection);
   }

   function renderItems(arr) {
      const items = arr.map((item) => {

         return (
            <Link to={`/single_collection/${item.id}`} className="collection__item" key={item.id}>
               <img className="collection__item-img" src={item.imageUrl} alt={item.title} />
               <div className="collection__item-info">
                  <h4 className="collection__item-title">{item.title}</h4>
                  <div className="collection__item-subtitle">{item.subtitle}</div>
               </div>
            </Link >
         )
      });

      return items
   }

   const items = renderItems(collection);

   const errorMessage = error ? <ErrorMessage /> : null;
   const spinner = loading ? <Spinner /> : null;
   const content = !(loading || error) ? items : null;

   return (
      <section className="content">
         <div className="content__container container">
            <div className="content__wrapper">
               <Link to="/" className="content__title title icon-square">
                  Подборки
               </Link>
               <div className="content__inner collection">
                  {errorMessage}
                  {spinner}
                  {content}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Content;