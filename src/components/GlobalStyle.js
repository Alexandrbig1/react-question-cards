import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
p {
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.bgColor};
}
`;
