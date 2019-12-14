import React from "react";
import PropTypes from "prop-types";

const GuessWords = props => {
  let contents;

  if (props.guessWords.length === 0) {
    contents = (
      <span data-test="guess-instruction">Try to guess the correct word</span>
    );
  } else {
    const guessWordsRows = props.guessWords.map((word, idx) => {
      return (
        <tr key={idx} data-test="guessed-word">
          <td>{word.guessWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      );
    });

    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessWordsRows}</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-guessed-words">{contents}</div>;
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
