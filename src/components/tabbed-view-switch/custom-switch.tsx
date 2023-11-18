import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const SwitchStyled = styled(Switch)({
  width: 240,
  height: 50,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    transform: "translateX(112px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(5px)",
      "& .MuiSwitch-thumb": {
        "&:before": {
          content: "'Cards'",
          fontFamily: "Roboto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        },
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#FAFAFA",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#2F3046",
    width: 120,
    height: 36,
    borderRadius: 20,
    position: "absolute",
    top: 7,
    left: 2,
    "&:before": {
      content: "'Calendar'",
      fontFamily: "Roboto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
    },
  },
  "& .MuiSwitch-track": {
    display: "flex",
    alignItems: "center",
    opacity: 1,
    backgroundColor: "#FAFAFA",
    borderRadius: 20,
    "&:after": {
      position: "absolute",
      content: "'Calendar'",
      fontFamily: "Roboto",
      right: 35,
    },
    "&:before": {
      position: "absolute",
      content: "'Cards'",
      fontFamily: "Roboto",
      left: 35,
    },
  },
});

type Props = {
  checked: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CustomSwitch({ checked, handleChange }: Props) {
  return (
    <>
      <FormControlLabel
        control={<SwitchStyled checked={checked} onChange={handleChange} />}
        label=""
        labelPlacement="bottom"
      />
    </>
  );
}
