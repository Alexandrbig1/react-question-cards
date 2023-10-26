import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Title = styled.h1`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Times New Roman", Times, serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  text-transform: uppercase;
`;
