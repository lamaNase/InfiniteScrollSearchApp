import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homePage/homePage";
import SearchResults from "./pages/searchResults/searchResults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/searchResults" element={<SearchResults/>}/>
    </Routes>
  );
}

export default App;
