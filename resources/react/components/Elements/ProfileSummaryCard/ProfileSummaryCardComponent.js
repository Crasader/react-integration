import React, { Component } from 'react'
import { ProfileSummaryPropTypes } from '../../../models'

class ProfileSummaryCardComponent extends Component {
    render () {
        const ps = this.props.profileSummary

        return (
            <div>
                <div className="profile-image">
                    <img className="img-circle circle-border m-b-md" alt={ps.imageAlt} src={ps.image} />
                </div>
                <div className="profile-info">
                    <div>
                        <h2 className="no-margins">
                            {ps.name}
                        </h2>
                        <h4>{ps.role} - <span className="text-navy">{ps.organization}</span></h4>

                        {this.renderSummaryLinesFromProfileSummary(ps)}
                    </div>
                </div>
            </div>
        )
    }

    renderSummaryLinesFromProfileSummary (ps) {
        return (
            <div>
                {ps.summaryLines.map((line) => {
                    return (
                        <div>
                            <small>
                                {line}
                            </small>
                            <br />
                        </div>
                    )
                })}
            </div>
        )
    }
}

ProfileSummaryCardComponent.propTypes = ProfileSummaryPropTypes

export default ProfileSummaryCardComponent
