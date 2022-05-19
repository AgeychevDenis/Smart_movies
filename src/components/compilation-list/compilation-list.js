import { Link } from 'react-router-dom';

const CompilationList = ({ films }) => {

   function renderItems(arr) {
      const items = arr?.map((item, i) => {

         return (
            <li className="compilation__item" key={item.id}>
               <div className="compilation__wrapper">
                  <span className="compilation__cell">
                     {i + 1}
                  </span>
                  <div className="compilation__inner">
                     <Link to={`/movie/${item.id}`} className="compilation__img">
                        <img src={item.imageUrl} alt={item.name} />
                     </Link>
                     <div className="compilation__description">
                        <h3 className="compilation__description-title">{item.name}</h3>
                        <div className="compilation__rating">
                           <p className="compilation__rating-kinopoisk">{item.ratingKinopoisk}<span>КиноПоиск</span></p>
                           <p className="compilation__rating-imdb">{item.ratingImdb}<span>IMDb</span></p>
                        </div>
                        <ul className="compilation__info-list">
                           <li className='compilation__info-item'> {item.countries ? item.countries.map((item, i) => (i ? ', ' : '') + item.country) : '—'}</li>
                           <li className='compilation__info-item'>{item.year}</li>
                           <li className='compilation__info-item'>{item.time ? String(item.time).replace(/^(\d{1})(\d{2})$/, '$1 ч. $2 мин.') : '—'}</li >
                           <li className='compilation__info-item'>{item.age ? '+' + item.age.slice(3, 5) : '—'}</li>
                        </ul>
                        {item.genres ? item.genres.map((item, i) => <p key={i} className="compilation__genres">{item.genre}</p>) : '—'}
                     </div>
                  </div>
               </div>
               <p className="compilation__about">
                  {item.description ? `${item.description.slice(0, 300)}...` : 'Для этого фильма нет описания'}
               </p>
            </li>
         )
      })
      return (
         <ul className="compilation__list">
            {items}
         </ul>
      )
   }

   const items = renderItems(films);

   return items
}

export default CompilationList;