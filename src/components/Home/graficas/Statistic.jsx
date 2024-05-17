import { Col, Row, Spin, Statistic } from "antd";
import CountUp from "react-countup";
import TimeInSesion from "./TimeInSesion";
import Context from "../../../context/Context";
import { useContext } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const Statistict = () => {
  const { infoClient, orders } = useContext(Context);

  if (!infoClient.length) {
    return (
      <Spin
        style={{ display: "none" }}
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
            spin
          />
        }
      />
    );
  }

  let total = 0;

  orders.forEach((order) => {
    const orderTotal = parseFloat(order.total);

    if (order.status === "completed" || order.status === "pending") {
      total += orderTotal;
    } else if (order.status === "cancelled") {
      total -= orderTotal;
    }
  });

  const user = infoClient.length;

  const formatter = (value) => <CountUp end={value} separator="," />;
  return (
    <>
      <article className="StaticSetion">
        <div className="Statistic">
          <Row gutter={16}>
            <Col span={12}>
              <Statistic
                style={{
                  height: "8.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  minWidth: "15rem",
                }}
                title="Active Users"
                value={user}
                formatter={formatter}
              />
            </Col>
            <Col span={12}>
              <Statistic
                style={{
                  height: "8rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  minWidth: "15rem",
                }}
                title="Account Balance (CNY)"
                value={total}
                precision={2}
                formatter={formatter}
              />
            </Col>
          </Row>
        </div>
        <div className="TimeInSesion">
          <TimeInSesion />
        </div>
      </article>
    </>
  );
};

export default Statistict;
