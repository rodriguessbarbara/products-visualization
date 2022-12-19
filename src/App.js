import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contato from './components/Contato';
import Pagina404 from './components/Pagina404';
import Header from './components/Head/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='contato' element={<Contato/>}/>
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
