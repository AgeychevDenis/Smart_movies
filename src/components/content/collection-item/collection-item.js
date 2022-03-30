import './collection-item.scss';

const CollectionItem = ({ imageUrl, title, subtitle }) => {
   return (
      <a className="collection__item" href="#">
         <img className="collection__item-img" src={imageUrl} alt={title} />
         <div className="collection__item-info">
            <h4 className="collection__item-title">{title}</h4>
            <div className="collection__item-subtitle">{subtitle}</div>
         </div>
      </a>
   )
}

export default CollectionItem;