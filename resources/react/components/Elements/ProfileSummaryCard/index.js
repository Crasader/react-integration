import { connect } from 'react-redux'

import ProfileSummaryCardComponent from './ProfileSummaryCardComponent'
import { EmptyProfileSummary, ProfileSummary } from '../../../models'

const mapStateToProps = (state) => {
    return { profileSummary: state.profileSummary ? state.profileSummary : EmptyProfileSummary }
}

const mapDispatchToProps = (dispatch) => {
    return { }
}

const ProfileSummaryCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileSummaryCardComponent)

export default ProfileSummaryCard
