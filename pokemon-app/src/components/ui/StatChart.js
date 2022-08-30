import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {useEffect} from "react";
import classes from './StatChart.module.css'





function StatChart(props) {



    useEffect(() => {
        chartInit()
    })

    function chartInit() {

        Chart.register(
            ArcElement,
            LineElement,
            BarElement,
            PointElement,
            BarController,
            BubbleController,
            DoughnutController,
            LineController,
            PieController,
            PolarAreaController,
            RadarController,
            ScatterController,
            CategoryScale,
            LinearScale,
            LogarithmicScale,
            RadialLinearScale,
            TimeScale,
            TimeSeriesScale,
            Decimation,
            Filler,
            Legend,
            Title,
            Tooltip
        );


        const ctx = document.getElementById('myChart').getContext('2d');
        let chartElement = document.getElementById('myChart');
        var xValues = ["Hp", "Attack", "Defense", "Special-Attack", "Special-Defense", 'Speed'];
        var yValues = [];
        var barColors = ['#5148FF'];

        props.pokemonStats.map(stat => yValues.push(stat.base_stat))


        let myChart = new Chart("myChart", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues,
                    borderColor: 'black',
                    borderWidth: 2
                },
                ]
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        color: 'black',
                        text: "Stats"
                    },
                    label: {
                        color: 'black'
                    },
                    legend: {display: false}
                },

                scales: {
                    y: {
                        ticks: { color: 'black', beginAtZero: true }
                    },
                    x: {
                        ticks: { color: 'black', beginAtZero: true }
                    }
                }
            }
        });
    }






    return (

            <div className={`card mx-auto ${classes.width90} boxshadow`}>
                <div className="card-body" id='chartContainer'>
                    <canvas className='m-5' id="myChart"></canvas>
                </div>
            </div>
    )
}

export default StatChart;