import React, { useContext, useState } from "react";
import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const lis = [
  { name: "0 kid" },
  { name: "1 kid" },
  { name: "2 kids" },
  { name: "3 kids" },
  { name: "4 kids" },
];

const KidsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { kids, setKids } = useContext(RoomContext);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (index, name) => {
    // Perform any necessary action when a menu item is clicked
    // console.log("Menu item clicked:", lis[index].name);
    setIsOpen(false);
    setKids(name);
  };

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button
        className="w-full h-full flex items-center justify-between px-8"
        onClick={handleMenuToggle}
      >
        {kids === "0 Kids" ? "No Kids" : kids}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      {/* items */}
      {isOpen && (
        <Menu.Items
          as="ul"
          className="bg-white absolute w-full flex flex-col z-40"
        >
          {lis.map((li, index) => (
            <Menu.Item
              as="li"
              className={
                "border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
              }
              key={index}
              onClick={() => handleMenuItemClick(index, li.name)}
            >
              {li.name}
            </Menu.Item>
          ))}
        </Menu.Items>
      )}
    </Menu>
  );
};

export default KidsDropdown;
