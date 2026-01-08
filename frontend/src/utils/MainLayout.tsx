import { Outlet } from "react-router";
import TopBar from "../components/TopNav/TopNav";

function MainLayout() {
  return (
    <div className="min-h-screen lg:mx-50">
      <TopBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
