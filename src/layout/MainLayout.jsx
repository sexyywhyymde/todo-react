import { Outlet } from "react-router";

import { Header, SideBar } from "../components/";
import { useState } from "react";

export const MainLayout = () => {
  const [searchWord, setSearchWord] = useState ("")
  
  return (
    <div className="min-h-screen bg-gray-900 text-amber-50 ">
      <Header onSearch={setSearchWord}/>
      <div className="flex p-4 ">
        <SideBar />
        <div className="flex-1 p-4">
          <Outlet context={{searchWord}}/>
        </div>
      </div>
    </div>
  );
};
