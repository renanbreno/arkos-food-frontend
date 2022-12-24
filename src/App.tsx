import './styles/global.css'
import { Signin } from './pages/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Catalog } from './pages/Catalog';
import { EditProfile } from './pages/EditProfile';
import { Cart } from './pages/Cart';

export function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Signin />} />
                <Route path='/catalogo' element={<Catalog />} />
                <Route path='/edicao-perfil' element={<EditProfile />} />
                <Route path='/carrinho' element={<Cart />} />
            </Routes>
        </Router>
    )
}
