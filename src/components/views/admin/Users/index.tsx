import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";

type PropsTypes = {
  users: any;
};

const UsersAdminView = (props: PropsTypes) => {
  const { users } = props;
  const [UpdatedUser, setUpdatedUser] = useState<any>({});
  const [deletedUser, setDeletedUser] = useState<any>({});
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    setUsersData(users);
  }, [users]);
  return (
    <>
      <AdminLayout>
        <div className="">
          <h1 className="font-bold text-[2em]">User Management</h1>
          <table className="w-full border-spacing-0 border-collapse border-[1px] border-solid border-[#ddd] mt-10">
            <thead className="bg-[#f2f2f2]">
              <tr>
                <th className="text-left p-2">#</th>
                <th className="text-left p-2">Fullname</th>
                <th className="text-left p-2">Email</th>
                <th className="text-left p-2">Phone</th>
                <th className="text-left p-2">Role</th>
                <th className="text-center p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user: any, index: number) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "" : "bg-[#f2f2f2]"}`}
                >
                  <td className="text-left p-2">{index + 1}</td>
                  <td className="text-left p-2">{user.fullname}</td>
                  <td className="text-left p-2">{user.email}</td>
                  <td className="text-left p-2">{user.phone}</td>
                  <td className="text-left p-2">{user.role}</td>
                  <td className="text-left p-2">
                    <div className="flex gap-2.5">
                      <Button
                        type="button"
                        onClick={() => setUpdatedUser(user)}
                        className="text-white font-semibold bg-black p-4"
                      >
                        <i className='bx bxs-edit text-[20px]' />
                      </Button>
                      <Button
                        type="button"
                        className="text-white font-semibold bg-[#d42b2b] p-4"
                        onClick={() => setDeletedUser(user)}
                      >
                        <i className='bx bxs-trash text-[20px]'/>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
      {Object.keys(UpdatedUser).length > 0 && (
        <ModalUpdateUser
          updatedUser={UpdatedUser}
          setUpdatedUser={setUpdatedUser}
          setUsersData={setUsersData}
        />
      )}
      {Object.keys(deletedUser).length && (
        <ModalDeleteUser
          deletedUser={deletedUser}
          setDeletedUser={setDeletedUser}
          setUsersData={setUsersData}
        />
      )}
    </>
  );
};

export default UsersAdminView;
