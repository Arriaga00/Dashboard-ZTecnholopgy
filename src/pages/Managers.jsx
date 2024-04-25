import { Divider, Modal, message } from "antd";
import ManagerCard from "../components/manager/ManagerCard";
import TableManagers from "../components/manager/TableManagers";
import { useContext, useEffect, useState } from "react";
import FormUser from "../components/formUser/FormUser";
import Context from "../context/Context";

const Managers = () => {
  const { infoUser } = useContext(Context);
  const [userRol, setUserRol] = useState("");
  const [infoUserSave, setInfoUserSave] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    document: "",
    names: "",
    email: "",
    password: "",
    confirmPassword: "",
    cellphone: "",
    address: "",
    age: "",
    photo: "",
    id_roles: "",
  });

  const handleCancel = () => {
    setIsModalOpen(false);
    setUserRol("");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setUserRol("");
    fetch("http://localhost:5000/api/usuarios/guardar-usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        message.success("The user was successfully created");
        console.log(res),
          setTimeout(() => {
            window.location.reload();
          }, 3000);
      })
      .catch((error) => console.error("Error:", error));
  };

  const getDataUsers = () => {
    fetch("http://localhost:5000/api/usuarios/consultar-usuarios")
      .then((res) => res.json())
      .then((res) => {
        const formattedData = res.users.map((user) => {
          let role = user.id_roles === 1 ? "Admin" : "Manager";
          return {
            key: user.id,
            id: user.id,
            document: user.document,
            name: user.names,
            email: user.email,
            password: user.confirmPassword,
            age: user.age,
            phone: user.cellphone,
            address: user.address,
            role: [role],
          };
        });
        setInfoUserSave(formattedData);
      });
  };

  useEffect(() => {
    getDataUsers();
  }, []);

  return (
    <>
      <section>
        {infoUser.user.id_roles === 1 ? (
          <div className="createRol">
            <ManagerCard
              title={"Admin"}
              description={"Create Admin"}
              img={"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}
              showModal={showModal}
              setUserRol={setUserRol}
              keyRol={1}
            />
            <ManagerCard
              title={"Manager"}
              description={"Create Manager"}
              img={"https://api.dicebear.com/7.x/miniavs/svg?seed=8"}
              showModal={showModal}
              setUserRol={setUserRol}
              keyRol={2}
            />
          </div>
        ) : null}

        <Divider orientation="left">List users</Divider>
        <div>
          <TableManagers infoUserSave={infoUserSave} />
        </div>
      </section>
      <Modal
        title={"Create " + userRol.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Create"
      >
        <FormUser userRol={userRol.keyRol} setForm={setForm} form={form} />
      </Modal>
    </>
  );
};

export default Managers;
