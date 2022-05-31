import { Link } from 'react-router-dom';
import HeaderMenu from './header-menu';
import Device from '../../modules/device';
import './header.scss';


const Header = (props) => {
   Device();
   return (
      <header className="header">
         <div className="header__container">
            <Link to="/" className="header__logo">
               <h1>SMART</h1>
               <p>подборки фильмов</p>
            </Link>
            <HeaderMenu />
            <div className="header__actions">
               <button onClick={() => props.setModalSearch(true)} className="header__link">
                  <i className="icon-search"></i>
               </button>
               <button onClick={() => props.setModalLogin(true)} className="header__link">
                  <i className="icon-user"></i>
               </button>
            </div>
         </div>
      </header>
   )
}

export default Header;