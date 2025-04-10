import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homePage/homePage";
import SearchResultsPage from "./pages/searchResults/searchResultsPage";
import NotFound from "./pages/notFound/notFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/searchResults" element={<SearchResultsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;