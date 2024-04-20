import { Divider, Modal } from "antd"
import ManagerCard from "../components/manager/ManagerCard"
import TableManagers from "../components/manager/TableManagers"
import { useEffect, useState } from "react";
import FormUser from "../components/formUser/FormUser";


const Managers = () => {
  const [userRol, setUserRol] = useState('')
  const [infoUser, setInfoUser] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setUserRol('')
  };
  const handleCancel = () => {
    setIsModalOpen(false)
    setUserRol('')
  };


  const getDataUsers = () => {
    fetch('http://localhost:5000/api/usuarios/consultar-usuarios')
      .then(res => res.json())
      .then(res => {
        const formattedData = res.users.map((user) => {
          let role = user.id_roles === 1 ? 'Admin' : 'Manager';
          return {
            key: user.id,
            id : user.document,
            name: user.names,
            email: user.email,
            age: user.age,
            phone: user.cellphone,
            address: user.address,
            role: [role]
          };
        });
        setInfoUser(formattedData);
      })
  }

  useEffect(() => {
    getDataUsers();
  }, [])


  return (
    <>
    <section>
      <div className="createRol">
        <ManagerCard title={"Admin"} description={"Create Admin"} img={'https://api.dicebear.com/7.x/miniavs/svg?seed=1'} showModal={showModal} setUserRol={setUserRol}/>
        <ManagerCard title={"Manager"} description={"Create Manager"} img={'https://api.dicebear.com/7.x/miniavs/svg?seed=8'} showModal={showModal} setUserRol={setUserRol}/>
      </div>
      <Divider orientation="left">List users</Divider>
      <div>
        <TableManagers infoUser={infoUser}/>
      </div>
    </section>
    <Modal title={"Create " + userRol} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <FormUser userRol={userRol}/>
    </Modal>
    </>
  )
}

export default Managers 