import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar, Radar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

class ChartComponent extends Component {
    getLabels = () => {
        var labels = [], label, occurence = [], prev, count = 0;
        for (label of this.props.vehicles) {
            labels.push(label.companyName);
        }
        let uniqueLabels = labels.filter((lbl, i, arr) => arr.indexOf(lbl) === i);
        labels.sort();
        for (var j = 0; j < labels.length; j++) {
            if (labels[j] !== prev) {
                for (var k = j; k < labels.length; k++) {
                    if (labels[j] === labels[k]) {
                        count++;
                    }
                }
                occurence.push(count);
                count = 0;
            }
            prev = labels[j];
        }
        return [uniqueLabels, occurence];
    }
    getData = () => {
        var vehicle, vehicleInfo = [], temp, flag;
        for (vehicle of this.props.vehicles) {
            temp = {
                label: vehicle.companyName,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [vehicle.average, vehicle.rating, vehicle.service, 5]
            }
            if (vehicleInfo.length !== 0) {
                for (var i = 0; i < vehicleInfo.length; i++) {
                    if (temp.label === vehicleInfo[i].label) {
                        flag = true;
                        break;
                    }
                    else {
                        flag = false;
                    }
                }
                if (!flag) {
                    vehicleInfo.push(temp);
                }
            }
            else {
                vehicleInfo.push(temp);
            }
        }

        return {
            labels: ['Average', 'Ratings', 'Services', 'Total'],
            datasets: vehicleInfo
        }
    }
    vehi = () => {
        var lab = [];
        lab = this.getLabels();

        return {
            labels: lab[0],
            datasets: [
                {
                    label: 'Total Vehicle Company Wise',
                    data: lab[1]
                },
            ],

        }
    }
    render() {
        return (
            <div style={{ paddingLeft: '200px', paddingRight: '200px' }}>
                <Bar data={this.vehi} options={options} />
                <Radar data={this.getData} />
                <Link to='/'>Back</Link>
            </div>
        );
    }
}
const options = {

    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }

}
const mapStateToProps = (state) => {
    return {
        vehicles: state
    }
}
export default connect(mapStateToProps)(ChartComponent);