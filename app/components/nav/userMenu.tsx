"use client";

import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import MenuItem from "./MenuItem";
import Backdrop from "../backdrop";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <div className="relative z-30 cursor-pointer">
        <div onClick={toggleOpen}>
          <FaUserCircle />
        </div>
        {isOpen && (
          <div className="absolute rounded shadow-dropdown w-[170px] bg-light-grey overflow-hidden right-0 top-10 flex flex-col text-sm cursor-pointer transition">
            {currentUser ? (
              <div>
                <Link href="/settings">
                  <MenuItem onClick={toggleOpen}>Account Settings</MenuItem>
                </Link>
                <Link href="/orders">
                  <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                </Link>
                <Link href="/admin">
                  <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                </Link>
                <hr className="my-0 text-light-secondary" />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Log Out
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <MenuItem onClick={toggleOpen}>Login</MenuItem>
                </Link>
                <Link href="/register">
                  <MenuItem onClick={toggleOpen}>Register</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <Backdrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
