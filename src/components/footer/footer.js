import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => {
   return (
      < footer className="footer" >
         <div className="footer__container container">
            <div className="footer__top">
               <div className="footer__top-social social">
                  <ul className="social-list">
                     <li className="social-list__item">
                        <Link to="/" className="social-list__link icon-vk"></Link>
                     </li>
                     <li className="social-list__item">
                        <Link to="/" className="social-list__link icon-facebook"></Link>
                     </li>
                     <li className="social-list__item">
                        <Link to="/" className="social-list__link icon-twitter"></Link>
                     </li>
                     <li className="social-list__item">
                        <Link to="/" className="social-list__link icon-instagram"></Link>
                     </li>
                     <li className="social-list__item">
                        <Link to="/" className="social-list__link icon-youtube"></Link>
                     </li>
                  </ul>
               </div>
               <div className="footer__top-list">
                  <ul className="footer-list">
                     <li className="footer-list__item">
                        <Link to="/" className="footer-list__link">Подборки</Link>
                     </li>
                     <li className="footer-list__item">
                        <Link to="/" className="footer-list__link">Трейлеры</Link>
                     </li>
                     <li className="footer-list__item">
                        <Link to="/" className="footer-list__link">Сериалы</Link>
                     </li>
                     <li className="footer-list__item">
                        <Link to="/" className="footer-list__link">Актеры</Link>
                     </li>
                     <li className="footer-list__item">
                        <Link to="/" className="footer-list__link">Контакты</Link>
                     </li>
                     <li className="footer-list__item">
                        <Link to="/" className="footer-list__link">О нас</Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="footer__bottom">
               <p>© 2022, <Link to="/" >SMART</Link> 18+</p>
            </div>
         </div>
      </footer >
   )
}

export default Footer;