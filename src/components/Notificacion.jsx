import { BellOutlined } from "@ant-design/icons";
import { Badge } from "antd";

const Notificacion = () => {
  return (
    <>
      <div>
        <Badge count={1}>
          <BellOutlined
            style={{
              fontSize: "1.5rem",
              color: "#929597",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#568af7")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#929597")}
          />
        </Badge>
      </div>
    </>
  );
};

export default Notificacion;
