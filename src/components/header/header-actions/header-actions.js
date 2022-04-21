import { useState } from 'react';


const HeaderActions = (props) => {

   return (
      <>
         <div className="header__actions">
            <button onClick={() => props(true)} className="header__link">
               <i className="icon-search"></i>
            </button>
            <button className="header__link">
               <i className="icon-user"></i>
            </button>
         </div>
      </>
   )
}


export default HeaderActions;