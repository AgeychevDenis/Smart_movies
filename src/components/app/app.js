import { lazy, Suspense } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import Spinner from '../spinner/spinner'

import './app.scss';
import './fonts.scss';

const MainPage = lazy(() => import('../pages/main-page'));


function App() {

   return (
      <div className="page">
         <Header />
         <main>
            <Suspense fallback={<Spinner />}>
               <MainPage />
            </Suspense>
         </main>
         <Footer />
      </div>
   );
}

export default App;
