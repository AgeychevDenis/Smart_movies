import './content.scss';
import CollectionItem from './collection-item/collection-item';

const Content = ({ dataCollection }) => {

   const elements = dataCollection.map(item => {
      return (
         <CollectionItem {...item} />
      )
   })

   return (
      <section className="content">
         <div className="content__container container">
            <div className="content__wrapper">
               <a href="#" className="content__title title icon-square">
                  Подборки
               </a>
               <div className="content__inner collection">
                  {elements}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Content;