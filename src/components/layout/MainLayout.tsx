import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Content, Header } from "antd/es/layout/layout";

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout>
        <Sidebar />
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* <h1>The main content should go here</h1> */}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
