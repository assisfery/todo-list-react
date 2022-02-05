import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header.js';
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import Trash from './pages/Trash.js';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="trash" element={<Trash />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
