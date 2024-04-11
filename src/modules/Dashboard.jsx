import HeaderDashboard from "../components/admin/HeaderDashboard"
import AsideLeft from "../components/admin/AsideLeft"
import DataAnalytics from "../components/admin/DataAnalytics"
import RecentCustomers from "../components/admin/RecentCustomers"

const Dashboard = () => {
    return (
        <>
            <HeaderDashboard/>
            <AsideLeft />
            <DataAnalytics />
            <RecentCustomers />
        </>
    )
}

export default Dashboard