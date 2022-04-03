import './footer.scss';

const Footer = () => {
   return (
      < footer className="footer" >
         <div className="footer__container container">
            <div className="footer__top">
               <div className="footer__top-social social">
                  <ul className="social-list">
                     <li className="social-list__item">
                        <a className="social-list__link icon-vk"></a>
                     </li>
                     <li className="social-list__item">
                        <a className="social-list__link icon-facebook"></a>
                     </li>
                     <li className="social-list__item">
                        <a className="social-list__link icon-twitter"></a>
                     </li>
                     <li className="social-list__item">
                        <a className="social-list__link icon-instagram"></a>
                     </li>
                     <li className="social-list__item">
                        <a className="social-list__link icon-youtube"></a>
                     </li>
                  </ul>
               </div>
               <div className="footer__top-list">
                  <ul className="footer-list">
                     <li className="footer-list__item">
                        <a className="footer-list__link">Подборки</a>
                     </li>
                     <li className="footer-list__item">
                        <a className="footer-list__link">Трейлеры</a>
                     </li>
                     <li className="footer-list__item">
                        <a className="footer-list__link">Сериалы</a>
                     </li>
                     <li className="footer-list__item">
                        <a className="footer-list__link">Актеры</a>
                     </li>
                     <li className="footer-list__item">
                        <a className="footer-list__link">Контакты</a>
                     </li>
                     <li className="footer-list__item">
                        <a className="footer-list__link">О нас</a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="footer__bottom">
               <p>© 2022, <a href="index.html">SMART</a> 18+</p>
            </div>
         </div>
      </footer >
   )
}

export default Footer;