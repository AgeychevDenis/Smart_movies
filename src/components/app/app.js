import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Page404 } from '../pages';
import Header from '../header/header';
import Footer from '../footer/footer';
import Spinner from '../spinner/spinner'
import Modal from '../modal/modal';

import './app.scss';
import './fonts.scss';

const MainPage = lazy(() => import('../pages/main-page'));
const SingleMoviePage = lazy(() => import('../pages/single-movie-page/single-movie-page'));


function App() {
   const [showModal, setShowModal] = useState(false);

   return (
      <Router>
         <div className="page">
            <Header setShowModal={setShowModal} />
            {showModal ? <Modal onClose={setShowModal} /> : null}
            <main>
               <Suspense fallback={<Spinner />}>
                  <Routes>
                     <Route path="/" element={<MainPage />} />
                     <Route path="/:movieId" element={<SingleMoviePage />} />
                     <Route path="*" element={<Page404 />} />
                  </Routes>
               </Suspense>
            </main>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
