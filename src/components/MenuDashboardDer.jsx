import { Avatar, Space, Input } from "antd";

import Notificacion from "./Notificacion";
const { Search } = Input;

const MenuDashboardDer = () => {
  return (
    <>
      <Space direction="vertical">
        <Search
          placeholder="search"
          style={{
            width: "15rem",
          }}
        />
      </Space>

      <Notificacion />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" style={{ backgroundColor: '#f56a00'}} />
      <div>
        <h5>Andres arriaga</h5>
        <p className="rol">admin</p>
      </div>
    </>
  );
};

export default MenuDashboardDer;
