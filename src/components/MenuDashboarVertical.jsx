import { Button, Divider, Menu } from "antd"
import Logo from "../assets/logo.png";
import { ArrowsAltOutlined, HomeOutlined, LogoutOutlined, PieChartOutlined, ProductOutlined, SettingOutlined, ShoppingCartOutlined, UserSwitchOutlined , UserOutlined} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  
  const items = [
    getItem("Dashboard", "sub1", <HomeOutlined />, [
      getItem("Home", "1", <PieChartOutlined />),
      getItem("Product", "2", <ProductOutlined />),
      getItem("Order", "3", <ArrowsAltOutlined />),
      getItem("Clients", "4", <UserSwitchOutlined />),
      getItem("Sales", "5", <ShoppingCartOutlined />),
      getItem("Managers", "6", <UserOutlined />),
      getItem("Setting", "7", <SettingOutlined />),
    ]),
  ];
  

const MenuDashboarVertical = () => {
const onClick = (e) => console.log("click ", e);
  return (
    <>
            <div>
            <div className="logoMenu">
              <img src={Logo} alt="logo" />
            </div>
            <Divider />
            <Menu
              onClick={onClick}
              style={{
                width: "100%",
              }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </div>
          <div className="divLogout">
            <Button type="primary" className="btnLogout"  size="middle" danger ghost icon={<LogoutOutlined />}>
              Logout{" "}
            </Button>
          </div>
    </>
  )
}

export default MenuDashboarVertical