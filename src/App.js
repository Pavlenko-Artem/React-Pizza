import { useEffect, useState } from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://6389cb934eccb986e89a9f07.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {loading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map(({ id, ...pizza }) => (
                  <PizzaBlock
                    {...pizza}
                    key={id}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
