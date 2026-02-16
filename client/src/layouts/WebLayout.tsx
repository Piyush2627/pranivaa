import { Outlet } from "react-router-dom";
import TopNavBar from "../components/common/TopNavBar";
import WebFooter from "../components/common/WebFooter";
import CartSidebar from "../components/CartSidebar";

const WebLayout = () => {
  return (
    <>
      <TopNavBar />
      <CartSidebar />
      <Outlet />
      {/* <WebFooter /> */}
      <WebFooter />
    </>
  );
};

export default WebLayout;

