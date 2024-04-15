import RouterMain from "../router/RouterMain";
import Main from "./Main";
import MenuDashboarVertical from "./MenuDashboarVertical";
import MenuDashboardDer from "./MenuDashboardDer";

const Dashboard = () => {
  return (
    <>
      <Main>
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
            <div className="main">
              <RouterMain />
            </div>
          </div>
        </section>
      </Main>
    </>
  );
};

export default Dashboard;
