import { useState } from "react";
import CustomSwitch from "./custom-switch";
import Cards from "../cards/cards";
import Calendar from "../calendar/calendar";

export default function TabbedViewSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <CustomSwitch checked={checked} handleChange={handleChange} />
      {checked ? <Cards /> : <Calendar />}
    </>
  );
}
