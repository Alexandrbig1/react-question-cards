import FlashCards from "./FlashCard/FlashCard";
import { Container, Title } from "./Layout";

export default function App() {
  return (
    <Container>
      <Title>Q/A flashcards for React</Title>
      <FlashCards />
    </Container>
  );
}
