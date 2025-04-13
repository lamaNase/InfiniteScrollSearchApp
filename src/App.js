import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainHeader from "./components/widgets/mainHeader/mainHeader";
import HeaderButtons from './components/UI/headerButtons/headerButtons';

// Lazy load pages
const HomePage = lazy(() => import('./pages/homePage/homePage'));
const SearchResultsPage = lazy(() => import('./pages/searchResults/searchResultsPage'));
const NotFound = lazy(() => import('./pages/notFound/notFound'));

function App() {
  return (
    <Suspense fallback = {< div > Loading...</div>}>
      < MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchResults" element={<SearchResultsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense >
  );
}

export default App;