import { useState } from "react";
import CardsSection from "@/components/cards-section/cards-section";
import CalendarSection from "@/components/calendar-section/calendar-section";
import CustomSwitch from "@/components/tabbed-view-switch/custom-switch";

const TabbedViewSwitch: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <CustomSwitch checked={checked} handleChange={handleChange} />
      {checked ? <CardsSection /> : <CalendarSection />}
    </>
  );
};

export default TabbedViewSwitch;
