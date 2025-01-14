import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/Index';
import Catalog from './pages/Catalog/Index';
import Cemper from "./pages/Cemper/Index";
import NotFound from "./pages/NotFound/Index";
import Header from "./components/Reused/Header/Index";


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:cemperId" element={<Cemper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
