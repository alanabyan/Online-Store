import Sidebar from "../fragments/Navbar/Sidebar"

type PropTypes = {
    children: React.ReactNode
}

const listSidebarItem = [
    {
        title: 'Dashboard',
        url: '/admin',
        icons: 'bxs-dashboard',
    },
    {
        title: 'Products',
        url: '/admin/products',
        icons: 'bxs-box',
    },
] 

const AdminLayout = (props : PropTypes) => {
    const {children} = props;
    return (
        <div className="">
            <Sidebar lists={listSidebarItem} />
            {children}
        </div>
    )
};

export default AdminLayout;