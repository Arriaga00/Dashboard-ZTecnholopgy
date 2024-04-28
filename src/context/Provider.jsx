import { useEffect, useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [infoCard, setInfoCard] = useState([]);
  const [infoUser, setInfoUser] = useState();
  const [infoUserSave, setInfoUserSave] = useState([]);

  const getData = () => {
    // -> llamando a todos los productos
    fetch("http://localhost:5000/api/product/consultar-productos")
      .then((res) => res.json())
      .then((res) => {
        setInfoCard(res);
      });
  };

  const getDataUsers = () => {
    // ->  llamando a todos los usuarios para luego mostrarlo en una tabla
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
    getData();
    getDataUsers();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          infoUser,
          setInfoUser,
          setInfoCard,
          infoCard,
          setInfoUserSave,
          infoUserSave,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default Provider;
