import { Container } from "@mui/material";
import CardsTemplate from "../svg/cards-template";

export default function CardsSection() {
  return (
    <Container sx={{ mt: "1rem", display: "flex", justifyContent: "center" }}>
      <CardsTemplate />
    </Container>
  );
}
