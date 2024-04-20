import {  Space, Input } from "antd";

import Notificacion from "./Notificacion";
import InfoAvatar from "./avatar/InfoAvatar";
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
      
      <div className="infoavatar">
          <InfoAvatar/>
      </div>
    </>
  );
};

export default MenuDashboardDer;
