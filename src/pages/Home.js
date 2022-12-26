import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import { SearchContext } from '../App';

import axios from 'axios';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sortType, currentPage } = useSelector(
    (state) => state.filter,
  );
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue.length > 0 ? `search=${searchValue}` : '';

    axios
      .get(
        `https://6389cb934eccb986e89a9f07.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <>
      <div className='content__top'>
        <Categories
          value={categoryId}
          onChangeCategory={(id) => dispatch(setCategoryId(id))}
        />
        <Sort />
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
      <Pagination
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
    </>
  );
};

export default Home;
