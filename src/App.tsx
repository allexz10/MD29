import { Routes, Route, Link } from 'react-router-dom';
import Countries from './pages/Countries';
import Countrie from './pages/Countrie';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.scss';

const App = () => (
  <>
    <nav className="nav">
      <Link className="nav__link" to="/home">
        home
      </Link>
      &nbsp;&nbsp;
      <Link className="nav__link" to="/countries">
        countries
      </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/countries/" element={<Countries />} />
      <Route path="/countrie/:id" element={<Countrie />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
