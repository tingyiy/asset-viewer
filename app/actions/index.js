export function requestAsset(queryString) {
    return {
        type: 'START_QUERY',
        queryString
    }
}
