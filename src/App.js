import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={'pets'} />
      </Routes>
    </div>
  );
};

export default App;
