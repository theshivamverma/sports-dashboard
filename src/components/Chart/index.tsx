// @ts-nocheck

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { ChartContainer, PageContainer } from "./Chart.styles";
import { Text } from "../Typography";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const data = {
  labels: ["0:00", "0:10", "0:20", "0:30", "0:40", "0:50", "1:00"],
  datasets: [
    {
      fill: true,
      label: "User Watch Count",
      data: [32, 25, 40, 45, 35, 30, 50],
      backgroundColor: "transparent",
      borderColor: "rgba(75, 192, 192, 1)",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      borderWidth: 4,
      tension: 0.5,
    },
  ],
};

const options = {
  plugins: {
    tooltip: {
      enabled: true,
      intersect: true
    },
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#fff",
      },
    },
    y: {
      min: 10,
      max: 100,
      ticks: {
        color: "#fff",
        stepSize: 10,
        callback: (value: number) => value + "M",
      },
      grid: {
        borderDash: [10],
      },
    },
  },
};

const Chart = () => {
  return (
    <Line data={data} options={options} />
  );
}

export default Chart