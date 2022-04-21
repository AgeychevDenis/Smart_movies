import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CollectionItem from './collection-item/collection-item';
import useKinopoiskService from '../../services/use-kinopoisk-server';

import './content.scss';

const Content = () => {
   const [collection, setCollectionList] = useState([]);

   const { getCollection } = useKinopoiskService();

   useEffect(() => {

      getCollection()
         .then(onCollectionListLoaded)
   }, [])

   const onCollectionListLoaded = (collection) => {
      setCollectionList(collection);
   }

   function renderItems(arr) {
      const items = arr.map((item) => {
         const { id, ...itemProps } = item

         return (
            <CollectionItem key={id} {...itemProps} />
         )
      });

      return items
   }

   const items = renderItems(collection);

   return (
      <section className="content">
         <div className="content__container container">
            <div className="content__wrapper">
               <Link to="/" className="content__title title icon-square">
                  Подборки
               </Link>
               <div className="content__inner collection">
                  {items}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Content;