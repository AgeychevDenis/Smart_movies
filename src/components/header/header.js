import { Link } from 'react-router-dom';
import HeaderActions from './header-actions/header-actions';
import HeaderMenu from './header-menu/header-menu';
import Device from '../../modules/device';
import './header.scss';


const Header = (props) => {
   Device();
   return (
      <header className="header">
         <div className="header__container">
            <Link to="/" className="header__logo">
               <h1>SMART</h1>
               <p>умная подборка</p>
            </Link>
            <HeaderMenu />
            <HeaderActions setShowModal={props} />
         </div>
      </header>
   )
}

export default Header;