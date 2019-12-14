import React from "react";
import PropTypes from "prop-types";

const GuessWords = props => {
  return <div />;
};

GuessWords.propTypes = {
  guessWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessWords;
