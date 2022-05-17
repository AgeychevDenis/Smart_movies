import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import setContent from '../../../utils/setContent';

import useKinopoiskService from '../../../services/use-kinopoisk-server';

import '../../content/content.scss';

const AllCollectionPage = () => {
   const [collection, setCollectionList] = useState([]);

   const { getCollection, setProcess, process } = useKinopoiskService();

   useEffect(() => {

      getCollection()
         .then(onCollectionListLoaded)
         .then(() => setProcess('confirmed'))
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

   return (
      <section className="content">
         <div className="content__container container">
            <div className="content__wrapper">
               <h3 className="content__title title">
                  Все подборки фильмов
               </h3>
               <div className="content__inner collection">
                  {setContent(process, () => renderItems(collection))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default AllCollectionPage;