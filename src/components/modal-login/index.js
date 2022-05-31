import { Formik, Field, Form, ErrorMessage } from 'formik';
import { CSSTransition } from 'react-transition-group';
import * as Yup from 'yup';

import '../modal-search/modal-search.scss';
import '../modal-login/modal-login.scss';

const ModalLogin = ({ open, onClose }) => {

   const duration = 300;

   const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

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
                  .required('Обязательное поле!')
                  .matches(phoneRegExp, 'Введите номер в международном формате, вот так: +79XXXXXXXXX'),
               password: Yup.string()
                  .min(6, 'Не менее 6 символов')
                  .required('Обязательное поле!'),
               terms: Yup.boolean()
                  .required('Необходимо согласие')
                  .oneOf([true], "Необходимо согласие")
            })}
            onSubmit={(values, { setSubmitting }) => {
               setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
               }, 400);
            }}
         >

            <div className="popup" >
               <div className="popup__container popup-login__container">
                  <div className="popup__body">
                     <h1 className="popup__title">Вход | Регистрация</h1>
                     <p></p>
                     <Form className="form">
                        <label htmlFor="telephone">Телефон</label>
                        <Field
                           id="telephone"
                           name="telephone"
                           type="tel"
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
                        <label className='form__lable-checkbox'>
                           <Field
                              name="terms"
                              type="checkbox"
                              className="form__checkbox"
                           />
                           <div className='form__checkbox-mark'></div>
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