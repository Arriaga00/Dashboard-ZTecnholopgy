import { Avatar, Space, Input } from "antd";

import Notificacion from "./Notificacion";
import { UserOutlined } from "@ant-design/icons";
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
      <Avatar icon={<UserOutlined size="large" />} />
      <div>
        <h5>Andres arriaga</h5>
        <p className="rol">admin</p>
      </div>
    </>
  );
};

export default MenuDashboardDer;
