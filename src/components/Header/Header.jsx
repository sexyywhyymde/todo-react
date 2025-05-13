import { format } from "date-fns";
import SearchIcon from "../../assets/search-icon.svg";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export const Header = ({onSearch}) => {
  const date = format(new Date(), "MMMM, do, EEEE");
  const  [searchWord, setSearchWord] = useState("") 

  const handleChange = (e)=>{
    const value = e.target.value
    setSearchWord(value)

    onSearch(value)
  }
  return (
    <div className="flex justify-between px-6 items-center border-b border-gray-700 h-[100px] bg-gray-900 text-emerald-50 font-semibold text-3xl ">
      <div>
        <span className="text-blue-400">Dash</span>
        <span className="text-green-400">board</span>
      </div>
      <div className="flex items-center">
        <input
          className="bg-gray-700 text-emerald-50 border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          onChange={handleChange}
          value={searchWord}
        />
        <button className="bg-blue-300 p-1 rounded-r-md">
          <MagnifyingGlassCircleIcon className="text-white size-7" />
        </button>
      </div>
      <div>{date}</div>
    </div>
  );
};
