'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: "Amount",
                data: [1250, 3240, 2500, 4000],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa', '#3efd44']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4']
    }
  return <Doughnut 
     data={data}
     options={{
        plugins: {
            legend: {
                display: false
            }
        }
     }} />;
}

export default DoughnutChart