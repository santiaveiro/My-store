// Paginator.js
import React from 'react';
import '../Styles/Paginator.css';

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="paginator">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        &lt; Previous
      </button>
      <div className="page-counter">
        Page {currentPage} of {totalPages}
      </div>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next &gt;
      </button>
    </div>
  );
};

export default Paginator;
