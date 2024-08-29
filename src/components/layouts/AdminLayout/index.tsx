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
    {
        title: 'Users',
        url: '/admin/users',
        icons: 'bxs-user-account',
    },
] 

const AdminLayout = (props : PropTypes) => {
    const {children} = props;
    return (
        <div className="flex">
            <Sidebar lists={listSidebarItem} />
           <div className="w-full py-10 px-14">{children}</div>
        </div>
    )
};

export default AdminLayout;