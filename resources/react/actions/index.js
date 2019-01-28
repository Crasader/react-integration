import axios from 'axios';

export const REQUEST_PROFILE_SUMMARY = 'REQUEST_PROFILE_SUMMARY'
export const requestProfileSummary = () => {
    return {
        type: REQUEST_PROFILE_SUMMARY
    }
}

export const RECEIVE_PROFILE_SUMMARY = 'RECEIVE_PROFILE_SUMMARY'
export const receiveProfileSummary = (profileSummary) => {
    return {
        type: RECEIVE_PROFILE_SUMMARY,
        profileSummary
    }
}

function profileSummaryIsInContext () {
    return (typeof context !== 'undefined' && context.profileSummary)
}

/**
 * Based on thunk: https://redux.js.org/advanced/async-actions
 */
export function fetchProfileSummary () {

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    return (dispatch) => {

        if (profileSummaryIsInContext()) {
            return dispatch(receiveProfileSummary(context.profileSummary));
        }

        dispatch(requestProfileSummary())

        return axios.get('/api/profile-summary')
            .then(
                response => response.json(),
                // Do not use catch, because that will also catch
                // any errors in the dispatch and resulting render,
                // causing a loop of 'Unexpected batch number' errors.
                // https://github.com/facebook/react/issues/6895
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveProfileSummary(json)))
    }
}
