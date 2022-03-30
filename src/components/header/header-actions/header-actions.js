import './header-actions.scss';
import { Component } from 'react';

class HeaderActions extends Component {
   constructor(props) {
      super(props);
      this.state = {
         active: false
      }
   }

   onActive = () => {
      this.setState(({ active }) => ({
         active: !active
      }));
   }

   render() {
      const { active } = this.state;

      let classNames = "header__link";
      if (active) {
         classNames += ' active'
      }

      return (
         <div className="header__actions">
            <button onClick={this.onActive} className={classNames}>
               <i className="icon-search"></i>
            </button>
            <button className="header__link">
               <i className="icon-user"></i>
            </button>
         </div>
      )
   }

}

export default HeaderActions;