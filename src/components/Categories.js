import { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className='categories'>
      <ul>
        {categories.map((category, i) => (
          <li
            className={activeIndex === i ? 'active' : ''}
            onClick={() => setActiveIndex(i)}
            key={i}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
