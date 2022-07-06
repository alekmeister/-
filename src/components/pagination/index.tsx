import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss';

type Props = {
  currentPage: number;
  onChangePage: (page: number) => void;
};
export const Pagination: React.FC<Props> = ({ onChangePage, currentPage }) => {
  return (
    <ReactPaginate
      className={style.pagination}
      containerClassName={style.wrapper}
      pageClassName="item"
      pageLinkClassName={style.link}
      breakLinkClassName={style.link}
      breakLabel="..."
      activeLinkClassName={style.active}
      nextLabel=">"
      nextLinkClassName={style.link}
      previousLinkClassName={style.link}
      pageRangeDisplayed={8}
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageCount={3}
      previousLabel="<"
      initialPage={currentPage}
    />
  );
};
