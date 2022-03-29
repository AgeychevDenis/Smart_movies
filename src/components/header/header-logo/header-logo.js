import logo from '../../../assets/img/header/logo.svg'
import './header-logo.scss'

const HeaderLogo = () => {
   return (
      <a href={undefined} className="header__logo">
         <img src={logo} alt="Логотип" />
      </a>
   )
}

export default HeaderLogo;
