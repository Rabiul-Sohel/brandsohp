import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header";


const MainLayout = () => {
  return (
    <div className="max-w-7xl mt-5 mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;