import { Formik, Field, Form, ErrorMessage } from 'formik';
import { CSSTransition } from 'react-transition-group';
import * as Yup from 'yup';

import '../modal-search/modal-search.scss';

const ModalLogin = ({ open, onClose }) => {

   const duration = 300;

   const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

   return (
      <CSSTransition
         in={open}
         timeout={duration}
         classNames="popup"
         mountOnEnter
         unmountOnExit
      >
         <Formik
            initialValues={{
               telephone: '',
               password: '',
               terms: false
            }}
            validationSchema={Yup.object({
               telephone: Yup.string()
                  .matches(phoneRegExp, 'Введите номер в международном формате, вот так: +79XXXXXXXXX')
                  .required('Обязательное поле!'),
               password: Yup.string()
                  .min(6, 'Не менее 6 символов'),
               terms: Yup.boolean()
                  .required('Необходимо согласие')
                  .oneOf([true], "Необходимо согласие")
            })}
         >

            <div onClick={onClose} className="popup" >
               <div onClick={(e) => e.stopPropagation()} className="popup__container">
                  <div className="popup__body">
                     <h1 className="popup__title">Вход | Регистрация</h1>
                     <p></p>
                     <Form className="form">
                        <label htmlFor="telephone">Телефон</label>
                        <Field
                           id="telephone"
                           name="telephone"
                           type="number"
                           autoComplete="off"
                        />
                        <ErrorMessage component="div" className="error" name="telephone" />
                        <label htmlFor="password">Пароль</label>
                        <Field
                           id="password"
                           name="password"
                           type="password"
                           autoComplete="off"
                        />
                        <ErrorMessage component="div" className="error" name="password" />
                        <label>
                           <Field
                              name="terms"
                              type="checkbox"
                           />
                           Я принимаю условия Политики приватности и Пользовательского соглашения
                        </label>
                        <ErrorMessage component="div" className="error" name="terms" />
                        <button type="submit">Отправить</button>
                     </Form>
                     <button onClick={onClose} className="close">&times;</button>
                  </div>
               </div>
            </div >
         </Formik>
      </CSSTransition >
   )
}

export default ModalLogin;