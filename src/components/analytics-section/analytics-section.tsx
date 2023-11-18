import { useRef } from "react";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function AnalyticsSection() {
  const ref = useRef();
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: [
          "#FAFAFA",
          "#FAFAFA",
          "#8234F8",
          "#FAFAFA",
          "#FAFAFA",
          "#FAFAFA",
          "#FAFAFA",
        ],
        data: [1234, 2234, 5234, 2234, 1000, 2900, 3900],
        fill: false,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        labels: {
          title: {
            color: "#A3A3A3",
            font: {
              weight: "bold",
            },
          },
        },
        anchor: "end",
        align: "-90",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
   
      },
      y: {
        display: false,
        ticks: {
          display: false,
          beginAtZero: true,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };

  return (
    <Container sx={{ p: { md: 0, xs: 0 }, mb: 0 }}>
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
      <Box
        sx={{ display: "flex", justifyContent: "center", p: { xs: "1rem" } }}
      >
        <Bar
          data={data}
          plugins={[ChartDataLabels]}
          options={options}
          ref={ref}
          height={180}
        />
      </Box>
    </Container>
  );
}
