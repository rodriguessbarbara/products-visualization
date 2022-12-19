import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Produtos from './components/Produtos';
import Contato from './components/Contato';
import Pagina404 from './components/Pagina404';
import Header from './components/Head/Header';
import Footer from './components/Footer./Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>

        <div className='content'>
          <Routes>
            <Route path='/' end element={<Produtos/>}/>
            <Route path='contato' element={<Contato/>}/>
            <Route path="*" element={<Pagina404 />} />
        </Routes>
        </div>

        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
