import React from 'react';
import { Helmet } from 'react-helmet'
import Promo from '../promo/promo';
import Content from '../content/content';
import ErrorBoundary from '../error-boundary/error-bondary';
import Slider from '../slider/slider';

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