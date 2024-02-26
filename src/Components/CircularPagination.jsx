import PropTypes from "prop-types";
import { Button, IconButton } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export function CircularPagination({ totalPages, activePage, onPageChange }) {
  const getItemProps = (index) => ({
    variant: activePage === index ? "filled" : "text",
    color: "gray",
    onClick: () => onPageChange(index),
    className: "rounded-full",
  });

  const next = () => {
    if (activePage === totalPages) return;
    onPageChange(activePage + 1);
  };

  const prev = () => {
    if (activePage === 1) return;
    onPageChange(activePage - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={activePage === 1}
      >
        <FaArrowLeft  strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages).keys()].map((index) => (
          <IconButton key={index + 1} {...getItemProps(index + 1)}>
            {index + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={activePage === totalPages}
      >
        Next <FaArrowRight  strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

CircularPagination.propTypes = {
  totalPages: PropTypes.number,
  activePage: PropTypes.number,
  onPageChange: PropTypes.func,
};
