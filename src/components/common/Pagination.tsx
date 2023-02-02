import {FC} from "react"
import "./Pagination.css"

type PaginationProps = {
  champsPerPage: number
  totalChamps: number
  paginate: (args: number) => void
  currentPage: number
  setCurrentPage: (args: any) => void
}

const Pagination: FC<PaginationProps> = ({
  champsPerPage,
  totalChamps,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalChamps / champsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <div className="pageButtons">
        <button
          className={`${
            (currentPage === 1 || pageNumbers.length < 1) &&
            "pageButton--disabled"
          } pageButton`}
          onClick={() => {
            if (currentPage !== 1) {
              setCurrentPage((prevState: any) => prevState - 1)
              window.scrollTo({
                top: 340,
                left: 0,
                behavior: "smooth",
              })
            }
          }}
        >
          Previous
        </button>
        <button
          className={`${
            (currentPage === pageNumbers.length || pageNumbers.length < 1) &&
            "pageButton--disabled"
          } pageButton`}
          onClick={() => {
            if (currentPage !== pageNumbers.length) {
              setCurrentPage((prevState: any) => prevState + 1)
              window.scrollTo({
                top: 340,
                left: 0,
                behavior: "smooth",
              })
            }
          }}
        >
          Next
        </button>
      </div>
      <div className="pageNumbers">
        {pageNumbers.map((number, index) => (
          <button
            key={number}
            onClick={() => {
              paginate(number)
              window.scrollTo({
                top: 340,
                left: 0,
                behavior: "smooth",
              })
            }}
            className={`${
              currentPage === index + 1 && "currentPage"
            } page-link`}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  )
}

export default Pagination
