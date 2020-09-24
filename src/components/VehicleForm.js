import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class VehicleForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const vehicleType = this.getType.value;
        const companyName = this.getCompany.value;
        const average = this.getAverage.value;
        const service = this.getService.value;
        const rating = this.getRating.value;
        const data = {
            vehicleType,
            companyName,
            average,
            service,
            rating
        }
        this.props.dispatch({
            type: 'ADD_VEHICLE',
            data
        });
        this.getType.value = '';
        this.getCompany.value = '';
        this.getAverage.value = '';
        this.getService.value = '';
        this.getRating.value = '';
    }

    render() {
        return (
            <div>
                <h2>Enter Vehicle Details</h2>
                <Link to='/chart'>Chart</Link>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="enter vehicle type"
                        ref={(input) => this.getType = input}
                        required /><br /><br />
                    <input
                        type="text"
                        placeholder="enter company name"
                        ref={(input) => this.getCompany = input}
                        required /><br /><br />
                    <input
                        type="text"
                        placeholder="enter average"
                        ref={(input) => this.getAverage = input}
                        required /><br /><br />
                    <input
                        type="text"
                        placeholder="enter services"
                        ref={(input) => this.getService = input}
                        required /><br /><br />
                    <input
                        type="text"
                        placeholder="enter rating"
                        ref={(input) => this.getRating = input}
                        required /><br /><br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect()(VehicleForm);