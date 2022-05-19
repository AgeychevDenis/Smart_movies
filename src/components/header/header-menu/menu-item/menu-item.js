import { Link } from "react-router-dom";


const MenuItem = (onClose, title) => {

   const data = [
      { subtitle: 'Популярное' },
      { subtitle: 'Подборки фильмов' },
      { subtitle: 'Смотрят сейчас' },
      { subtitle: 'Ожидаемое' },
      { subtitle: 'Лучшее' }
   ]

   const data2 = [
      { subtitle: 'Популярные актеры' }
   ]

   let menuLink = "menu__link menu__link-sub icon-square";
   let subMenu = "sub-menu__list";

   const items = data.map((item, i) => {
      return (
         <SubMenuItem data={item.subtitle} />
      )
   })

   return (
      <li className="menu__item">
         <button onClick={onClose} type="button" className={menuLink}>{title}</button>
         <ul className={subMenu}>
            {items}
         </ul>
      </li>
   )
}


const SubMenuItem = ({ subtitle }) => {
   return (
      <li className="sub-menu__item">
         <Link to="/" className="sub-menu__link">{subtitle}</Link>
      </li>
   )
}

export default MenuItem;