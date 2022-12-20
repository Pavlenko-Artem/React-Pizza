import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = () => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      previousLabel='<'
      nextLabel='>'
      onPageChange={(e) => console.log(e)}
      pageRangeDisplayed={5}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
