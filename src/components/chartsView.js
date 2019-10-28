import React from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import 'chartjs-plugin-colorschemes';

export class ChartsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [],
                datasets: []
            }
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData() {
        axios.get("https://data.sfgov.org/api/id/88g8-5mnd.json?$query=SELECT%20%60department%60%20AS%20__dimension_alias__%2C%20COUNT(*)%20AS%20__measure_alias__%20%20GROUP%20BY%20%60department%60%20ORDER%20BY%20__measure_alias__%20DESC%20NULL%20LAST%20LIMIT%2010&$$read_from_nbe=true&$$version=2.1", {})
            .then(((response) => {
                const labels = response.data.map(d => d.__dimension_alias__ || 'Default Label');
                const data = response.data.map(d => d.__measure_alias__);
                // **** We can use below code if we want to provide user defined colors instead of any color pallette
                // const backgroundColor = [];
                // response.data.forEach(element => {
                //     const r = Math.floor(Math.random() * 255);
                //     const g = Math.floor(Math.random() * 255);
                //     const b = Math.floor(Math.random() * 255);
                //     backgroundColor.push('rgba(' + r + ', ' + g + ', ' + b + ', 0.7)');
                // });
                this.setState({
                    chartData: {
                        labels: labels,
                        datasets: [{
                            data,
                            borderColor: '#b0ded5'
                        }]
                    }
                })
            }));
    }
    render() {
        return (
            <div className="container">
                <div className="view-header">
                    <h2>Chart View </h2>
                </div>
                <Pie data={{
                    labels: this.state.chartData.labels,
                    datasets: this.state.chartData.datasets
                }} options={{
                    plugins: {
                        datalabels: {
                            color: '#000',
                            display: function (context) {
                                return context.dataset.data[context.dataIndex] > 30000;
                            },
                            font: {
                                weight: 'bold',
                                style: 'italic'
                            },
                            formatter: function (value, context) {
                                return value;
                            }
                        },
                        colorschemes: {
                            scheme: 'brewer.SetThree10'
                        }
                    }
                }} />
            </div>
        );
    }
}
