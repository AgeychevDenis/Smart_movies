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
         data2: [
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
      const { active, data, data2 } = this.state;

      let menuIcon = "menu__icon icon-menu";
      let menuBody = "menu__body";


      if (active) {
         menuIcon += ' active';
         menuBody += ' active';
      }

      return (
         <div className="header__menu menu" >
            <button onClick={this.onActive} type="button" className={menuIcon}><span></span></button>
            <nav className={menuBody}>
               <ul className="menu__list">
                  <MenuItem title={'Что посмотреть'} data={data} />
                  <li className="menu__item">
                     <a className="menu__link">Трейлеры</a>
                  </li>
                  <MenuItem title={'Актеры'} data={data2} />
                  <li className="menu__item">
                     <a className="menu__link">Сериалы</a>
                  </li>
               </ul>
            </nav>
         </div >
      )
   }
}

export default HeaderMenu;