import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessWords from "./GuessWords";
import { wrap } from "module";

const defaultProps = {
  guessWords: [{ guessWord: "train", letterMatchCount: 3 }]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessWords {...setupProps} />);
};

test("does not throw warning with expected props ", () => {
  checkProps(GuessWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders instructions to guess a word", () => {
    const component = findByTestAttr(wrapper, "guess-instruction");
    expect(component.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessWords = [
    { guessWord: "train", letterMatchCount: 3 },
    { guessWord: "agile", letterMatchCount: 1 },
    { guessWord: "party", letterMatchCount: 5 }
  ];
  beforeEach(() => {
    wrapper = setup({ guessWords });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders 'guessed words' section", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });

  test("correct number of guessed words", () => {
    const guessedWordNode = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNode.length).toBe(guessWords.length);
  });
});
