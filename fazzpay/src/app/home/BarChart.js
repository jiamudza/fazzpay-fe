import { useEffect, useState } from "react"
import styles from './BarChartModule.css'

import {Bar} from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
const BarChart = () => {

    const [chartData, setChartData] = useState({
        datasets:[]
    })

    const [chartOptions, setCharOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels:['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
            datasets: [
                {
                    label: '',
                    data: [15235, 22232, 12612, 34565, 24545, 12345, 12235],
                    borderColor: 'blue',
                    backgroundColor: '#4927F2',
                    width: '15px'
                }
            ]
        })

        setCharOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
  return (
    <>
        <div className={styles.container}>
            <Bar data={chartData} options={chartOptions} />
        </div>
    </>
  )
}

export default BarChart