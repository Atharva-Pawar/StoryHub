import { Outlet } from "react-router-dom";
import { Appbar } from "../components";

const Layout = () => {
  return (
    <>
      <Appbar />

      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;