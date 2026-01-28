import { Outlet } from "react-router-dom";
import TopNavBar from "../components/common/TopNavBar";
import WebFooter from "../components/common/WebFooter";

const WebLayout = () => {
  return (
    <>
      <TopNavBar />
      <Outlet />
      {/* <WebFooter /> */}
      <WebFooter />
    </>
  );
};

export default WebLayout;
