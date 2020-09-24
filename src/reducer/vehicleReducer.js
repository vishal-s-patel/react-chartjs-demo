const vehicleReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_VEHICLE':
            return state.concat([action.data]);
        default:
            return state;
    }
}

export default vehicleReducer;