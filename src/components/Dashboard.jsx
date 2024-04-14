import MenuDashboarVertical from "./MenuDashboarVertical";
import MenuDashboardDer from "./MenuDashboardDer";

const Dashboard = () => {
  return (
    <>
      <section className="dashboard">
        <div className="menu">
          <MenuDashboarVertical />
        </div>

        <div className="board">
          <div className="MenuDashboar">
            <h1>Dashboard</h1>
            <div className="MenuDashboarIzq">
              <MenuDashboardDer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
