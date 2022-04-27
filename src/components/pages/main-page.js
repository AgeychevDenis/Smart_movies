import React from 'react';
import Promo from '../promo/promo';
import Content from '../content/content';
import ErrorBoundary from '../error-boundary/error-bondary';

const MainPage = () => {
   return (
      <>
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