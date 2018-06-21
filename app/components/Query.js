import React from 'react';

const Query = ({ queryResult, onQueryClick }) => {
    let queryString;

    return (
        <div>
            Enter query here: <input type="text" ref={(r) => { queryString = r }} />
            <button
                onClick={() =>
                    onQueryClick({
                        queryString: queryString.value
                    })}>QUERY
            </button>
            <div><pre>{JSON.stringify(queryResult, null, 2)}</pre></div>
        </div>
    );
}

export default Query;
