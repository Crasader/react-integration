import React, { Component } from 'react'

import CompanyLogo from  '../../Elements/CompanyLogo'
import ProfileSummaryCard from '../../Elements/ProfileSummaryCard'

class Header extends Component {
    render () {
        return (
            <div className="row m-b-lg m-t-lg">
                <div className="col-md-8">
                    <ProfileSummaryCard />
                </div>
                <div className="col-md-3">
                    <CompanyLogo />
                </div>
            </div>
        )
    }
}

export default Header
