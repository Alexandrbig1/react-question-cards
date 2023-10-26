import styled from "styled-components";

export const FlashCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const FlashCardsContainer = styled.div`
  border: 1px solid #e7e7e7;
  background-color: #ced4da;
  border-radius: 7px;
  aspect-ratio: 2 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
`;

export const FlashCardsText = styled.p`
  /* color: #050505; */
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

// export const SelectedCard = styled.div`
//   border: none;
//   background: linear-gradient(to bottom left, #0ca678, #4c6ef5);
//   color: ${(p) => p.theme.colors.white};
//   font-weight: bold;
//   transform: scale(1.04);
// `;
