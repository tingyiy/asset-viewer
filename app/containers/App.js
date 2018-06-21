import React from 'react';
import { connect } from 'react-redux';

import { requestAsset } from '../actions';
import Query from '../components/Query';

const mapStateToProps = (state) => {
    return {
        queryResult: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onQueryClick: (data) => dispatch(requestAsset(data.queryString))
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Query);
