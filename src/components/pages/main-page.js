import React from 'react';
import { Helmet } from 'react-helmet'
import Promo from '../promo';
import Content from '../content';
import ErrorBoundary from '../error-boundary';
import Slider from '../slider';

const MainPage = () => {
   return (
      <>
         <Helmet>
            <meta name="description" content="Website with a selection of films" />
            <title>SMART</title>
         </Helmet>
         <ErrorBoundary>
            <Slider />
         </ErrorBoundary>
         <ErrorBoundary>
            <Promo />
         </ErrorBoundary>
         <ErrorBoundary>
            <Content />
         </ErrorBoundary>
      </>
   )
}

export default MainPage;