import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.root}>
      <svg
        class={styles.icon}
        fill='none'
        height='24'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        viewBox='0 0 24 24'
        width='24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='11'
          cy='11'
          r='8'
        />
        <line
          x1='21'
          x2='16.65'
          y1='21'
          y2='16.65'
        />
      </svg>
      <input
        type='text'
        placeholder='Поиск пиццы...'
        className={styles.input}
      />
    </div>
  );
};

export default Search;
