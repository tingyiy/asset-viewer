import React, { Component } from 'react';

class Query extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryData: [],
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.queryResult !== this.props.queryResult) {
            const queryData = this.props.queryResult.status.items;

            this.setState({
                queryData,
            });
        }
    }

    render() {
        const { queryResult, onQueryClick } = this.props;
        let queryString;
        queryResult.status ? console.log(queryResult.status.items) : null;

        return (
            <div>
                Enter query here: <input type="text" ref={(r) => { queryString = r }} />
                <button
                    onClick={() =>
                        onQueryClick({
                            queryString: queryString.value
                        })}>QUERY
                </button>
                <div>
                    {
                        this.state.queryData.map((item, i) => {
                            const { src, width, height } = item.pagemap.cse_thumbnail[0];
                            return (
                                <div key={i}>
                                    <p>{item.title}</p>
                                    <p>{item.link}</p>
                                    <img src={src} width={width} height={height} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

// <pre>{JSON.stringify(queryResult, null, 2)}</pre>

export default Query;
