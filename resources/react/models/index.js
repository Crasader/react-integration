import PropTypes from 'prop-types'

export const EmptyProfileSummary = {
    image: "/images/loading.gif",
    imageAlt: "Profile Image",
    name: "",
    role: "",
    organization: "",
    summaryLines: []
}

export const ProfileSummary = {
    image: "/images/nw-ervinne.jpg",
    imageAlt: "Profile Image",
    name: "Ervinne Sodusta",
    role: "Backend Developer",
    organization: "NuWorks Interactive Labs",
    summaryLines: [
        "Engineer | Full Stack Developer | Mobile Developer | Team Leader | Tutor / Teacher",
        "ERP | Accounting | Inventory | Payroll | Mobile Apps | Custom Business Solutions"
    ]
}

export const ProfileSummaryPropTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    summaryLines: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
}
