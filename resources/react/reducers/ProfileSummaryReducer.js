
import { EmptyProfileSummary } from '../models'
import {
    REQUEST_PROFILE_SUMMARY,
    RECEIVE_PROFILE_SUMMARY
} from '../actions'

const ProfileSummaryReducer = (state = {profile: EmptyProfileSummary}, action) => {
    switch (action.type) {
        case REQUEST_PROFILE_SUMMARY:
        case RECEIVE_PROFILE_SUMMARY:
            // return { ...state, ...action.profileSummary }
            return Object.assign({}, action.profileSummary)
        default:
            return state;
    }
}

export default ProfileSummaryReducer
