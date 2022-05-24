import Page404 from './404/404';
import { lazy } from "react";


const SingleMoviePage = lazy(() => import('./single-movie-page/single-movie-page'));
const SingleCollectionPage = lazy(() => import('./single-collection-page/single-collection-page'));
const AllCollectionPage = lazy(() => import('./all-collection-page/all-collection-page'));
const SinglePage = lazy(() => import('./single-page/single-page'));
const MainPage = lazy(() => import('./main-page'));

const PopularPage = () => <SinglePage typeMovie='TOP_100_POPULAR_FILMS' titlePage='Популярное' />
const BestPage = () => <SinglePage typeMovie='TOP_250_BEST_FILMS' titlePage='Лучшее' />
const AwaitPage = () => <SinglePage typeMovie='TOP_AWAIT_FILMS' titlePage='Ожидаемое' />

export {
   Page404,
   PopularPage,
   BestPage,
   AwaitPage,
   AllCollectionPage,
   SingleCollectionPage,
   SingleMoviePage,
   MainPage
}