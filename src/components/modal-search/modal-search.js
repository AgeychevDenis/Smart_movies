import { CSSTransition } from 'react-transition-group';
import './modal-search.scss';

const ModalSearch = ({ open, onClose }) => {

   const duration = 300;

   return (
      <CSSTransition
         in={open}
         timeout={duration}
         classNames="popup"
         mountOnEnter
         unmountOnExit
      >
         <div onClick={onClose} className="popup" >
            <div onClick={(e) => e.stopPropagation()} className="popup__container">
               <div className="popup__body">
                  <h1 className="popup__title">Поиск</h1>
                  <form>
                     <input type="text" placeholder="Фильмы, актеры, сериалы" className="popup__input" />
                  </form>
                  <button onClick={onClose} className="close">&times;</button>
               </div>
            </div>
         </div >
      </CSSTransition>
   )
}

export default ModalSearch;