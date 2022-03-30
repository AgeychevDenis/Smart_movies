import HeaderLogo from './header-logo/header-logo'
import HeaderActions from './header-actions/header-actions';
import HeaderMenu from './header-menu/header-menu';
import './header.scss';


const Header = () => {
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