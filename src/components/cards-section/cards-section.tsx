import { Container } from "@mui/material";
import CardsTemplate from "@/components/svg/cards-template";

const CardsSection: React.FC = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", mt: "1rem" }}>
      <CardsTemplate />
    </Container>
  );
};

export default CardsSection;
