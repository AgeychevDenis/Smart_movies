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

   const subMenuLink = [
      { title: 'Популярное', link: '/popular_films' },
      { title: 'Подборки фильмов', link: '/single_collection' },
      { title: 'Смотрят сейчас', link: '/404page' },
      { title: 'Ожидаемое', link: '/await_films' },
      { title: 'Лучшее', link: '/best_films' }
   ]

   const classNames = 'menu__link menu__link-sub icon-square';

   return (
      <div className="header__menu menu" >
         <button onClick={onActive} type="button" className={`${active ? 'menu__icon icon-menu active' : 'menu__icon icon-menu'}`}><span></span></button>
         <ul className={`${active ? 'menu__body active' : 'menu__body'}`}>
            <nav className="menu__list">
               <li className="menu__item">
                  <button onClick={onClose} type="button" className={`${openMenu ? classNames + ' click' : classNames}`}>Что посмотреть</button>
                  <ul className={`${openMenu ? 'sub-menu__list open' : 'sub-menu__list'}`}>
                     <li className="sub-menu__item">
                        {subMenuLink.map((value, i) => (
                           <Link key={i} to={value.link} onClick={onActive} className="sub-menu__link">
                              {value.title}
                           </Link>

                        ))}
                     </li>
                  </ul>
               </li>
               <li className="menu__item">
                  <Link to="/404page" onClick={onActive} className="menu__link">Трейлеры</Link>
               </li>
               <li className="menu__item">
                  <button onClick={onCloseActors} type="button" className={`${openMenuActors ? classNames + ' click' : classNames}`}>Актеры</button>
                  <ul className={`${openMenuActors ? 'sub-menu__list open' : 'sub-menu__list'}`}>
                     <li className="sub-menu__item">
                        <Link to="/404page" onClick={onActive} className="sub-menu__link">Популярные актеры</Link>
                     </li>
                  </ul>
               </li>
               <li className="menu__item">
                  <Link to="/404page" onClick={onActive} className="menu__link">Сериалы</Link>
               </li>
            </nav>
         </ul>
      </div >
   )

}

export default HeaderMenu;