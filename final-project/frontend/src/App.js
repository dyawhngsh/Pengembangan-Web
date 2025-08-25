import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import DaftarBarang from './components/daftarBarang.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<DaftarBarang/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
