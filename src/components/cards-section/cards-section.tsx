import { Container } from "@mui/material";
import CardsTemplate from "../svg/cards-template";

export default function CardsSection() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <CardsTemplate />
    </Container>
  );
}
