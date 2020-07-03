const data = (state = [], action) => {
    switch (action.type) {
        case 'GET_DATA':
            return action.value
        default:
            return state;
    }
}

export default data;
