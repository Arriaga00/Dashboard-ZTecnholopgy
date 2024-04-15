import { Button, Divider, Menu } from "antd"
import Logo from "../assets/logo.png";
import { ArrowsAltOutlined, HomeOutlined, LogoutOutlined, PieChartOutlined, ProductOutlined, SettingOutlined, ShoppingCartOutlined, UserSwitchOutlined , UserOutlined} from "@ant-design/icons";
import { NavLink  } from "react-router-dom";




const MenuDashboarVertical = () => {

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
      getItem(<NavLink to={'/user/dashboard/home'}>home</NavLink>, "1", <PieChartOutlined />),
      getItem(<NavLink to={'/user/dashboard/products'}>products</NavLink>, '2' ,<ProductOutlined />),
      getItem(<NavLink to={'/user/dashboard/order'}>order</NavLink>, "3", <ArrowsAltOutlined />),
      getItem(<NavLink to={'/user/dashboard/clients'}>clients</NavLink>, "4", <UserSwitchOutlined />),
      getItem(<NavLink to={'/user/dashboard/sales'}>sales</NavLink>, "5", <ShoppingCartOutlined />),
      getItem(<NavLink to={'/user/dashboard/managers'}>managers</NavLink>, "6", <UserOutlined />),
      getItem(<NavLink to={'/user/dashboard/settings'}>settings</NavLink>, "7", <SettingOutlined />),
    ]),
  ];
  

  return (
    <>
            <div>
            <div className="logoMenu">
              <img src={Logo} alt="logo" />
            </div>
            <Divider />
            <Menu
              style={{
                width: "100%",
              }}
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