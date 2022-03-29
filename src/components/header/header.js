import HeaderLogo from './header-logo/header-logo'
import HeaderActions from './header-actions/header-actions';
import './header.scss';


const Header = () => {
   return (
      <header className="header">
         <div className="header__container">
            <HeaderLogo />
            <div className="header__menu menu">
               <button type="button" className="menu__icon icon-menu"><span></span></button>
               <nav className="menu__body">
                  <ul className="menu__list">
                     <li className="menu__item">
                        <a href="#" className="menu__link menu__link-sub icon-square">Что посмотреть</a>
                        <ul className="sub-menu__list">
                           <li className="sub-menu__item">
                              <a href="#" className="sub-menu__link">Популярное</a>
                           </li>
                           <li className="sub-menu__item">
                              <a href="#" className="sub-menu__link">Смотрят сейчас</a>
                           </li>
                           <li className="sub-menu__item">
                              <a href="#" className="sub-menu__link">Ожидаемое</a>
                           </li>
                           <li className="sub-menu__item">
                              <a href="#" className="sub-menu__link">Лучшее</a>
                           </li>
                        </ul>
                     </li>
                     <li className="menu__item">
                        <a href="#" className="menu__link">Трейлеры</a>
                     </li>
                     <li className="menu__item">
                        <a href="#" className="menu__link menu__link-sub icon-square">Актеры</a>
                        <ul className="sub-menu__list">
                           <li className="sub-menu__item">
                              <a href="#" className="sub-menu__link">Популярные актеры</a>
                           </li>
                        </ul>
                     </li>
                     <li className="menu__item">
                        <a href="#" className="menu__link">Сериалы</a>
                     </li>
                  </ul>
               </nav>
            </div>
            <HeaderActions />
         </div>
      </header>
   )
}

export default Header;