'use client'
import ReactPaginate from 'react-paginate'
import css from './Pagination.module.css'

interface PaginationProps {
  totalPages: number
  onPageChange: (selected: number) => void
  currentPage: number
}


export default function Pagination({ totalPages, onPageChange, currentPage }: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={currentPage - 1}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }: { selected: number }) => {
        onPageChange(selected + 1)
      }}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel='→'
      previousLabel='←'
    />
  )
}
