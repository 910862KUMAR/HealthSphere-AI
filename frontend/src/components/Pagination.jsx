const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {

  return (

    <div className="flex justify-center items-center gap-3 mt-6">

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
      >
        Previous
      </button>

      <span className="font-semibold">

        {currentPage} / {totalPages}

      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
      >
        Next
      </button>

    </div>

  );
};

export default Pagination;