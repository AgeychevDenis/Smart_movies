import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Page404 } from '../pages';
import Header from '../header/header';
import Footer from '../footer/footer';
import Spinner from '../spinner/spinner'
import ModalSearch from '../modal-search/modal-search'
import ModalLogin from '../modal-login/modal-login';

import './app.scss';
import './fonts.scss';

const MainPage = lazy(() => import('../pages/main-page'));
const SingleMoviePage = lazy(() => import('../pages/single-movie-page/single-movie-page'));


function App() {
   const [openModal, setOpenModal] = useState(false)
   const [openModalLogin, setOpenModalLogin] = useState(false)

   return (
      <Router>
         <div className="page">
            <Header setOpenModal={setOpenModal} setOpenModalLogin={setOpenModalLogin} />
            <ModalSearch open={openModal} onClose={() => setOpenModal(false)} />
            <ModalLogin open={openModalLogin} onClose={() => setOpenModalLogin(false)} />
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
