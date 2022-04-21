import './modal.scss';

const Modal = (props) => {

   return (
      <div className="popup" >
         <div className="popup__container">
            <div className="popup__body">
               <h1 className="popup__title">Поиск</h1>
               <form>
                  <input autocomplete="off" type="text" placeholder="Фильмы, акткры, жанры" className="popup__input" />
               </form>
               <button onClick={props.onClose(false)} className="close">&times;</button>
            </div>
         </div>
      </div >
   )
}

export default Modal;