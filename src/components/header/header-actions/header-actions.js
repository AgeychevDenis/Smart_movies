import './header-actions.scss';

const HeaderActions = () => {
   let classNames = "header__actions";

   return (
      <div className={classNames}>
         <a data-search href="#" className="header__link">
            <i className="icon-search"></i>
         </a>
         <a href="#" className="header__link">
            <i className="icon-user"></i>
         </a>
      </div>
   )
}

export default HeaderActions;