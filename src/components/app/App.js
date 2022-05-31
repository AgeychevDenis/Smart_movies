import { useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import Spinner from '../spinner'
import ModalSearch from '../modal-search'
import ModalLogin from '../modal-login';

import {
   Page404,
   AllCollectionPage,
   SingleCollectionPage,
   SingleMoviePage,
   PopularPage,
   BestPage,
   AwaitPage,
   MainPage
} from '../pages';

import './App.scss';
import './fonts.scss';

function App() {
   const [modalSearch, setModalSearch] = useState(false)
   const [modalLogin, setModalLogin] = useState(false)

   return (
      <Router>
         <div className="page">
            <Header setModalLogin={setModalLogin} setModalSearch={setModalSearch} />
            <ModalSearch open={modalSearch} onClose={() => setModalSearch(false)} />
            <ModalLogin open={modalLogin} onClose={() => setModalLogin(false)} />
            <main>
               <Suspense fallback={<Spinner />}>
                  <Routes>
                     <Route path="/" element={<MainPage />} />
                     <Route path="/movie/:movieId" element={<SingleMoviePage />} />
                     <Route path="/single_collection/:compilationId" element={<SingleCollectionPage />} />
                     <Route path="/single_collection" element={<AllCollectionPage />} />
                     <Route path="/popular_films" element={<PopularPage />} />
                     <Route path="/best_films" element={<BestPage />} />
                     <Route path="/await_films" element={<AwaitPage />} />
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
