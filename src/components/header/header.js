import HeaderLogo from './header-logo/header-logo'
import HeaderActions from './header-actions/header-actions';
import HeaderMenu from './header-menu/header-menu';
import Device from '../../modules/device';
import './header.scss';


const Header = () => {
   Device();
   return (
      <header className="header">
         <div className="header__container">
            <HeaderLogo />
            <HeaderMenu />
            <HeaderActions />
         </div>
      </header>
   )
}

export default Header;