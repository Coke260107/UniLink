import { Outlet } from "react-router";
import TopBar from "../components/header & footer/Header";
import Footer from "../components/header & footer/Footer";

function MainLayout() {
  return (
    <div className={["min-h-screen px-4", "lg:px-0 lg:mx-40"].join(" ")}>
      <header className="flex sticky top-0 z-50 h-14">
        <TopBar />
      </header>

      <main className={["lg:mx-20"].join(" ")}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
