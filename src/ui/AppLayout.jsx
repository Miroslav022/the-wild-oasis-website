import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
