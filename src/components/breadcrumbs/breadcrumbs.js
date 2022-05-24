import { Link } from 'react-router-dom';
import './breadcrumbs.scss';

const Breadcrumbs = ({ props }) => {

   return (
      <ul className='breadcrumbs__list'>
         {props?.map((item, i) => (
            <li key={i} className='breadcrumbs__list-item'>
               <Link to={item.link}>{item.title}</Link>
            </li>
         ))}
      </ul>
   )
}

export default Breadcrumbs;