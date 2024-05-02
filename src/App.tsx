import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ConnectedPage from './components/ConnectedPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav className="container">
        <Link to="/">Domů</Link>
        &nbsp;|&nbsp;
        <Link to="/test">Test připojení</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<ConnectedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

