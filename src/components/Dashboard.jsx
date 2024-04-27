import RouterMain from "../router/RouterMain";
import Main from "./Main";
import MenuDashboarVertical from "./MenuDashboarVertical";
import MenuDashboardDer from "./MenuDashboardDer";

const Dashboard = () => {
  return (
    <>
      <Main>
        <section className="dashboard">
          <aside className="menu">
            <MenuDashboarVertical />
          </aside>
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
