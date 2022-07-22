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
        var xValues = ["Hp", "Attack", "Defense", "Special-Attack", "Special-Defense", 'Speed'];
        var yValues = [];
        var barColors = ['#ff8000'];

        props.pokemonStats.map(stat => yValues.push(stat.base_stat))

        new Chart("myChart", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues,
                    borderColor: 'black',
                    borderWidth: 5
                },
                ]
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        color: 'black',
                        text: "World Wine Production 2018"
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
        <canvas className='m-5' id="myChart"></canvas>
    )
}

export default StatChart;