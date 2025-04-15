import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from "./routeConstants";

const HomePage = lazy(() => import('../pages/homePage/homePage'));
const SearchResultsPage = lazy(() => import('../pages/searchResults/searchResultsPage'));
const NotFound = lazy(() => import('../pages/notFound/notFound'));

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.SEARCH_RESULTS} element={<SearchResultsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;