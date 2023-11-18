import {
  Box,
  Container,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import { BarChart } from "@mui/x-charts";

export default function AnalyticsSection() {
  return (
    <Container sx={{ p: { md: 0, xs: 0 } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          mt: "24px",
          mb: "24px",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Analytics
        </Typography>
        <FormControl sx={{ width: "110px" }}>
          <InputLabel
            id="demo-controlled-open-select-label"
            sx={{ top: -5, color: "#ffffff", fontSize: "12px" }}
          >
            Year - 2022
          </InputLabel>
          <Select
            disabled
            sx={{
              backgroundColor: "#FF653A",
              borderRadius: "12px",
              height: "36px",
              "& .MuiSelect-icon": {
                fill: "#ffffff",
              },
            }}
          ></Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <BarChart
          series={[
            {
              data: [1234, 2234, 5234, 2234, 1000, 2900, 3900],
              color: "#8234F8",
            },
          ]}
          xAxis={[
            {
              scaleType: "band",
              data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            },
          ]}
          height={200}
          width={361}
          leftAxis={null}
        />
      </Box>
    </Container>
  );
}
