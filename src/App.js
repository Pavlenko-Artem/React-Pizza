import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const [searchValue, setSearchValue] = useState('');

  console.log('Текст поиска', searchValue);

  return (
    <div className='wrapper'>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className='content'>
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={<Home searchValue={searchValue} />}
            />
            <Route
              path='/cart'
              element={<Cart />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
