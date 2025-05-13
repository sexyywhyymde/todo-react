import React from "react";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <aside className="w-1/4 bg-black p-4 text-white">
      <h2 className="text-xl font-semibold mb-2 text-white">SideBar</h2>
      <ul className="space-y-2 text-lg">
        <NavLink to="/">
          <li>All Tasks</li>
        </NavLink>
        <NavLink to="/done">
          <li>Done</li>
        </NavLink>
        <NavLink to="/pending">
          <li>Pending</li>
        </NavLink>
      </ul>
    </aside>
  );
};
