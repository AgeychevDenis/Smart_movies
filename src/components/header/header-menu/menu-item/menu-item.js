import { Component } from "react";


class MenuItem extends Component {
   constructor(props) {
      super(props);
      this.state = {
         show: false
      }
   }

   onShow = () => {
      this.setState(({ show }) => ({
         show: !show,
      }));
   }

   render() {
      const { show } = this.state;
      const { title, data } = this.props;

      let menuLink = "menu__link menu__link-sub icon-square";
      let subMenu = "sub-menu__list";

      if (show) {
         menuLink += ' click';
         subMenu += ' open'
      }

      const elem = data.map(item => {
         const { id, ...itemProps } = item
         return (
            <SubMenuItem key={id} {...itemProps} />
         )
      })

      return (
         <li className="menu__item">
            <button onClick={this.onShow} type="button" className={menuLink}>{title}</button>
            <ul className={subMenu}>
               {elem}
            </ul>
         </li>
      )
   }
}

const SubMenuItem = ({ subtitle }) => {
   return (
      <li className="sub-menu__item">
         <a href="#" className="sub-menu__link">{subtitle}</a>
      </li>
   )
}

export default MenuItem;