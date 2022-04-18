import Header from '../header/header';
import Promo from '../promo/promo';
import Content from '../content/content'
import Footer from '../footer/footer';

import './app.scss';
import './fonts.scss';


function App() {

   return (
      <div className="page">
         <Header />
         <Promo />
         <Content />
         <Footer />
      </div>
   );
}

export default App;
