import ErrorMessage from "../../error-message/error-message"
import { Link } from "react-router-dom"
import './404.scss';

const Page404 = () => {
   return (
      <div className="error container" style={{ 'textAlign': 'center' }}>
         <ErrorMessage />
         <p>Страница, на которую вы пытаетесь попасть не существует или была удалена.</p>
         <Link to="/" className="btn-error">Главная страница</Link>
      </div>
   )
}

export default Page404;