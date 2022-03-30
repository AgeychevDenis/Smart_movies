import { Component } from 'react';
import MenuItem from './menu-item/menu-item';
import './header-menu.scss';

class HeaderMenu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         active: false,
         data: [
            { id: 1, subtitle: 'Популярное' },
            { id: 2, subtitle: 'Смотрят сейчас' },
            { id: 3, subtitle: 'Ожидаемое' },
            { id: 4, subtitle: 'Лучшее' }
         ],
         dataA: [
            { id: 1, subtitle: 'Популярные актеры' }
         ]
      }
   }

   onActive = () => {
      this.setState(({ active }) => ({
         active: !active
      }));
   }



   render() {
      const { active, data } = this.state;

      let menuIcon = "menu__icon icon-menu";
      let menuBody = "menu__body";


      if (active) {
         menuIcon += ' active';
         menuBody += ' active';
      }

      // const data = [
      //    { id: 1, title: 'Что посмотреть', subtitle: 'Популярное', subtitle: 'Смотрят сейчас', subtitle: 'Ожидаемое', subtitle: 'Лучшее' },
      //    { id: 2, title: 'Актеры', subtitle: 'Популярные актеры' }
      // ]

      return (
         <div className="header__menu menu" >
            <button onClick={this.onActive} type="button" className={menuIcon}><span></span></button>
            <nav className={menuBody}>
               <ul className="menu__list">
                  <MenuItem title={'Что посмотреть'} data={data} />
                  <li className="menu__item">
                     <a href="#" className="menu__link">Трейлеры</a>
                  </li>
                  <MenuItem title={'Актеры'} data={data} />
                  <li className="menu__item">
                     <a href="#" className="menu__link">Сериалы</a>
                  </li>
               </ul>
            </nav>
         </div >
      )
   }
}

export default HeaderMenu;