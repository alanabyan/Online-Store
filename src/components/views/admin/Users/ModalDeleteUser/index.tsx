import Button from "@/components/ui/Button"
import Modal from "@/components/ui/Modal";
import { userServices } from "@/services/user";

const ModalDeleteUser = (props: any) => {
    const {setDeletedUser, deletedUser, setUsersData} = props;

    const handleDelete = async () => {
        userServices.deleteUser(deletedUser.id);
        setDeletedUser({});
        const {data} = await userServices.getAllUsers();
        setUsersData(data.data);
    }

    return (
        <Modal onClose={() => setDeletedUser({})}>
            <h1>Are you sure to delete this account</h1>
            <Button type="button" className="bg-[#ff3131] w-28 text-white font-bold" onClick={() => handleDelete()}>Delete</Button>
        </Modal>
    )
}

export default ModalDeleteUser;