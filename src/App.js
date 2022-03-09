import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components';
import { Home, Login } from './pages';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={'pets'} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
