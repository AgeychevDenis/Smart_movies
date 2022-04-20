import './header-logo.scss'
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
   return (
      <a className="header__logo">
         <h1>SMART</h1>
         <p>умная подборка</p>
      </a>
   )
}

export default HeaderLogo;
