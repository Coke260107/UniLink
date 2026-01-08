import { Outlet } from "react-router";
import TopBar from "../components/TopNav/TopNav";

function MainLayout() {
  return (
    <div className="min-h-screen">
      <TopBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
