import { lazy } from "react";

const SinglePage = lazy(() => import('./single-page/single-page'));


const PopularPage = () => {
   return (
      <SinglePage typeMovie='TOP_100_POPULAR_FILMS' titlePage='Популярное' />
   )
}

const BestPage = () => {
   return (
      <SinglePage typeMovie='TOP_250_BEST_FILMS' titlePage='Лучшее' />
   )
}

const AwaitPage = () => {
   return (
      <SinglePage typeMovie='TOP_AWAIT_FILMS' titlePage='Ожидаемое' />
   )
}



export { PopularPage, BestPage, AwaitPage };