import { Link } from "react-router-dom"
import './404.scss';

const Page404 = () => {
   return (
      <div className="error-page" style={{ 'textAlign': 'center' }}>
         <h1>404</h1>
         <span>Страница не найдена</span>
         <p>Мы сожалеем, но страница на которую Вы пытались перейти не существует. Пожалуйста вернитесь на предыдущую страницу или воспользуйтесь меню сайта</p>
         <Link to="/" className="error-page__btn-error">Главная страница</Link>
      </div>
   )
}

export default Page404;