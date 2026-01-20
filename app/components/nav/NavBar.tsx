"use client";

import UserMenu from "./userMenu";
import CartCount from "./cartCount";
import Link from "next/link";
import Container from "../Container";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import HillsideLogo from "../../../public/images/hillside_logo.png"

interface NavBarProps {
  currentUser: any;
}

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  return (
    <div className="sticky top-0 w-full bg-backgroundWhite text-textPrimary font-semibold z-30 shadow-sm">
      <div className="py-4">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/">
              <Image
                src="/images/hillside_logo.png"
                alt="Hillside Logo"
                width={100}
                height={100}
              />
            </Link>
            <div className="flex items-center gap-8 md:gap-12">
              <div>Shop</div>
              <div>About Us</div>
              <div>Contact</div>
              <div className="flex items-center gap-4 md:gap-6 text-2xl">
                <div className="hidden md:block">
                  <FaSearch />
                </div>
                <CartCount />
                <UserMenu currentUser={currentUser} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
