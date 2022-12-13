import { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  console.log(sortType);
  useEffect(() => {
    setLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(
      `https://6389cb934eccb986e89a9f07.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <div className='content__top'>
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
        />
        <Sort
          value={sortType}
          onChangeSort={(obj) => setSortType(obj)}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {loading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map(({ id, category, ...pizza }) => (
              <PizzaBlock
                {...pizza}
                key={id}
                category={category}
              />
            ))}
      </div>
    </>
  );
};

export default Home;
