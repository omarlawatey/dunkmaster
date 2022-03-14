import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer, Header } from './components';
import { Home, Login, Pets, Ranks } from './pages';
import './Styles/App.scss';
import { useEffect, useMemo, useState } from 'react';

const App = () => {
  const [ActiveIndex, setActiveIndex] = useState(0);

  const pages = useMemo(
    () => [
      {
        name: 'Ranks',
        path: '/ranks'
      },
      {
        name: 'Pets',
        path: '/pets'
      },
      {
        name: 'About-us',
        path: '/about-us'
      }
    ],
    []
  );

  useEffect(() => {
    let pathname = window.location.pathname;

    pages.forEach((item, index) => {
      if (pathname === item.path) {
        setActiveIndex(index + 1);
      }
    });

    if (pathname === '/login') {
      setActiveIndex(pages.length + 2);
    }
  }, [pages]);

  return (
    <div className="App">
      <Header
        ActiveIndex={ActiveIndex}
        setActiveIndex={setActiveIndex}
        pages={pages}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default App;
