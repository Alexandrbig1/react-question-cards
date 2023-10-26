import { useState } from "react";
import questions from "../../questions.json";
import {
  FlashCardsWrapper,
  FlashCardsContainer,
  FlashCardsText,
} from "./FlashCard.styled";

export default function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handlerClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <FlashCardsWrapper>
      {questions.map(({ id, question, answer }) => (
        <FlashCardsContainer
          key={id}
          className={id === selectedId ? "selected" : ""}
          onClick={() => handlerClick(id)}
        >
          <FlashCardsText>
            {id === selectedId ? answer : question}
          </FlashCardsText>
        </FlashCardsContainer>
      ))}
    </FlashCardsWrapper>
  );
}
