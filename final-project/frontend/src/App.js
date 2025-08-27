import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DaftarBarang from "./components/daftarBarang";
import TambahBarang from "./components/tambahBarang";
import EditBarang from "./components/editBarang";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DaftarBarang />} />
        <Route path="/tambah" element={<TambahBarang />} />
        <Route path="/edit/:id" element={<EditBarang />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
