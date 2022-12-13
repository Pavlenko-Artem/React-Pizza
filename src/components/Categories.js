function Categories(props) {
  const { value, onChangeCategory } = props;

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
            className={value === i ? 'active' : ''}
            onClick={() => onChangeCategory(i)}
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
