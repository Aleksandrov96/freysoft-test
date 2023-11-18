import { useState } from "react";
import CustomSwitch from "./custom-switch";
import CardsSection from "../cards-section/cards-section";
import CalendarSection from "../calendar-section/calendar-section";

export default function TabbedViewSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <CustomSwitch checked={checked} handleChange={handleChange} />
      {checked ? <CardsSection /> : <CalendarSection />}
    </>
  );
}
