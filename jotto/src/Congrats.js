import React from "react";
import PropTypes from "prop-types"; // ES6

/**
 * Functional react component for congratulatory message
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component
 */
export default props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">Congratulations!</span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
