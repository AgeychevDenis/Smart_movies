import React from 'react';
import Promo from '../promo/promo';
import Content from '../content/content';
import ErrorBoundary from '../error-boundary/error-bondary';

const MainPage = () => {
   return (
      <>
         <ErrorBoundary>
            <Promo />
            <Content />
         </ErrorBoundary>
      </>
   )
}

export default MainPage;