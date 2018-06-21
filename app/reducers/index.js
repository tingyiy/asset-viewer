const asset = (state = [], action) => {
    switch (action.type) {
        case 'GET_STATUS_RECEIVED':
            return { status: action.data };
        case 'QUERY_RECEIVED':
            return { status: action.data };
    default:
            return state;
    }
};

const rootReducer = asset;

export default rootReducer;