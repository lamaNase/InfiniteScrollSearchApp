import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homePage/homePage";
import SearchResults from "./pages/searchResults/searchResults";
import NotFound from "./components/notFound/notFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/searchResults" element={<SearchResults />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;