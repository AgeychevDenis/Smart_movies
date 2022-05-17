import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header-menu.scss';

const HeaderMenu = () => {
   const [active, setActive] = useState(false);
   const [openMenu, setOpenMenu] = useState(false);
   const [openMenuActors, setOpenMenuActors] = useState(false);

   const onActive = () => {
      setActive(!active)
   }

   const onClose = () => {
      setOpenMenu(!openMenu)
   }

   const onCloseActors = () => {
      setOpenMenuActors(!openMenuActors)
   }

   return (
      <div className="header__menu menu" >
         <button onClick={onActive} type="button" className={`${active ? 'menu__icon icon-menu active' : 'menu__icon icon-menu'}`}><span></span></button>
         <ul className={`${active ? 'menu__body active' : 'menu__body'}`}>
            <nav className="menu__list">
               <li className="menu__item">
                  <button onClick={onClose} type="button" className={`${openMenu ? 'menu__link menu__link-sub icon-square click' : 'menu__link menu__link-sub icon-square'}`}>Что посмотреть</button>
                  <ul className={`${openMenu ? 'sub-menu__list open' : 'sub-menu__list'}`}>
                     <li className="sub-menu__item">
                        <Link to="/popular_cinema" onClick={onActive} className="sub-menu__link">Популярное</Link>
                        <Link to="/single_collection" onClick={onActive} className="sub-menu__link">Подборки фильмов</Link>
                        <Link to="/" className="sub-menu__link">Смотрят сейчас</Link>
                        <Link to="/" className="sub-menu__link">Ожидаемое</Link>
                        <Link to="/" className="sub-menu__link">Лучшее</Link>
                     </li>
                  </ul>
               </li>
               <li className="menu__item">
                  <Link to="/" className="menu__link">Трейлеры</Link>
               </li>
               <li className="menu__item">
                  <button onClick={onCloseActors} type="button" className={`${openMenuActors ? 'menu__link menu__link-sub icon-square click' : 'menu__link menu__link-sub icon-square'}`}>Актеры</button>
                  <ul className={`${openMenuActors ? 'sub-menu__list open' : 'sub-menu__list'}`}>
                     <li className="sub-menu__item">
                        <Link to="/" className="sub-menu__link">Популярные актеры</Link>
                     </li>
                  </ul>
               </li>
               <li className="menu__item">
                  <Link to="/" className="menu__link">Сериалы</Link>
               </li>
            </nav>
         </ul>
      </div >
   )

}

export default HeaderMenu;